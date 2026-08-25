import imageCompression from 'browser-image-compression';

export interface CompressionOptions {
  maxSizeMB?: number;
  maxWidthOrHeight?: number;
  useWebWorker?: boolean;
  initialQuality?: number;
  fileType?: string;
  preserveSkinTexture?: boolean;
}

/**
 * Robust client-side image compression with high facial texture preservation.
 * 
 * Rules:
 * - Target file size threshold: ~300KB - 500KB (maxSizeMB: 0.45)
 * - Automatically convert heavy PNG/raw formats to optimized WebP / high-quality JPEG
 * - Quality constraint: For "100% Natural Facial Preservation", maintain high fidelity (initialQuality ~0.92, max resolution 2560px)
 *   so natural pores, sharp catchlights, and authentic textures are perfectly preserved without plastic/blur artifacts.
 */
export async function compressImageClientSide(
  file: File | Blob,
  options?: CompressionOptions
): Promise<{ compressedFile: File; originalSizeKB: number; compressedSizeKB: number; compressionRatio: number }> {
  // If Blob without name, wrap in File
  const sourceFile = file instanceof File ? file : new File([file], 'upload.jpg', { type: file.type || 'image/jpeg' });
  const originalSizeKB = Math.round(sourceFile.size / 1024);

  // If already under ~350KB and already WebP/JPEG, return directly
  if (originalSizeKB <= 350 && (sourceFile.type === 'image/webp' || sourceFile.type === 'image/jpeg')) {
    console.log("Compressed file ready:", sourceFile);
    return {
      compressedFile: sourceFile,
      originalSizeKB,
      compressedSizeKB: originalSizeKB,
      compressionRatio: 0,
    };
  }

  const isPreserved = options?.preserveSkinTexture !== false;

  const defaultOptions = {
    maxSizeMB: options?.maxSizeMB || 0.45, // ~450 KB max threshold
    maxWidthOrHeight: options?.maxWidthOrHeight || 2560, // 2K/4K display readiness
    useWebWorker: true,
    initialQuality: isPreserved ? (options?.initialQuality || 0.92) : 0.85,
    fileType: options?.fileType || 'image/webp', // Convert heavy PNG/JPG to WebP
  };

  try {
    const compressedBlob = await imageCompression(sourceFile, defaultOptions);
    
    // Strict output validation
    if (!compressedBlob || !(compressedBlob instanceof Blob) || compressedBlob.size === 0) {
      throw new Error('Hasil kompresi gambar tidak valid atau kosong.');
    }

    // Construct new File with proper extension
    const extension = defaultOptions.fileType === 'image/webp' ? 'webp' : 'jpg';
    const baseName = sourceFile.name ? sourceFile.name.replace(/\.[^/.]+$/, '') : 'image';
    const newFileName = `${baseName}.${extension}`;

    const compressedFile = new File([compressedBlob], newFileName, {
      type: defaultOptions.fileType,
      lastModified: Date.now(),
    });

    // Verification check
    if (!compressedFile || compressedFile.size === 0) {
      throw new Error('Gagal mengonversi blob kompresi menjadi File.');
    }

    // Explicit log as requested
    console.log("Compressed file ready:", compressedFile);

    const compressedSizeKB = Math.round(compressedFile.size / 1024);
    const compressionRatio = Math.max(0, Math.round(((originalSizeKB - compressedSizeKB) / originalSizeKB) * 100));

    return {
      compressedFile,
      originalSizeKB,
      compressedSizeKB,
      compressionRatio,
    };
  } catch (error) {
    console.warn('browser-image-compression fallback triggered:', error);
    
    // Validate source file fallback
    if (!sourceFile || !(sourceFile instanceof Blob) || sourceFile.size === 0) {
      throw new Error('File gambar asal tidak valid atau kosong.');
    }

    console.log("Compressed file ready (fallback source):", sourceFile);

    return {
      compressedFile: sourceFile,
      originalSizeKB,
      compressedSizeKB: originalSizeKB,
      compressionRatio: 0,
    };
  }
}
