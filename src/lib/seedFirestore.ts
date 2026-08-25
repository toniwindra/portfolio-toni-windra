import { getDocs, collection } from 'firebase/firestore';
import { db } from './firebase';
import { createGalleryDocument } from './galleryService';
import { GALLERY_ITEMS } from '../data/portfolioData';

/**
 * Ensures initial high quality portfolio items exist in Firestore
 * If collection is empty, populates from GALLERY_ITEMS
 */
export async function seedInitialGalleryIfEmpty(): Promise<void> {
  try {
    const colRef = collection(db, 'portfolio_gallery');
    const snapshot = await getDocs(colRef);
    if (snapshot.empty) {
      console.log('Seeding initial portfolio gallery items to Firestore...');
      for (const item of GALLERY_ITEMS) {
        const payload: any = {
          title: item.title,
          category: item.category,
          categoryLabel: item.categoryLabel,
          image: item.image,
          highResImage: item.highResImage || item.image,
          aspectRatio: item.aspectRatio,
          caption: item.caption,
          description: item.description,
          client: item.client || 'UMCreative',
          year: item.year,
          tags: item.tags,
          isNaturalFacialPreserved: Boolean(item.facialPreservationNote),
        };
        if (item.facialPreservationNote) {
          payload.facialPreservationNote = item.facialPreservationNote;
        }
        if (item.technicalSpecs) {
          payload.technicalSpecs = item.technicalSpecs;
        }
        await createGalleryDocument(payload);
      }
      console.log('Successfully seeded gallery items.');
    }
  } catch (error) {
    console.warn('Could not auto-seed gallery (rules or network check):', error);
  }
}
