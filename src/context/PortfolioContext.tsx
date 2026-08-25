import React, { createContext, useContext, useState, useEffect } from 'react';
import { PERSONAL_INFO, VIDEO_SHOWCASE, GALLERY_ITEMS, SPEAKING_ENGAGEMENTS } from '../data/portfolioData';
import { GalleryItem, VideoShowcaseItem, SpeakingEngagement, ContactFormData } from '../types';
import { 
  subscribeToGallery, 
  createGalleryDocument, 
  updateGalleryDocument, 
  deleteGalleryDocument, 
  uploadGalleryImage,
  deleteStorageFile,
  UploadProgressCallback
} from '../lib/galleryService';
import { seedInitialGalleryIfEmpty } from '../lib/seedFirestore';

export interface PortfolioContextType {
  personalInfo: typeof PERSONAL_INFO;
  videoShowcase: VideoShowcaseItem[];
  galleryItems: GalleryItem[];
  speakingEngagements: SpeakingEngagement[];
  contactMessages: (ContactFormData & { id: string; timestamp: string; status: 'new' | 'read' | 'archived' })[];
  isGalleryLoading: boolean;
  galleryError: string | null;
  // Content Actions (Dynamic Firestore backed)
  addGalleryItem: (
    item: Omit<GalleryItem, 'id'>, 
    file?: File | Blob,
    onProgress?: UploadProgressCallback
  ) => Promise<string>;
  updateGalleryItem: (
    id: string, 
    item: Partial<GalleryItem>,
    newFile?: File | Blob,
    onProgress?: UploadProgressCallback
  ) => Promise<void>;
  deleteGalleryItem: (id: string) => Promise<void>;
  addVideoItem: (item: Omit<VideoShowcaseItem, 'id'>) => void;
  updateVideoItem: (id: string, item: Partial<VideoShowcaseItem>) => void;
  deleteVideoItem: (id: string) => void;
  updatePersonalInfo: (info: Partial<typeof PERSONAL_INFO>) => void;
  submitContactMessage: (data: ContactFormData) => void;
  deleteContactMessage: (id: string) => void;
  resetToDefaults: () => void;
}

const PortfolioContext = createContext<PortfolioContextType | undefined>(undefined);

const STORAGE_KEYS = {
  PERSONAL_INFO: 'tw_portfolio_personal_info_v2',
  VIDEOS: 'tw_portfolio_videos_v2',
  GALLERY: 'tw_portfolio_gallery_v2',
  SPEAKING: 'tw_portfolio_speaking_v2',
  MESSAGES: 'tw_portfolio_messages_v2',
};

export const PortfolioProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [personalInfo, setPersonalInfoState] = useState<typeof PERSONAL_INFO>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.PERSONAL_INFO);
      return saved ? JSON.parse(saved) : PERSONAL_INFO;
    } catch {
      return PERSONAL_INFO;
    }
  });

  const [videoShowcase, setVideoShowcase] = useState<VideoShowcaseItem[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.VIDEOS);
      return saved ? JSON.parse(saved) : VIDEO_SHOWCASE;
    } catch {
      return VIDEO_SHOWCASE;
    }
  });

  // Dynamic real-time Firestore Gallery state
  const [galleryItems, setGalleryItems] = useState<GalleryItem[]>(GALLERY_ITEMS);
  const [isGalleryLoading, setIsGalleryLoading] = useState<boolean>(true);
  const [galleryError, setGalleryError] = useState<string | null>(null);

  const [speakingEngagements, setSpeakingEngagements] = useState<SpeakingEngagement[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.SPEAKING);
      return saved ? JSON.parse(saved) : SPEAKING_ENGAGEMENTS;
    } catch {
      return SPEAKING_ENGAGEMENTS;
    }
  });

  const [contactMessages, setContactMessages] = useState<(ContactFormData & { id: string; timestamp: string; status: 'new' | 'read' | 'archived' })[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.MESSAGES);
      return saved ? JSON.parse(saved) : [
        {
          id: 'msg-seed-1',
          name: 'Dinas Komunikasi & Informatika',
          email: 'protokol@diskominfo.go.id',
          organization: 'Pemerintah Provinsi',
          serviceType: 'MC & Moderation',
          eventDate: '2026-09-15',
          message: 'Permohonan kesediaan sebagai Chief Moderator pada Summit Transformasi Digital 2026.',
          timestamp: '2026-08-20 10:30',
          status: 'new'
        }
      ];
    } catch {
      return [];
    }
  });

  // Real-time Firestore sync & Initial Seeding
  useEffect(() => {
    setIsGalleryLoading(true);
    // 1. Trigger initial seed if empty
    seedInitialGalleryIfEmpty().catch(console.warn);

    // 2. Subscribe to Firestore collection 'portfolio_gallery'
    const unsubscribe = subscribeToGallery(
      (items) => {
        if (items && items.length > 0) {
          setGalleryItems(items);
        } else {
          // If Firestore is still loading/empty, keep fallback gallery items
          setGalleryItems((prev) => (prev.length > 0 ? prev : GALLERY_ITEMS));
        }
        setIsGalleryLoading(false);
        setGalleryError(null);
      },
      (error) => {
        console.error('Failed to subscribe to Firestore gallery:', error);
        setGalleryError(error.message);
        setIsGalleryLoading(false);
      }
    );

    return () => unsubscribe();
  }, []);

  // Persistence for other auxiliary sections
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.PERSONAL_INFO, JSON.stringify(personalInfo));
    } catch (e) {
      console.warn('Storage quota error', e);
    }
  }, [personalInfo]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.VIDEOS, JSON.stringify(videoShowcase));
    } catch (e) {
      console.warn('Storage quota error', e);
    }
  }, [videoShowcase]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.MESSAGES, JSON.stringify(contactMessages));
    } catch (e) {
      console.warn('Storage quota error', e);
    }
  }, [contactMessages]);

  /**
   * CREATE: Adds new item to Firestore and Cloud Storage with client-side compression & real-time progress
   */
  const addGalleryItem = async (
    item: Omit<GalleryItem, 'id'>, 
    file?: File | Blob,
    onProgress?: UploadProgressCallback
  ): Promise<string> => {
    try {
      let finalImageUrl = item.image;
      let storagePath: string | undefined = undefined;

      const isNatural = Boolean(item.facialPreservationNote);

      if (file) {
        const uploadResult = await uploadGalleryImage(
          file, 
          item.category, 
          onProgress, 
          isNatural
        );
        finalImageUrl = uploadResult.downloadUrl;
        storagePath = uploadResult.storagePath;
      }

      const docPayload: any = {
        title: item.title,
        category: item.category,
        categoryLabel: item.categoryLabel,
        image: finalImageUrl,
        highResImage: finalImageUrl,
        aspectRatio: item.aspectRatio,
        caption: item.caption || item.description,
        description: item.description || item.caption,
        client: item.client || 'UMCreative',
        year: item.year || new Date().getFullYear().toString(),
        tags: item.tags || [],
        isNaturalFacialPreserved: isNatural,
      };

      if (isNatural && item.facialPreservationNote) {
        docPayload.facialPreservationNote = item.facialPreservationNote;
      }
      if (item.technicalSpecs) {
        docPayload.technicalSpecs = item.technicalSpecs;
      }
      if (storagePath) {
        docPayload.storagePath = storagePath;
      }

      const docId = await createGalleryDocument(docPayload);

      return docId;
    } catch (error) {
      console.error('Error adding gallery item:', error);
      throw error;
    }
  };

  /**
   * UPDATE: Updates existing item in Firestore.
   * If newFile is provided:
   * 1. Compresses and uploads new image to Firebase Storage
   * 2. Deletes the old image from Firebase Storage (preventing orphaned files)
   * 3. Updates Firestore document with the new download URL and storage path
   */
  const updateGalleryItem = async (
    id: string, 
    updated: Partial<GalleryItem>,
    newFile?: File | Blob,
    onProgress?: UploadProgressCallback
  ): Promise<void> => {
    try {
      const existingItem = galleryItems.find((i) => i.id === id);
      const updatePayload: any = {};

      const isNatural = updated.facialPreservationNote !== undefined 
        ? Boolean(updated.facialPreservationNote) 
        : Boolean(existingItem?.facialPreservationNote);

      let newStoragePath: string | undefined = undefined;

      // Handle Image Replacement
      if (newFile) {
        const uploadResult = await uploadGalleryImage(
          newFile,
          updated.category || existingItem?.category || 'gallery',
          onProgress,
          isNatural
        );
        updatePayload.image = uploadResult.downloadUrl;
        updatePayload.highResImage = uploadResult.downloadUrl;
        newStoragePath = uploadResult.storagePath;
        updatePayload.storagePath = newStoragePath;

        // CRUCIAL: Delete old image from Storage to prevent orphaned files
        if (existingItem?.image && existingItem.image !== uploadResult.downloadUrl) {
          await deleteStorageFile(existingItem.image);
        }
      } else if (updated.image !== undefined) {
        updatePayload.image = updated.image;
        updatePayload.highResImage = updated.highResImage || updated.image;
      }

      if (updated.title !== undefined) updatePayload.title = updated.title;
      if (updated.category !== undefined) updatePayload.category = updated.category;
      if (updated.categoryLabel !== undefined) updatePayload.categoryLabel = updated.categoryLabel;
      if (updated.caption !== undefined) updatePayload.caption = updated.caption;
      if (updated.description !== undefined) updatePayload.description = updated.description;
      if (updated.client !== undefined) updatePayload.client = updated.client;
      if (updated.year !== undefined) updatePayload.year = updated.year;
      if (updated.tags !== undefined) updatePayload.tags = updated.tags;
      if (updated.aspectRatio !== undefined) updatePayload.aspectRatio = updated.aspectRatio;
      
      if (updated.facialPreservationNote !== undefined) {
        updatePayload.isNaturalFacialPreserved = Boolean(updated.facialPreservationNote);
        updatePayload.facialPreservationNote = updated.facialPreservationNote;
      }
      if (updated.technicalSpecs !== undefined) {
        updatePayload.technicalSpecs = updated.technicalSpecs;
      }

      await updateGalleryDocument(id, updatePayload);
    } catch (error) {
      console.error('Error updating gallery item:', error);
      throw error;
    }
  };

  /**
   * DELETE: Deletes document from Firestore and removes file from Storage
   */
  const deleteGalleryItem = async (id: string): Promise<void> => {
    try {
      const itemToDelete = galleryItems.find((i) => i.id === id);
      await deleteGalleryDocument(id, itemToDelete?.image);
    } catch (error) {
      console.error('Error deleting gallery item:', error);
      throw error;
    }
  };

  const addVideoItem = (item: Omit<VideoShowcaseItem, 'id'>) => {
    const newItem: VideoShowcaseItem = {
      ...item,
      id: `vid-${Date.now()}-${Math.random().toString(36).substring(2, 6)}`,
    };
    setVideoShowcase((prev) => [newItem, ...prev]);
  };

  const updateVideoItem = (id: string, updated: Partial<VideoShowcaseItem>) => {
    setVideoShowcase((prev) =>
      prev.map((item) => (item.id === id ? { ...item, ...updated } : item))
    );
  };

  const deleteVideoItem = (id: string) => {
    setVideoShowcase((prev) => prev.filter((item) => item.id !== id));
  };

  const updatePersonalInfo = (info: Partial<typeof PERSONAL_INFO>) => {
    setPersonalInfoState((prev) => ({ ...prev, ...info }));
  };

  const submitContactMessage = (data: ContactFormData) => {
    const newMsg = {
      ...data,
      id: `msg-${Date.now()}`,
      timestamp: new Date().toLocaleString('id-ID', { dateStyle: 'medium', timeStyle: 'short' }),
      status: 'new' as const,
    };
    setContactMessages((prev) => [newMsg, ...prev]);
  };

  const deleteContactMessage = (id: string) => {
    setContactMessages((prev) => prev.filter((m) => m.id !== id));
  };

  const resetToDefaults = () => {
    setPersonalInfoState(PERSONAL_INFO);
    setVideoShowcase(VIDEO_SHOWCASE);
    setGalleryItems(GALLERY_ITEMS);
    setSpeakingEngagements(SPEAKING_ENGAGEMENTS);
    localStorage.removeItem(STORAGE_KEYS.PERSONAL_INFO);
    localStorage.removeItem(STORAGE_KEYS.VIDEOS);
    localStorage.removeItem(STORAGE_KEYS.GALLERY);
    localStorage.removeItem(STORAGE_KEYS.SPEAKING);
  };

  return (
    <PortfolioContext.Provider
      value={{
        personalInfo,
        videoShowcase,
        galleryItems,
        speakingEngagements,
        contactMessages,
        isGalleryLoading,
        galleryError,
        addGalleryItem,
        updateGalleryItem,
        deleteGalleryItem,
        addVideoItem,
        updateVideoItem,
        deleteVideoItem,
        updatePersonalInfo,
        submitContactMessage,
        deleteContactMessage,
        resetToDefaults,
      }}
    >
      {children}
    </PortfolioContext.Provider>
  );
};

export const usePortfolio = () => {
  const context = useContext(PortfolioContext);
  if (!context) {
    throw new Error('usePortfolio must be used within a PortfolioProvider');
  }
  return context;
};
