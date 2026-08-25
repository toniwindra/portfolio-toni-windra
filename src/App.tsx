import React, { useState } from 'react';
import { PortfolioProvider, usePortfolio } from './context/PortfolioContext';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { LeadershipSection } from './components/LeadershipSection';
import { VideoSection } from './components/VideoSection';
import { GallerySection } from './components/GallerySection';
import { SpeakingSection } from './components/SpeakingSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { LightboxModal } from './components/LightboxModal';
import { CVModal } from './components/CVModal';
import { GalleryItem } from './types';

function MainAppContent() {
  const { galleryItems } = usePortfolio();
  const [isCVOpen, setIsCVOpen] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const handleOpenLightbox = (item: GalleryItem, index: number) => {
    const actualIndex = galleryItems.findIndex((i) => i.id === item.id);
    setLightboxIndex(actualIndex !== -1 ? actualIndex : index);
    setLightboxOpen(true);
  };

  const handleScrollToContact = () => {
    const contactEl = document.getElementById('contact');
    if (contactEl) contactEl.scrollIntoView({ behavior: 'smooth' });
  };

  // Public View: Light Minimalist Glassmorphism (Strictly NO DARK MODE)
  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900 relative overflow-x-hidden selection:bg-sky-500/20 selection:text-sky-900">
      
      {/* Pristine Light Ambient Background Glows & Subtle Texture */}
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute -top-20 left-1/4 w-[700px] h-[600px] bg-gradient-to-br from-sky-100/70 via-indigo-50/50 to-transparent rounded-full blur-[140px]" />
        <div className="absolute top-1/3 -right-20 w-[600px] h-[600px] bg-gradient-to-bl from-blue-100/60 via-slate-100/40 to-transparent rounded-full blur-[160px]" />
        <div className="absolute bottom-1/4 -left-20 w-[600px] h-[500px] bg-gradient-to-tr from-emerald-50/50 via-teal-50/30 to-transparent rounded-full blur-[140px]" />
        <div className="absolute -bottom-20 right-1/4 w-[700px] h-[400px] bg-slate-100/70 rounded-full blur-[120px]" />
        
        {/* Subtle ultra-light grid pattern for optical precision */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: `radial-gradient(rgba(15, 23, 42, 0.4) 1px, transparent 1px)`,
            backgroundSize: '28px 28px',
          }}
        />
      </div>

      {/* Floating Light Frosted Glass Navigation Bar */}
      <Navbar
        onOpenCV={() => setIsCVOpen(true)}
        onOpenContact={handleScrollToContact}
      />

      {/* Main Content Flow */}
      <main className="relative z-10">
        {/* 1. Hero Section (Pristine Light Layout with Large Cutout Portrait) */}
        <HeroSection
          onOpenCV={() => setIsCVOpen(true)}
          onOpenContact={handleScrollToContact}
        />

        {/* 2. Rekam Jejak Kepemimpinan (Leadership History) */}
        <LeadershipSection />

        {/* 3. Embedded Video Section (16:9 Responsive Embeds for YouTube / Google Drive / IG Reels) */}
        <VideoSection />

        {/* 3. Photography & Graphic Design Gallery (Masonry + 100% Natural Facial Preservation Ethos + Lightbox) */}
        <GallerySection onOpenLightbox={handleOpenLightbox} />

        {/* 4. Public Communication & MC Track Record */}
        <SpeakingSection onOpenContact={handleScrollToContact} />

        {/* 5. Contact & Booking Form */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Mandatory Lightbox Modal */}
      <LightboxModal
        items={galleryItems}
        currentIndex={lightboxIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onNavigate={(newIndex) => setLightboxIndex(newIndex)}
      />

      {/* Interactive Curriculum Vitae Modal */}
      <CVModal
        isOpen={isCVOpen}
        onClose={() => setIsCVOpen(false)}
      />
    </div>
  );
}

export default function App() {
  return (
    <PortfolioProvider>
      <MainAppContent />
    </PortfolioProvider>
  );
}
