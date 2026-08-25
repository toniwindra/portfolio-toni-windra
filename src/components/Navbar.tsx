import React, { useState, useEffect } from 'react';
import { FileText, Mail, Video, Image as ImageIcon, Mic, Menu, X, ExternalLink, Sparkles } from 'lucide-react';
import { usePortfolio } from '../context/PortfolioContext';

interface NavbarProps {
  onOpenCV: () => void;
  onOpenContact: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenCV, onOpenContact }) => {
  const { personalInfo } = usePortfolio();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'py-3 bg-white/80 backdrop-blur-xl border-b border-slate-200/80 shadow-[0_4px_20px_rgb(0,0,0,0.03)]'
            : 'py-5 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand & Monogram */}
          <button
            onClick={() => scrollTo('hero')}
            id="nav-brand-logo"
            className="flex items-center gap-3 text-left group cursor-pointer"
          >
            <img 
              src="https://i.ibb.co.com/1GjzV2tz/Whats-App-Image-2025-09-06-at-10-40-23-4b098294.jpg" 
              alt="Toni Windra" 
              className="w-10 h-10 rounded-full object-cover shadow-sm border-2 border-white ring-1 ring-slate-200" 
            />
            <div>
              <div className="font-extrabold text-slate-900 text-sm tracking-tight flex items-center gap-1.5">
                {personalInfo.name}
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              </div>
              <div className="text-[11px] text-slate-500 font-medium">
                Multimedia Specialist & MC
              </div>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 bg-white/70 backdrop-blur-md p-1.5 rounded-full border border-slate-200/90 shadow-[0_2px_12px_rgb(0,0,0,0.03)]">
            <button
              onClick={() => scrollTo('hero')}
              id="nav-link-about"
              className="px-3.5 py-1.5 rounded-full text-xs font-semibold text-slate-700 hover:text-slate-900 hover:bg-slate-100 transition-all"
            >
              Tentang
            </button>
            <button
              onClick={() => scrollTo('videos')}
              id="nav-link-videos"
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold text-slate-700 hover:text-slate-900 hover:bg-slate-100 transition-all"
            >
              <Video className="w-3.5 h-3.5 text-sky-600" />
              Video & Broadcast
            </button>
            <button
              onClick={() => scrollTo('gallery')}
              id="nav-link-gallery"
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold text-slate-700 hover:text-slate-900 hover:bg-slate-100 transition-all"
            >
              <ImageIcon className="w-3.5 h-3.5 text-indigo-600" />
              Galeri & Desain
            </button>
            <button
              onClick={() => scrollTo('speaking')}
              id="nav-link-speaking"
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold text-slate-700 hover:text-slate-900 hover:bg-slate-100 transition-all"
            >
              <Mic className="w-3.5 h-3.5 text-amber-600" />
              MC & Moderasi
            </button>
            <button
              onClick={() => scrollTo('contact')}
              id="nav-link-contact"
              className="px-3.5 py-1.5 rounded-full text-xs font-semibold text-slate-700 hover:text-slate-900 hover:bg-slate-100 transition-all"
            >
              Kontak
            </button>
          </nav>

          {/* Action CTAs & Admin Gateway */}
          <div className="hidden md:flex items-center gap-2.5">
            {/* Download CV CTA */}
            <button
              onClick={onOpenCV}
              id="nav-btn-cv"
              className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold text-slate-700 bg-white/80 hover:bg-white border border-slate-200/90 hover:border-slate-300 shadow-[0_2px_8px_rgb(0,0,0,0.03)] hover:shadow-[0_4px_12px_rgb(0,0,0,0.06)] active:scale-95 transition-all"
            >
              <FileText className="w-3.5 h-3.5 text-sky-600" />
              <span>Unduh CV</span>
            </button>

            {/* Quick Contact CTA */}
            <button
              onClick={onOpenContact}
              id="nav-btn-contact"
              className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold text-white bg-slate-900 hover:bg-slate-800 shadow-[0_4px_14px_rgba(15,23,42,0.15)] active:scale-95 transition-all"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Hubungi</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              id="nav-btn-mobile-toggle"
              aria-label="Toggle Menu"
              className="p-2 rounded-xl bg-white/80 border border-slate-200 text-slate-700 shadow-sm"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-2 mx-4 p-4 rounded-2xl bg-white/95 backdrop-blur-2xl border border-slate-200/90 shadow-2xl flex flex-col gap-2">
            <button
              onClick={() => scrollTo('hero')}
              className="text-left px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-100 rounded-xl"
            >
              Tentang
            </button>
            <button
              onClick={() => scrollTo('videos')}
              className="text-left px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-100 rounded-xl flex items-center gap-2"
            >
              <Video className="w-4 h-4 text-sky-600" />
              Video & Broadcast
            </button>
            <button
              onClick={() => scrollTo('gallery')}
              className="text-left px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-100 rounded-xl flex items-center gap-2"
            >
              <ImageIcon className="w-4 h-4 text-indigo-600" />
              Galeri & Desain
            </button>
            <button
              onClick={() => scrollTo('speaking')}
              className="text-left px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-100 rounded-xl flex items-center gap-2"
            >
              <Mic className="w-4 h-4 text-amber-600" />
              MC & Moderasi
            </button>
            <button
              onClick={() => scrollTo('contact')}
              className="text-left px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-100 rounded-xl"
            >
              Kontak
            </button>

            <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenCV();
                }}
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold text-slate-700 bg-slate-100"
              >
                <FileText className="w-4 h-4 text-sky-600" />
                <span>Unduh CV</span>
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
