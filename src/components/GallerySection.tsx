import React, { useState, useEffect } from 'react';
import { Image as ImageIcon, Sparkles, Filter, CheckCircle2, Maximize2, Tag, Layers, SlidersHorizontal, ArrowUpRight, Camera, Palette } from 'lucide-react';
import { usePortfolio } from '../context/PortfolioContext';
import { GalleryItem, GalleryCategory } from '../types';

interface GallerySectionProps {
  onOpenLightbox: (item: GalleryItem, index: number) => void;
}

export const GallerySection: React.FC<GallerySectionProps> = ({ onOpenLightbox }) => {
  const { galleryItems } = usePortfolio();
  
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-play effect: changes image every 4 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === photographyPortfolio.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  // Photography Filter (No tabs, just the items)
  const photographyItems = galleryItems.filter(item => item.category === 'photography');

  // Design Filter Tabs
  const [activeDesignCategory, setActiveDesignCategory] = useState<string>('all');
  
  const designTabs = [
    { key: 'all', label: 'Semua Desain' },
    { key: 'Flyer & Poster', label: 'Flyer & Poster' },
    { key: 'Pitch Deck', label: 'Pitch Deck' },
    { key: 'Brand Identity', label: 'Brand Identity' },
  ];

  const photographyPortfolio = [
    { id: 1, title: "Dokumentasi Profesional 1", category: "Event", imageUrl: "https://i.ibb.co.com/JRfdJC0V/DSC00201.jpg", orientation: "landscape" },
    { id: 2, title: "Dokumentasi Profesional 2", category: "Profile", imageUrl: "https://i.ibb.co.com/n8bgR8kp/DSC00232.jpg", orientation: "portrait" },
    { id: 3, title: "Dokumentasi Profesional 3", category: "Event", imageUrl: "https://i.ibb.co.com/9mFj6NnF/DSC00062.jpg", orientation: "landscape" },
    { id: 4, title: "Dokumentasi Profesional 4", category: "Dokumentasi", imageUrl: "https://i.ibb.co.com/3HZDx6W/DSC00078.jpg", orientation: "landscape" },
    { id: 5, title: "Dokumentasi Profesional 5", category: "Event", imageUrl: "https://i.ibb.co.com/7tZhVCb1/DSC00061.jpg", orientation: "landscape" },
    { id: 6, title: "Dokumentasi Profesional 6", category: "Profile", imageUrl: "https://i.ibb.co.com/FkLPPqpR/DSC09979.jpg", orientation: "portrait" },
    { id: 7, title: "Dokumentasi Profesional 7", category: "Event", imageUrl: "https://i.ibb.co.com/S4VrYr4y/DSC09993.jpg", orientation: "landscape" },
    { id: 8, title: "Dokumentasi Profesional 8", category: "Dokumentasi", imageUrl: "https://i.ibb.co.com/zhszshtk/DSC09995.jpg", orientation: "landscape" },
    { id: 9, title: "Dokumentasi Profesional 9", category: "Event", imageUrl: "https://i.ibb.co.com/5WmJzFgT/UMC07419.jpg", orientation: "landscape" },
    { id: 10, title: "Dokumentasi Profesional 10", category: "Profile", imageUrl: "https://i.ibb.co.com/YTZbV3sM/UMC07393.jpg", orientation: "portrait" },
    { id: 11, title: "Dokumentasi Profesional 11", category: "Event", imageUrl: "https://i.ibb.co.com/TMSZDLYc/UMC07067.jpg", orientation: "landscape" },
    { id: 12, title: "Dokumentasi Profesional 12", category: "Dokumentasi", imageUrl: "https://i.ibb.co.com/xtzz349n/UMC07049.jpg", orientation: "landscape" },
    { id: 13, title: "Dokumentasi Profesional 13", category: "Event", imageUrl: "https://i.ibb.co.com/vC13L8KP/UMC07011.jpg", orientation: "landscape" },
    { id: 14, title: "Dokumentasi Profesional 14", category: "Profile", imageUrl: "https://i.ibb.co.com/VcVtRkVt/UMC07291.jpg", orientation: "portrait" },
    { id: 15, title: "Dokumentasi Profesional 15", category: "Event", imageUrl: "https://i.ibb.co.com/Mv5DnLJ/UMC07118.jpg", orientation: "landscape" },
    { id: 16, title: "Dokumentasi Profesional 16", category: "Dokumentasi", imageUrl: "https://i.ibb.co.com/9kvLsy44/DSC02739.jpg", orientation: "landscape" },
    { id: 17, title: "Dokumentasi Profesional 17", category: "Event", imageUrl: "https://i.ibb.co.com/F2WgWpL/DSC02654.jpg", orientation: "landscape" },
    { id: 18, title: "Dokumentasi Profesional 18", category: "Profile", imageUrl: "https://i.ibb.co.com/ycdGFcHt/DSC02672.jpg", orientation: "portrait" },
    { id: 19, title: "Dokumentasi Profesional 19", category: "Event", imageUrl: "https://i.ibb.co.com/XZqTLYR4/DSC02629.jpg", orientation: "landscape" },
    { id: 20, title: "Dokumentasi Profesional 20", category: "Dokumentasi", imageUrl: "https://i.ibb.co.com/YFsTK3kB/DSC00596.jpg", orientation: "landscape" },
    { id: 21, title: "Dokumentasi Profesional 21", category: "Event", imageUrl: "https://i.ibb.co.com/DD57gBLx/DSC00521.jpg", orientation: "landscape" },
    { id: 22, title: "Dokumentasi Profesional 22", category: "Profile", imageUrl: "https://i.ibb.co.com/jv969TBk/61.png", orientation: "portrait" },
    { id: 23, title: "Dokumentasi Profesional 23", category: "Event", imageUrl: "https://i.ibb.co.com/13wrzWN/DSC00470.jpg", orientation: "landscape" },
    { id: 24, title: "Dokumentasi Profesional 24", category: "Dokumentasi", imageUrl: "https://i.ibb.co.com/q394GPXx/DSC00214.jpg", orientation: "landscape" },
    { id: 25, title: "Dokumentasi Profesional 25", category: "Profile", imageUrl: "https://i.ibb.co.com/8DvBL1Xj/57.png", orientation: "portrait" },
    { id: 26, title: "Dokumentasi Profesional 26", category: "Event", imageUrl: "https://i.ibb.co.com/Z1fB3rdH/DSC00507.jpg", orientation: "landscape" }
  ];

  const designPortfolio = [
    {
      id: 1,
      title: "Poster Campaign: Wisata Edukasi Yatim",
      category: "Flyer & Poster",
      description: "Desain visual promosi untuk program sosial kemanusiaan. Difokuskan pada tipografi yang jelas dan tata letak yang menggugah simpati audiens.",
      imageUrl: "https://i.ibb.co.com/KPWLs0r/Wisata-Edukasi-Yatim.png",
      orientation: "portrait"
    },
    {
      id: 2,
      title: "Template Publikasi IZI (Juli)",
      category: "Flyer & Poster",
      description: "Desain template standar untuk publikasi bulanan Inisiatif Zakat Indonesia, menjaga konsistensi visual identitas lembaga.",
      imageUrl: "https://i.ibb.co.com/VWTC4nrP/Juli-Tamplate-IZI-3.png",
      orientation: "portrait"
    },
    {
      id: 3,
      title: "Cover Carousel Instagram: Khitanan Massal",
      category: "Flyer & Poster",
      description: "Desain sampul carousel edukatif untuk media sosial, menonjolkan visual yang ramah anak dan informatif.",
      imageUrl: "https://i.ibb.co.com/HRrvBrW/Design-Cover-Instagram-Khitanan.png",
      orientation: "portrait"
    },
    {
      id: 4,
      title: "Cover Laporan Program Pemberdayaan",
      category: "Flyer & Poster",
      description: "Desain grafis bergaya korporat untuk kover laporan implementasi program kemanusiaan.",
      imageUrl: "https://i.ibb.co.com/QvhM6dGs/Design-Cover-Instagram-Laporan-PM.png",
      orientation: "portrait"
    },
    {
      id: 5,
      title: "Program Kolaborasi: IZI x JNE",
      category: "Flyer & Poster",
      description: "Desain visual publikasi untuk kemitraan strategis antara lembaga filantropi dan korporasi logistik nasional.",
      imageUrl: "https://i.ibb.co.com/TxN5mWq5/Flyer-IZIx-JNE.png",
      orientation: "landscape"
    },
    {
      id: 6,
      title: "Visual Promosi UMKM: Dapur Ibu Khalif",
      category: "Brand Identity",
      description: "Perancangan materi promosi visual untuk mendukung pemasaran produk kuliner UMKM lokal.",
      imageUrl: "https://i.ibb.co.com/FbPn1kzm/Dapur-Ibu-Khalif-3.png",
      orientation: "landscape"
    },
    {
      id: 7,
      title: "Publikasi Serah Terima Bantuan Gerobak",
      category: "Flyer & Poster",
      description: "Dokumentasi visual berbalut desain informatif untuk transparansi penyaluran bantuan UMKM.",
      imageUrl: "https://i.ibb.co.com/wh1bZSkn/Gerobak-Usaha.png",
      orientation: "landscape"
    },
    {
      id: 8,
      title: "Visual Produk RIKASAN Es Teler",
      category: "Brand Identity",
      description: "Desain identitas promosi produk FnB dengan pendekatan visual yang segar dan menggugah selera.",
      imageUrl: "https://i.ibb.co.com/LdVjCsSM/RIKASAN-Esteler.png",
      orientation: "portrait"
    },
    {
      id: 9,
      title: "Desain Spanduk Acara Formal",
      category: "Flyer & Poster",
      description: "Tata letak spanduk informatif berskala besar untuk kebutuhan seremonial dan acara publik.",
      imageUrl: "https://i.ibb.co.com/4gf8zW73/Spanduk-Acara.png",
      orientation: "landscape"
    },
    {
      id: 10,
      title: "Poster Campaign: Open Donasi RSP",
      category: "Flyer & Poster",
      description: "Desain poster kampanye penggalangan dana Rumah Singgah Pasien dengan tone warna yang berwibawa dan persuasif.",
      imageUrl: "https://i.ibb.co.com/gbnnLZVT/OPEN-DONASI-rsp-1.png",
      orientation: "portrait"
    },
    {
      id: 11,
      title: "Spanduk Kegiatan Rihlah",
      category: "Flyer & Poster",
      description: "Desain banner kegiatan alam terbuka dan silaturahmi dengan nuansa warna yang enerjik dan dinamis.",
      imageUrl: "https://i.ibb.co.com/7tvFVYh5/Spanduk-Rihlah.jpg",
      orientation: "landscape"
    },
    {
      id: 12,
      title: "Backdrop Creative Global Summit 2026",
      category: "Flyer & Poster",
      description: "Desain panggung utama berskala raksasa untuk konferensi tingkat tinggi internasional/nasional.",
      imageUrl: "https://i.ibb.co.com/tM0v3jm4/BACKDROP-CREATIVE-GLOBAL-SUMMIT-2026.png",
      orientation: "landscape"
    },
    {
      id: 13,
      title: "Infografis Pencapaian: Talang Summit",
      category: "Pitch Deck",
      description: "Desain infografis berbasis data untuk merangkum hasil perjalanan/pencapaian dengan struktur visual hierarkis.",
      imageUrl: "https://i.ibb.co.com/0yjyvTRy/TALANG-SUMMIT-RESULT.png",
      orientation: "portrait"
    },
    {
      id: 14,
      title: "Infografis Pitch Deck: UMCreative PFMuda",
      category: "Pitch Deck",
      description: "Desain infografis korporat dan pitch deck presentasi kompetisi PFMuda untuk menonjolkan inovasi agensi.",
      imageUrl: "https://i.ibb.co.com/LdCT49hB/Infografis-UMCreative-PFMuda.png",
      orientation: "portrait"
    }
  ];

  const filteredDesignItems = activeDesignCategory === 'all' 
    ? designPortfolio 
    : designPortfolio.filter(item => item.category === activeDesignCategory);

  const portraitDesigns = filteredDesignItems.filter(d => d.orientation === 'portrait');
  const landscapeDesigns = filteredDesignItems.filter(d => d.orientation === 'landscape');

  return (
    <div id="gallery">
      {/* ------------------------------------------- */}
      {/* SECTION A: PHOTOGRAPHY PORTFOLIO          */}
      {/* ------------------------------------------- */}
      <section id="photography" className="pt-20 pb-8 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <div className="mb-24 pt-12">
            <div className="max-w-3xl mb-8">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Fotografi Portofolio</h2>
              <p className="text-slate-600 text-lg">Kumpulan karya fotografi profesional untuk berbagai kebutuhan dokumentasi, acara, dan profil.</p>
            </div>

            {/* 1. HERO CAROUSEL (HIGHLIGHT) */}
            <div className="w-full aspect-[16/9] md:h-[600px] bg-slate-900 rounded-2xl overflow-hidden relative group shadow-xl flex items-center justify-center mb-16">
              <div 
                className="absolute inset-0 bg-cover bg-center opacity-40 blur-2xl scale-110 transition-all duration-700"
                style={{ backgroundImage: `url(${photographyPortfolio[currentIndex]?.imageUrl})` }}
              ></div>
              <img 
                src={photographyPortfolio[currentIndex]?.imageUrl} 
                alt={photographyPortfolio[currentIndex]?.title}
                className="relative z-10 w-full h-full object-contain transition-opacity duration-500 drop-shadow-2xl"
              />
              {/* Navigation Arrows for Carousel */}
              <button onClick={() => setCurrentIndex(prev => prev === 0 ? photographyPortfolio.length - 1 : prev - 1)} className="absolute left-4 z-20 w-12 h-12 bg-white/10 hover:bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all shadow-lg"><svg className="w-7 h-7 pr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" /></svg></button>
              <button onClick={() => setCurrentIndex(prev => prev === photographyPortfolio.length - 1 ? 0 : prev + 1)} className="absolute right-4 z-20 w-12 h-12 bg-white/10 hover:bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all shadow-lg"><svg className="w-7 h-7 pl-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" /></svg></button>
            </div>

            {/* 2. UNIFIED FULL GRID GALLERY */}
            <div className="mb-12">
              <h4 className="text-xl font-bold text-slate-800 mb-6 border-b pb-2">Koleksi Seluruh Karya</h4>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
                {photographyPortfolio.map((item, index) => (
                  <div 
                    key={item.id} 
                    className="w-full h-[200px] sm:h-[260px] bg-slate-100 rounded-xl overflow-hidden relative group cursor-pointer shadow-sm hover:shadow-md transition-shadow" 
                    onClick={() => setSelectedPhotoIndex(index)}
                  >
                    <img 
                      src={item.imageUrl} 
                      alt={item.title} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                      loading="lazy" 
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------- */}
      {/* SECTION B: GRAPHIC DESIGN & DIGITAL ASSETS  */}
      {/* ------------------------------------------- */}
      <section id="design" className="py-16 mt-8 sm:mt-12 px-4 sm:px-6 lg:px-8 relative bg-slate-50/50 border-t border-slate-200/50">
        <div className="max-w-7xl mx-auto">
          
          {/* Header */}
          <div className="mb-10 text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-800 text-xs font-bold uppercase tracking-wider mb-3">
              <Palette className="w-3.5 h-3.5" />
              <span>Digital Assets</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
              Desain Visual & Aset Korporat
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Portofolio desain grafis komersial, materi promosi kampus, identitas merek (brand identity), serta perancangan pitch deck korporat tingkat tinggi untuk kebutuhan B2B dan presentasi eksekutif.
            </p>
          </div>

          {/* Category Pills Bar for Design only */}
          <div className="flex items-center justify-center gap-2 overflow-x-auto pb-4 mb-10 scrollbar-none">
            {designTabs.map((tab) => {
              const count = tab.key === 'all'
                ? designPortfolio.length
                : designPortfolio.filter((i) => i.category === tab.key).length;
              
              const isActive = activeDesignCategory === tab.key;
              
              return (
                <button
                  key={tab.key}
                  onClick={() => setActiveDesignCategory(tab.key)}
                  className={`px-4 py-2 rounded-2xl text-xs font-bold whitespace-nowrap flex items-center gap-2 transition-all cursor-pointer ${
                    isActive
                      ? 'bg-slate-900 text-white shadow-md'
                      : 'bg-white hover:bg-slate-100 text-slate-600 hover:text-slate-900 border border-slate-200 shadow-sm'
                  }`}
                >
                  <span>{tab.label}</span>
                  <span className={`px-1.5 py-0.5 rounded-full text-[10px] font-extrabold ${
                    isActive ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-600'
                  }`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Section A: Vertical Media */}
          {portraitDesigns.length > 0 && (
            <>
              <h4 className="text-xl font-bold text-slate-800 mb-6 mt-8 border-b pb-2">Poster, Infografis & Social Media (Vertikal)</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {portraitDesigns.map((item) => {
                  const actualIndex = designPortfolio.findIndex(d => d.id === item.id);
                  return (
                    <div key={item.id} className="flex flex-col bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden group">
                      {/* Image Container */}
                      <div className="w-full h-[380px] bg-slate-50 relative overflow-hidden flex items-center justify-center p-4">
                        <img 
                          src={item.imageUrl} 
                          alt={item.title} 
                          className="w-full h-full object-contain drop-shadow-md group-hover:scale-105 transition-transform duration-500 cursor-pointer" 
                          loading="lazy"
                          onClick={() => setSelectedIndex(actualIndex)}
                        />
                      </div>
                      {/* Text Container */}
                      <div className="p-6">
                        <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">{item.category}</span>
                        <h4 className="text-lg font-bold text-slate-900 mt-2">{item.title}</h4>
                        <p className="text-sm text-slate-600 mt-2 line-clamp-2">{item.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </>
          )}

          {/* Section B: Horizontal Media */}
          {landscapeDesigns.length > 0 && (
            <>
              <h4 className="text-xl font-bold text-slate-800 mb-6 mt-16 border-b pb-2">Spanduk, Backdrop & Banner (Horizontal)</h4>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {landscapeDesigns.map((item) => {
                  const actualIndex = designPortfolio.findIndex(d => d.id === item.id);
                  return (
                    <div key={item.id} className="flex flex-col bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden group">
                      {/* Image Container */}
                      <div className="w-full h-[280px] bg-slate-50 relative overflow-hidden flex items-center justify-center p-6">
                        <img 
                          src={item.imageUrl} 
                          alt={item.title} 
                          className="w-full h-full object-contain drop-shadow-md group-hover:scale-105 transition-transform duration-500 cursor-pointer" 
                          loading="lazy"
                          onClick={() => setSelectedIndex(actualIndex)}
                        />
                      </div>
                      {/* Text Container */}
                      <div className="p-6">
                        <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">{item.category}</span>
                        <h4 className="text-lg font-bold text-slate-900 mt-2">{item.title}</h4>
                        <p className="text-sm text-slate-600 mt-2 line-clamp-2">{item.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </>
          )}

        </div>
      </section>

      {/* Premium Glassmorphism Lightbox Modal (Design) */}
      {selectedIndex !== null && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/60 backdrop-blur-xl p-4 sm:p-8"
          onClick={() => setSelectedIndex(null)}
        >
          {/* Close Button */}
          <button 
            className="absolute top-6 right-6 w-12 h-12 bg-white/20 hover:bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center text-white transition-all z-50 shadow-lg"
            onClick={() => setSelectedIndex(null)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
          </button>

          {/* Prev Button */}
          <button 
            className="absolute left-4 sm:left-10 w-14 h-14 bg-white/20 hover:bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center text-white transition-all z-50 shadow-lg"
            onClick={(e) => {
              e.stopPropagation();
              setSelectedIndex((prev) => (prev !== null ? (prev === 0 ? designPortfolio.length - 1 : prev - 1) : 0));
            }}
          >
            <svg className="w-8 h-8 pr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" /></svg>
          </button>

          {/* Full Size Image */}
          <img 
            src={designPortfolio[selectedIndex].imageUrl} 
            alt="Full View" 
            className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl scale-100 animate-in zoom-in duration-300 relative z-40"
            onClick={(e) => e.stopPropagation()} 
          />

          {/* Next Button */}
          <button 
            className="absolute right-4 sm:right-10 w-14 h-14 bg-white/20 hover:bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center text-white transition-all z-50 shadow-lg"
            onClick={(e) => {
              e.stopPropagation();
              setSelectedIndex((prev) => (prev !== null ? (prev === designPortfolio.length - 1 ? 0 : prev + 1) : 0));
            }}
          >
            <svg className="w-8 h-8 pl-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" /></svg>
          </button>
        </div>
      )}

      {/* PHOTOGRAPHY LIGHTBOX */}
      {selectedPhotoIndex !== null && (
        <div 
          className="fixed inset-0 z-[110] flex items-center justify-center bg-slate-900/80 backdrop-blur-xl p-4 sm:p-8"
          onClick={() => setSelectedPhotoIndex(null)}
        >
          <button 
            className="absolute top-6 right-6 w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white transition-all z-50 shadow-lg"
            onClick={() => setSelectedPhotoIndex(null)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
          </button>

          <button 
            className="absolute left-4 sm:left-10 w-14 h-14 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white transition-all z-50 shadow-lg"
            onClick={(e) => {
              e.stopPropagation();
              setSelectedPhotoIndex((prev) => (prev !== null ? (prev === 0 ? photographyPortfolio.length - 1 : prev - 1) : 0));
            }}
          >
            <svg className="w-8 h-8 pr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" /></svg>
          </button>

          <img 
            src={photographyPortfolio[selectedPhotoIndex].imageUrl} 
            alt="Full View" 
            className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl scale-100 animate-in zoom-in duration-300 relative z-40"
            onClick={(e) => e.stopPropagation()} 
          />

          <button 
            className="absolute right-4 sm:right-10 w-14 h-14 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white transition-all z-50 shadow-lg"
            onClick={(e) => {
              e.stopPropagation();
              setSelectedPhotoIndex((prev) => (prev !== null ? (prev === photographyPortfolio.length - 1 ? 0 : prev + 1) : 0));
            }}
          >
            <svg className="w-8 h-8 pl-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" /></svg>
          </button>
        </div>
      )}
    </div>
  );
};
