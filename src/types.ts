export type EmbedType = 'youtube' | 'gdrive' | 'instagram';

export interface VideoShowcaseItem {
  id: string;
  title: string;
  category: 'Broadcast' | 'Corporate' | 'Event' | 'Reel' | 'Documentary';
  type: EmbedType;
  embedUrl: string;
  directUrl: string;
  thumbnail: string;
  duration?: string;
  date: string;
  description: string;
  role: string;
  featured?: boolean;
  tags: string[];
}

export type GalleryCategory = 'all' | 'photography' | 'flyers' | 'pitchdeck' | 'branding';

export interface GalleryItem {
  id: string;
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
  // Strictly required for photography presentation
  facialPreservationNote?: string;
  technicalSpecs?: {
    camera?: string;
    lens?: string;
    settings?: string;
    software?: string;
    dimensions?: string;
  };
}

export interface SpeakingEngagement {
  id: string;
  title: string;
  role: 'Master of Ceremonies' | 'Chief Moderator' | 'Panel Moderator' | 'Formal Protocol MC' | 'Keynote Host';
  eventType: 'Academic Convocation' | 'National Seminar' | 'International Conference' | 'Corporate Gala' | 'Government Summit';
  organizer: string;
  location: string;
  date: string;
  attendees: string;
  description: string;
  keyMoments: string[];
  badgeColor?: string;
}

export interface SkillCategory {
  title: string;
  iconName: string;
  description: string;
  skills: { name: string; proficiency: number; tag?: string }[];
}

export interface WorkExperience {
  period: string;
  role: string;
  company: string;
  location: string;
  description: string;
  achievements: string[];
}

export interface ContactFormData {
  name: string;
  email: string;
  organization: string;
  serviceType: 'MC & Moderation' | 'Multimedia Production' | 'Commercial Photography' | 'Graphic & Visual Design' | 'Consultation';
  eventDate?: string;
  message: string;
}
