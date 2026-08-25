import React from 'react';
import { Mail, Instagram, Linkedin, Youtube, ArrowUp } from 'lucide-react';
import { usePortfolio } from '../context/PortfolioContext';

export const Footer: React.FC = () => {
  const { personalInfo } = usePortfolio();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="mt-16 border-t border-slate-200/80 bg-white/70 backdrop-blur-xl text-slate-500 py-12 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-200/80">
          
          {/* Brand & Identity */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-slate-900 flex items-center justify-center font-extrabold text-white text-sm shadow-sm">
              TW
            </div>
            <div>
              <div className="font-extrabold text-slate-900 text-sm tracking-tight">
                {personalInfo.name}
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-2.5">
            <a
              href={`mailto:${personalInfo.email}`}
              aria-label="Email"
              className="p-2.5 rounded-xl bg-white hover:bg-slate-100 border border-slate-200 text-slate-600 hover:text-sky-600 transition-colors shadow-sm"
            >
              <Mail className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.socials.instagram}
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="p-2.5 rounded-xl bg-white hover:bg-slate-100 border border-slate-200 text-slate-600 hover:text-pink-600 transition-colors shadow-sm"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="p-2.5 rounded-xl bg-white hover:bg-slate-100 border border-slate-200 text-slate-600 hover:text-blue-600 transition-colors shadow-sm"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.socials.youtube}
              target="_blank"
              rel="noreferrer"
              aria-label="YouTube"
              className="p-2.5 rounded-xl bg-white hover:bg-slate-100 border border-slate-200 text-slate-600 hover:text-red-600 transition-colors shadow-sm"
            >
              <Youtube className="w-4 h-4" />
            </a>
          </div>

          {/* Scroll to Top */}
          <div className="flex items-center gap-3">
            <button
              onClick={scrollToTop}
              id="footer-btn-scroll-top"
              className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white hover:bg-slate-100 border border-slate-200 text-xs font-bold text-slate-700 transition-all active:scale-95 shadow-sm"
            >
              <span>Ke Atas</span>
              <ArrowUp className="w-3.5 h-3.5 text-sky-600" />
            </button>
          </div>
        </div>

        {/* Bottom Footer Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-slate-200 mt-16 pb-8">
          <p className="text-sm text-slate-500 mb-4 md:mb-0">
            &copy; 2026 Toni Windra | CV. THR Production. All rights reserved.
          </p>
          
          <div className="flex items-center space-x-4 sm:space-x-6 text-sm text-slate-500 font-medium tracking-wide">
            <span>Padang, Indonesia</span>
            <span className="w-1 h-1 bg-slate-300 rounded-full hidden sm:block"></span>
            <span className="hidden sm:block">Multimedia Specialist</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
