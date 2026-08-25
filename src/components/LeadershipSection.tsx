import React from 'react';
import { ExternalLink, Radio } from 'lucide-react';

export const LeadershipSection: React.FC = () => {
  return (
    <section id="leadership" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            Rekam Jejak Kepemimpinan
          </h2>
          <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto">
            Perjalanan dan rekam jejak kepemimpinan dalam membangun ekosistem media kreatif dan memimpin entitas bisnis profesional.
          </p>
        </div>

        {/* Featured Video Player Viewport */}
        <div className="p-4 sm:p-6 rounded-3xl bg-white/70 backdrop-blur-xl border border-white/90 shadow-[0_12px_40px_rgba(15,23,42,0.06)] ring-1 ring-slate-900/5">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center max-w-5xl mx-auto mt-8 mb-8">
            
            {/* Left Column: Vertical Video Container */}
            <div className="lg:col-span-5 w-full max-w-[320px] mx-auto overflow-hidden rounded-2xl shadow-xl bg-white">
              <iframe
                src="https://www.instagram.com/reel/DB-brtWBPsH/embed"
                className="w-full h-[560px] object-cover border-none"
                scrolling="no"
                allow="encrypted-media"
              ></iframe>
            </div>

            {/* Right Column: Video Metadata & Role Details */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              <div className="flex items-center gap-2 mb-2">
                <span className="px-2.5 py-1 rounded-md text-[10px] font-extrabold uppercase tracking-wide bg-pink-50 text-pink-700 border border-pink-200">
                  INSTAGRAM REEL
                </span>
                <span className="text-xs text-slate-400 font-semibold">
                  Profil Kepemimpinan
                </span>
              </div>

              <h3 className="text-3xl lg:text-4xl font-extrabold text-slate-900 mb-4">
                Jejak Kepemimpinan: UMCreative hingga CV THR Production
              </h3>

              <p className="text-lg text-slate-600 leading-relaxed mb-8 text-justify">
                Video kampanye ini menyoroti rekam jejak kepemimpinan selama menjadi mahasiswa dan memimpin UMCreative di lingkungan kampus. Pengalaman manajerial dalam membangun ekosistem media kreatif mahasiswa inilah yang menjadi landasan kuat dan cikal bakal berdirinya entitas bisnis profesional, CV THR Production.
              </p>

              <div className="bg-slate-50 border border-slate-100 p-6 rounded-xl w-full mb-6">
                <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">
                  Peran & Keterlibatan
                </div>
                <div className="text-base font-semibold text-slate-800 flex items-center gap-2">
                  <Radio className="w-4 h-4 text-pink-600" />
                  Founder & CEO UMCreative | Direktur Utama CV THR Production
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-3 mb-8">
                {['Leadership', 'CreativeAgency', 'Sociopreneurship', 'CEO'].map((tag, i) => (
                  <span
                    key={i}
                    className="px-4 py-1.5 rounded-lg bg-white border border-slate-200 text-slate-600 text-[11px] font-medium"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              <a
                href="https://www.instagram.com/reel/DB-brtWBPsH/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full sm:w-max px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold shadow-sm transition-all"
              >
                <span>Lihat di Instagram</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
