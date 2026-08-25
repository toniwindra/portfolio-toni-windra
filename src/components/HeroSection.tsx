import React from 'react';
import { FileText, Mail, ArrowDown, ShieldCheck, Sparkles, Award, Camera, Radio, CheckCircle2, ChevronRight } from 'lucide-react';
import { usePortfolio } from '../context/PortfolioContext';

interface HeroSectionProps {
  onOpenCV: () => void;
  onOpenContact: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenCV, onOpenContact }) => {
  const { personalInfo } = usePortfolio();

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative pt-28 pb-20 md:pt-36 md:pb-28 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Light subtle airy gradients & ambient light glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] pointer-events-none -z-10 overflow-hidden">
        <div className="absolute top-10 left-1/4 w-[450px] h-[450px] bg-sky-100/70 rounded-full blur-[100px]" />
        <div className="absolute top-20 right-1/4 w-[450px] h-[450px] bg-indigo-100/60 rounded-full blur-[110px]" />
        <div className="absolute top-40 right-10 w-[300px] h-[300px] bg-emerald-100/50 rounded-full blur-[90px]" />
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Bold, Crisp Typography & Headline */}
          <div className="lg:col-span-7 flex flex-col items-start text-left z-10">
            
            {/* Bold Crisp Name Heading */}
            <h1 className="text-4xl font-extrabold text-slate-900 mb-2">
              TONI WINDRA, S.T., C.VES.
            </h1>

            {/* Professional Headline */}
            <h2 className="text-base font-medium text-slate-500 leading-relaxed mb-6">
              Profesional Multimedia Event | THR Production | Content Creator | Certified Video Editor (BNSP)
            </h2>

            {/* Concise Bio ("Singkat, Padat & Jelas") */}
            <p className="text-base text-slate-600 leading-loose max-w-2xl mb-8 text-justify">
              Sarjana Teknik Komputer bersertifikat BNSP di bidang Video Editing dengan rekam jejak kuat di sektor Sociopreneurship, Pembinaan Karakter Andalasian, Aktivis Dakwah, Bintang Aktivis Kampus, dan Filantropi. Berpengalaman mengelola bisnis multimedia melalui CV THR Production dan UMCreative. Memiliki dedikasi tinggi dalam manajemen tim, operasional program pembinaan mahasiswa, serta turun langsung sebagai relawan bersama berbagai lembaga amil zakat nasional. Berkomitmen mengintegrasikan keahlian teknis dan manajemen untuk mencetak SDM yang mandiri, berkarakter, dan berdampak sosial.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 mt-8 mb-10 w-full sm:w-auto">
              <button
                onClick={onOpenCV}
                id="hero-btn-download-cv"
                className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm shadow-[0_10px_25px_-5px_rgba(15,23,42,0.25)] hover:shadow-[0_15px_30px_-5px_rgba(15,23,42,0.3)] active:scale-95 transition-all cursor-pointer"
              >
                <FileText className="w-4 h-4 text-sky-400" />
                <span>Unduh Curriculum Vitae</span>
              </button>

              <button
                onClick={onOpenContact}
                id="hero-btn-book"
                className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-white/80 hover:bg-white text-slate-800 font-bold text-sm border border-slate-200 shadow-[0_4px_16px_rgba(0,0,0,0.04)] hover:shadow-[0_6px_20px_rgba(0,0,0,0.08)] active:scale-95 transition-all cursor-pointer"
              >
                <Mail className="w-4 h-4 text-sky-600" />
                <span>Booking MC & Produksi</span>
              </button>

              <button
                onClick={() => scrollToSection('gallery')}
                id="hero-btn-view-work"
                className="w-full sm:w-auto flex items-center justify-center gap-1.5 px-4 py-3.5 rounded-2xl text-xs font-bold text-slate-600 hover:text-slate-900 transition-colors"
              >
                <span>Eksplor Karya</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Key Metric Highlight Cards (Light Glass Cards) */}
          </div>

          {/* Right Column: Large High-Quality Cutout Portrait Seamlessly Blending */}
          <div className="lg:col-span-5 flex justify-center items-center relative">
            
            {/* Ambient Background Aura Frame */}
            <div className="relative w-full max-w-[420px] aspect-[4/5] rounded-3xl p-3 bg-gradient-to-b from-white/90 via-white/60 to-white/40 backdrop-blur-2xl border border-white shadow-[0_20px_50px_rgba(15,23,42,0.08)] ring-1 ring-slate-900/5">
              
              {/* Internal Image Container */}
              <div className="relative w-full h-full rounded-2xl overflow-hidden bg-gradient-to-tr from-slate-100 via-sky-50 to-indigo-50 flex items-center justify-center">
                <img
                  src="https://i.ibb.co.com/jkpnvN7P/Pas-Foto-4x6-removebg-preview.png"
                  alt="Toni Windra Portrait"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-top filter brightness-[1.02] contrast-[1.02] transition-transform duration-700 hover:scale-105"
                />

                {/* Bottom Soft Fade Shadow to blend smoothly */}
                <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent pointer-events-none" />


              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
