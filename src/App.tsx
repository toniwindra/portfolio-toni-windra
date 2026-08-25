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
  const [showCertModal, setShowCertModal] = useState(false);
  const [showCvesModal, setShowCvesModal] = useState(false);
  const [activeLegalPdf, setActiveLegalPdf] = useState<string | null>(null);

  const trackGAEvent = (eventName: string, eventParams: any = {}) => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', eventName, eventParams);
    }
  };

  const legalDocuments = [
    {
      id: "akta",
      title: "Akta Pendirian CV",
      subtitle: "Notaris Osmarwan Putra, SH., M.Kn.",
      pdf: "/akta-thr.pdf",
      img: "https://i.ibb.co.com/WQDwHPW/Screenshot-2026-08-25-173303.png"
    },
    {
      id: "skt",
      title: "SKT Kemenkumham",
      subtitle: "Surat Keterangan Terdaftar",
      pdf: "/skt-thr.pdf",
      img: "https://i.ibb.co.com/HTX4tK1R/Screenshot-2026-08-25-173232.png"
    },
    {
      id: "nib-thr",
      title: "NIB THR Production",
      subtitle: "Perizinan Berusaha Berbasis Risiko",
      pdf: "/nib-thr.pdf",
      img: "https://i.ibb.co.com/HTd7cMZx/Screenshot-2026-08-25-173324.png"
    },
    {
      id: "nib-umc",
      title: "NIB UMCreative",
      subtitle: "Usaha Mikro - Pelatihan TIK",
      pdf: "/nib-umc.pdf",
      img: "https://i.ibb.co.com/p623GLq6/Screenshot-2026-08-25-173213.png"
    }
  ];

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
        onOpenCV={() => { setIsCVOpen(true); trackGAEvent('view_cv', { method: 'button_click' }); }}
        onOpenContact={handleScrollToContact}
      />

      {/* Main Content Flow */}
      <main className="relative z-10">
        {/* 1. Hero Section (Pristine Light Layout with Large Cutout Portrait) */}
        <HeroSection
          onOpenCV={() => { setIsCVOpen(true); trackGAEvent('view_cv', { method: 'button_click' }); }}
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

        {/* LISENSI & SERTIFIKASI SECTION */}
        <div className="mb-24 pt-12 border-t border-slate-100 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="max-w-3xl mb-10">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Lisensi & Sertifikasi</h2>
            <p className="text-slate-600 text-lg">Validasi kompetensi profesional dan pengakuan standar industri nasional.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* BNSP Certificate Card (Media Card Layout) */}
            <div className="bg-white border border-slate-200 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col h-full overflow-hidden">
              
              {/* Thumbnail Banner Area */}
              <div className="w-full h-48 bg-slate-100 relative overflow-hidden border-b border-slate-100">
                <img 
                  src="https://i.ibb.co.com/bpPd6SY/Screenshot-2026-08-25-153529.png" 
                  alt="Thumbnail Sertifikat BNSP" 
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700" 
                  loading="lazy"
                />
                {/* Floating Verified Badge */}
                <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-bold text-blue-600 shadow-sm flex items-center gap-1.5 border border-white/20">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" /></svg>
                  Terverifikasi
                </div>
              </div>

              {/* Content Area */}
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-bold text-slate-900 mb-2">Certified Video Editor</h3>
                <p className="text-slate-500 text-sm mb-6 flex-1 leading-relaxed">
                  Badan Nasional Sertifikasi Profesi (BNSP) - LSP Digital Teknologi Informasi Indonesia.
                </p>
                
                <button 
                  onClick={() => { setShowCertModal(true); trackGAEvent('view_certificate', { certificate_name: 'BNSP' }); }}
                  className="w-full py-3 bg-slate-900 hover:bg-blue-600 text-white rounded-xl font-semibold transition-colors flex items-center justify-center gap-2"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                  Pratinjau Dokumen
                </button>
              </div>
            </div>

            {/* CVES Certificate Card (Media Card Layout) */}
            <div className="bg-white border border-slate-200 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col h-full overflow-hidden">
              
              {/* Thumbnail Banner Area */}
              <div className="w-full h-48 bg-slate-100 relative overflow-hidden border-b border-slate-100">
                <img 
                  src="https://i.ibb.co.com/8Q2YTZT/Screenshot-2026-08-25-171547.png" 
                  alt="Thumbnail Sertifikat CVES" 
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700" 
                  loading="lazy"
                />
                {/* Floating Verified Badge */}
                <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-bold text-blue-600 shadow-sm flex items-center gap-1.5 border border-white/20">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" /></svg>
                  Terverifikasi
                </div>
              </div>

              {/* Content Area */}
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-bold text-slate-900 mb-2">Sertifikat CVES</h3>
                <p className="text-slate-500 text-sm mb-6 flex-1 leading-relaxed">
                  Certified Video Editing Specialist (CVES).
                </p>
                
                <button 
                  onClick={() => { setShowCvesModal(true); trackGAEvent('view_certificate', { certificate_name: 'CVES' }); }}
                  className="w-full py-3 bg-slate-900 hover:bg-blue-600 text-white rounded-xl font-semibold transition-colors flex items-center justify-center gap-2"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                  Pratinjau Dokumen
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* LEGALITAS PERUSAHAAN SECTION */}
        <div className="mb-24 pt-12 border-t border-slate-100 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="max-w-3xl mb-10">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Legalitas Perusahaan</h2>
            <p className="text-slate-600 text-lg">Dokumen resmi pendaftaran badan usaha dan perizinan operasional.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {legalDocuments.map((doc) => (
              <div key={doc.id} className="bg-white border border-slate-200 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col h-full overflow-hidden">
                <div className="w-full h-32 bg-slate-100 relative overflow-hidden border-b border-slate-100">
                  <img src={doc.img} alt={doc.title} className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700" loading="lazy" />
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="text-base font-bold text-slate-900 mb-1">{doc.title}</h3>
                  <p className="text-slate-500 text-xs mb-4 flex-1">{doc.subtitle}</p>
                  <button onClick={() => { setActiveLegalPdf(doc.pdf); trackGAEvent('view_legal_document', { document_title: doc.title }); }} className="w-full py-2 bg-slate-100 hover:bg-slate-900 hover:text-white text-slate-800 rounded-lg text-sm font-semibold transition-colors flex items-center justify-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                    Lihat
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

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

      {/* PDF CERTIFICATE MODAL */}
      {showCertModal && (
        <div className="fixed inset-0 z-[120] flex items-center justify-center bg-slate-900/80 backdrop-blur-sm p-4 sm:p-6" onClick={() => setShowCertModal(false)}>
          <div className="bg-white w-full max-w-4xl h-[85vh] rounded-2xl shadow-2xl flex flex-col overflow-hidden relative animate-in zoom-in duration-300" onClick={(e) => e.stopPropagation()}>
            
            {/* Modal Header */}
            <div className="flex justify-between items-center px-6 py-4 border-b border-slate-100 bg-slate-50">
              <h3 className="font-bold text-slate-800 flex items-center gap-2">
                <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                Sertifikat BNSP - Certified Video Editor
              </h3>
              <button onClick={() => setShowCertModal(false)} className="p-2 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-full transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
              </button>
            </div>

            {/* PDF Viewer (iframe) */}
            <div className="flex-1 w-full h-full bg-slate-100">
              <iframe 
                src="/sertifikat-bnsp.pdf" 
                className="w-full h-full border-none"
                title="Sertifikat BNSP Toni Windra"
              >
                <p className="text-center mt-10 text-slate-500">Browser Anda tidak mendukung pratinjau PDF. <a href="/sertifikat-bnsp.pdf" className="text-blue-600 underline">Unduh di sini</a>.</p>
              </iframe>
            </div>
          </div>
        </div>
      )}

      {/* CVES CERTIFICATE MODAL */}
      {showCvesModal && (
        <div className="fixed inset-0 z-[120] flex items-center justify-center bg-slate-900/80 backdrop-blur-sm p-4 sm:p-6" onClick={() => setShowCvesModal(false)}>
          <div className="bg-white w-full max-w-4xl h-[85vh] rounded-2xl shadow-2xl flex flex-col overflow-hidden relative animate-in zoom-in duration-300" onClick={(e) => e.stopPropagation()}>
            
            {/* Modal Header */}
            <div className="flex justify-between items-center px-6 py-4 border-b border-slate-100 bg-slate-50">
              <h3 className="font-bold text-slate-800 flex items-center gap-2">
                <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                Sertifikat CVES
              </h3>
              <button onClick={() => setShowCvesModal(false)} className="p-2 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-full transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
              </button>
            </div>

            {/* PDF Viewer (iframe) */}
            <div className="flex-1 w-full h-full bg-slate-100">
              <iframe 
                src="/sertifikat-cves.pdf" 
                className="w-full h-full border-none"
                title="Sertifikat CVES Toni Windra"
              >
                <p className="text-center mt-10 text-slate-500">Browser Anda tidak mendukung pratinjau PDF. <a href="/sertifikat-cves.pdf" className="text-blue-600 underline">Unduh di sini</a>.</p>
              </iframe>
            </div>
          </div>
        </div>
      )}

      {/* DYNAMIC LEGAL PDF MODAL */}
      {activeLegalPdf && (
        <div className="fixed inset-0 z-[130] flex items-center justify-center bg-slate-900/80 backdrop-blur-sm p-4 sm:p-6" onClick={() => setActiveLegalPdf(null)}>
          <div className="bg-white w-full max-w-4xl h-[85vh] rounded-2xl shadow-2xl flex flex-col overflow-hidden relative animate-in zoom-in duration-300" onClick={(e) => e.stopPropagation()}>
            <div className="flex justify-between items-center px-6 py-4 border-b border-slate-100 bg-slate-50">
              <h3 className="font-bold text-slate-800 flex items-center gap-2">
                 <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                 Pratinjau Dokumen Legal
              </h3>
              <button onClick={() => setActiveLegalPdf(null)} className="p-2 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-full transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
              </button>
            </div>
            <div className="flex-1 w-full h-full bg-slate-100">
              <iframe src={activeLegalPdf} className="w-full h-full border-none" title="Dokumen Legal"></iframe>
            </div>
          </div>
        </div>
      )}
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
