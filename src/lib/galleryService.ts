import { 
  collection, 
  getDocs, 
  addDoc, 
  updateDoc, 
  deleteDoc, 
  doc, 
  query, 
  orderBy, 
  onSnapshot,
  serverTimestamp,
  Timestamp 
} from 'firebase/firestore';
import { 
  ref, 
  uploadBytesResumable, 
  getDownloadURL, 
  deleteObject 
} from 'firebase/storage';
import { db, storage } from './firebase';
import { GalleryItem, GalleryCategory } from '../types';
import { compressImageClientSide } from './imageCompression';

const GALLERY_COLLECTION = 'portfolio_gallery';

export interface UploadProgressCallback {
  (progress: number, stage?: 'compressing' | 'uploading' | 'done'): void;
}

export interface GalleryDocData {
  title: string;
  category: GalleryCategory;
  categoryLabel: string;
  image: string;
  highResImage?: string;
  aspectRatio: 'portrait' | 'landscape' | 'square' | 'wide';
  caption: string;
  description: string;
  client?: string;
  year: string;
  tags: string[];
  isNaturalFacialPreserved: boolean;
  facialPreservationNote?: string;
  technicalSpecs?: {
    camera?: string;
    lens?: string;
    settings?: string;
    software?: string;
    dimensions?: string;
  };
  storagePath?: string;
  createdAt?: Timestamp | any;
  updatedAt?: Timestamp | any;
}

/**
 * Maps Firebase Storage error codes to clear, actionable Indonesian diagnostic messages.
 */
function getStorageErrorMessage(error: any): string {
  if (!error) return 'Terjadi kesalahan tidak dikenal saat mengunggah.';
  const code = error.code || '';
  switch (code) {
    case 'storage/unauthorized':
      return 'Akses Firebase Storage ditolak (storage/unauthorized). Mohon periksa Storage Security Rules di Firebase Console (storage.rules) untuk mengizinkan hak tulis.';
    case 'storage/canceled':
      return 'Pengunggahan berkas dibatalkan oleh pengguna atau sistem (storage/canceled).';
    case 'storage/quota-exceeded':
      return 'Kapasitas penyimpanan Firebase Storage telah melebihi batas kuota gratis (storage/quota-exceeded).';
    case 'storage/bucket-not-found':
      return 'Storage Bucket Firebase tidak ditemukan. Pastikan storageBucket sudah diaktifkan di Firebase Console.';
    case 'storage/project-not-found':
      return 'Project Firebase tidak ditemukan. Periksa konfigurasi .env.local Anda.';
    case 'storage/retry-limit-exceeded':
      return 'Waktu koneksi ke Firebase Storage habis (timeout/retry limit). Periksa koneksi internet Anda.';
    case 'storage/invalid-checksum':
      return 'Integritas file tidak cocok saat proses transfer (invalid checksum). Silakan coba lagi.';
    case 'storage/cannot-slice-blob':
      return 'Gagal memproses potongan file gambar (cannot slice blob). Silakan gunakan format file lain.';
    default:
      return error.message || `Terjadi kesalahan pada Firebase Storage (${code || 'unknown'}).`;
  }
}

/**
 * Delete a file from Firebase Cloud Storage by its storage path or full download URL
 */
export async function deleteStorageFile(storagePathOrUrl?: string): Promise<void> {
  if (!storagePathOrUrl) return;
  try {
    let storageRef;
    if (storagePathOrUrl.startsWith('portfolio_gallery/')) {
      storageRef = ref(storage, storagePathOrUrl);
    } else if (storagePathOrUrl.includes('firebasestorage.googleapis.com') || storagePathOrUrl.includes('firebasestorage.app')) {
      storageRef = ref(storage, storagePathOrUrl);
    }
    if (storageRef) {
      await deleteObject(storageRef);
      console.log(`Successfully deleted storage file: ${storagePathOrUrl}`);
    }
  } catch (err: any) {
    // If object does not exist (e.g., initial seed unsplash URL or external link), log warning without blocking
    console.warn(`Storage asset could not be deleted or was external URL:`, err.message || err);
  }
}

/**
 * Upload an image file to Firebase Cloud Storage with client-side compression,
 * real-time progress reporting, active error handling, and timeout safeguards.
 */
export async function uploadGalleryImage(
  file: File | Blob,
  fileNamePrefix: string = 'gallery',
  onProgress?: UploadProgressCallback,
  preserveSkinTexture: boolean = true
): Promise<{ downloadUrl: string; storagePath: string; compressedSizeKB: number; originalSizeKB: number; compressionRatio: number }> {
  // Validate input file early
  if (!file) {
    throw new Error('Tidak ada berkas gambar yang dipilih untuk diunggah.');
  }

  try {
    // Stage 1: Client-side compression
    if (onProgress) onProgress(5, 'compressing');
    
    const { compressedFile, originalSizeKB, compressedSizeKB, compressionRatio } = await compressImageClientSide(file, {
      maxSizeMB: 0.45,
      maxWidthOrHeight: 2560,
      initialQuality: preserveSkinTexture ? 0.92 : 0.85,
      fileType: 'image/webp',
      preserveSkinTexture,
    });

    // Verification check for valid file/blob
    if (!compressedFile || !(compressedFile instanceof Blob) || compressedFile.size === 0) {
      throw new Error('File hasil kompresi kosong atau tidak valid.');
    }

    if (onProgress) onProgress(15, 'uploading');

    // Stage 2: Storage Upload with Resumable Progress Task
    const timestamp = Date.now();
    const randomSuffix = Math.random().toString(36).substring(2, 8);
    const extension = 'webp';
    
    const storagePath = `portfolio_gallery/${fileNamePrefix}_${timestamp}_${randomSuffix}.${extension}`;
    const storageRef = ref(storage, storagePath);

    const uploadTask = uploadBytesResumable(storageRef, compressedFile, {
      contentType: 'image/webp',
      customMetadata: {
        originalSizeKB: originalSizeKB.toString(),
        compressedSizeKB: compressedSizeKB.toString(),
        naturalFacialPreserved: preserveSkinTexture ? 'true' : 'false',
      }
    });

    return new Promise((resolve, reject) => {
      let isSettled = false;
      
      // Safety timeout: 25 seconds if upload hangs or security rules block connection
      const timeoutId = setTimeout(() => {
        if (!isSettled) {
          isSettled = true;
          try {
            uploadTask.cancel();
          } catch (e) {
            // ignore
          }
          const timeoutErr = new Error(
            'Proses unggah melebihi batas waktu (timeout 25 detik). Periksa koneksi internet atau pastikan Storage Security Rules (storage.rules) mengizinkan upload pada Firebase Console.'
          );
          console.error(timeoutErr);
          reject(timeoutErr);
        }
      }, 25000);

      uploadTask.on(
        'state_changed',
        (snapshot) => {
          if (isSettled) return;
          const bytesTransferred = snapshot.bytesTransferred;
          const totalBytes = snapshot.totalBytes;
          
          if (totalBytes > 0) {
            // Map 15% -> 95%
            const calculatedPercent = Math.round((bytesTransferred / totalBytes) * 80) + 15;
            const boundedPercent = Math.min(95, Math.max(15, calculatedPercent));
            if (onProgress) onProgress(boundedPercent, 'uploading');
          }
        },
        (error) => {
          if (isSettled) return;
          isSettled = true;
          clearTimeout(timeoutId);
          console.error('Firebase Storage upload error object:', error);
          const detailedMessage = getStorageErrorMessage(error);
          reject(new Error(detailedMessage));
        },
        async () => {
          if (isSettled) return;
          isSettled = true;
          clearTimeout(timeoutId);
          try {
            const downloadUrl = await getDownloadURL(uploadTask.snapshot.ref);
            if (onProgress) onProgress(100, 'done');
            resolve({
              downloadUrl,
              storagePath,
              compressedSizeKB,
              originalSizeKB,
              compressionRatio,
            });
          } catch (err: any) {
            console.error('Error retrieving download URL after upload:', err);
            reject(new Error(`Gagal mendapatkan Download URL: ${err.message || 'Unknown error'}`));
          }
        }
      );
    });
  } catch (error: any) {
    console.error('Fatal error in uploadGalleryImage flow:', error);
    throw error;
  }
}

function removeUndefinedFields<T extends Record<string, any>>(obj: T): Partial<T> {
  const cleaned: any = {};
  for (const [key, value] of Object.entries(obj)) {
    if (value === undefined) {
      continue;
    }
    if (value !== null && typeof value === 'object' && !Array.isArray(value) && !(value instanceof Date)) {
      if (value._methodName || (value.constructor && value.constructor.name.includes('FieldValue'))) {
        cleaned[key] = value;
      } else {
        const nested = removeUndefinedFields(value);
        if (Object.keys(nested).length > 0) {
          cleaned[key] = nested;
        }
      }
    } else {
      cleaned[key] = value;
    }
  }
  return cleaned;
}

/**
 * Create a new gallery item in Firestore collection 'portfolio_gallery'
 */
export async function createGalleryDocument(data: Omit<GalleryDocData, 'createdAt' | 'updatedAt'>): Promise<string> {
  try {
    const colRef = collection(db, GALLERY_COLLECTION);
    const cleanedData = removeUndefinedFields({
      ...data,
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
    });
    const docRef = await addDoc(colRef, cleanedData);
    return docRef.id;
  } catch (error) {
    console.error('Error creating gallery document in Firestore:', error);
    throw error;
  }
}

/**
 * Fetch all gallery documents from Firestore
 */
export async function fetchGalleryDocuments(): Promise<GalleryItem[]> {
  try {
    const colRef = collection(db, GALLERY_COLLECTION);
    const q = query(colRef, orderBy('createdAt', 'desc'));
    const snapshot = await getDocs(q);
    
    return snapshot.docs.map((docSnap) => {
      const d = docSnap.data() as GalleryDocData;
      return {
        id: docSnap.id,
        title: d.title,
        category: d.category,
        categoryLabel: d.categoryLabel,
        image: d.image,
        highResImage: d.highResImage || d.image,
        aspectRatio: d.aspectRatio || 'portrait',
        caption: d.caption || '',
        description: d.description || '',
        client: d.client,
        year: d.year || new Date().getFullYear().toString(),
        tags: d.tags || [],
        facialPreservationNote: d.isNaturalFacialPreserved
          ? (d.facialPreservationNote || '100% Natural Skin Preservation (Authentic Pores, Zero Plastic Filter)')
          : undefined,
        technicalSpecs: d.technicalSpecs,
      };
    });
  } catch (error) {
    console.error('Error fetching gallery documents:', error);
    throw error;
  }
}

/**
 * Subscribe to real-time updates of the 'portfolio_gallery' collection
 */
export function subscribeToGallery(
  onData: (items: GalleryItem[]) => void,
  onError?: (err: Error) => void
) {
  const colRef = collection(db, GALLERY_COLLECTION);
  const q = query(colRef, orderBy('createdAt', 'desc'));

  return onSnapshot(
    q,
    (snapshot) => {
      const items: GalleryItem[] = snapshot.docs.map((docSnap) => {
        const d = docSnap.data() as GalleryDocData;
        return {
          id: docSnap.id,
          title: d.title,
          category: d.category,
          categoryLabel: d.categoryLabel,
          image: d.image,
          highResImage: d.highResImage || d.image,
          aspectRatio: d.aspectRatio || 'portrait',
          caption: d.caption || '',
          description: d.description || '',
          client: d.client,
          year: d.year || new Date().getFullYear().toString(),
          tags: d.tags || [],
          facialPreservationNote: d.isNaturalFacialPreserved
            ? (d.facialPreservationNote || '100% Natural Skin Preservation (Authentic Pores, Zero Plastic Filter)')
            : undefined,
          technicalSpecs: d.technicalSpecs,
        };
      });
      onData(items);
    },
    (error) => {
      console.error('Gallery snapshot error:', error);
      if (onError) onError(error);
    }
  );
}

/**
 * Update an existing gallery document in Firestore
 */
export async function updateGalleryDocument(
  id: string,
  data: Partial<GalleryDocData>
): Promise<void> {
  try {
    const docRef = doc(db, GALLERY_COLLECTION, id);
    const cleanedData = removeUndefinedFields({
      ...data,
      updatedAt: serverTimestamp(),
    });
    await updateDoc(docRef, cleanedData);
  } catch (error) {
    console.error(`Error updating gallery document ${id}:`, error);
    throw error;
  }
}

/**
 * Delete a gallery document from Firestore AND remove its associated image file from Firebase Storage
 */
export async function deleteGalleryDocument(
  id: string,
  storagePathOrUrl?: string
): Promise<void> {
  try {
    // 1. Delete document from Firestore
    const docRef = doc(db, GALLERY_COLLECTION, id);
    await deleteDoc(docRef);

    // 2. Delete file from Storage if storage path or storage URL is known
    if (storagePathOrUrl) {
      await deleteStorageFile(storagePathOrUrl);
    }
  } catch (error) {
    console.error(`Error deleting gallery document ${id}:`, error);
    throw error;
  }
}
