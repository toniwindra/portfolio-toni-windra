import React from 'react';
import { Mic, Award, Calendar, MapPin, Users, CheckCircle2, ChevronRight, Sparkles } from 'lucide-react';
import { usePortfolio } from '../context/PortfolioContext';

interface SpeakingSectionProps {
  onOpenContact: () => void;
}

export const SpeakingSection: React.FC<SpeakingSectionProps> = ({ onOpenContact }) => {
  const { speakingEngagements } = usePortfolio();

  if (!speakingEngagements || speakingEngagements.length === 0) {
    return null;
  }

  return (
    <section id="speaking" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-900 text-xs font-bold uppercase tracking-wider mb-3">
              <Mic className="w-3.5 h-3.5 text-amber-600" />
              <span>Public Communication Track Record</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Master of Ceremonies & Moderator
            </h2>
            <p className="text-sm sm:text-base text-slate-600 max-w-2xl mt-1">
              Jam terbang tinggi dalam memandu 250+ sidang senat terbuka, dies natalis, konferensi internasional, dan gala korporat dengan penguasaan tata protokoler formal.
            </p>
          </div>

          <button
            onClick={onOpenContact}
            className="self-start md:self-auto flex items-center gap-2 px-5 py-3 rounded-2xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold shadow-md hover:shadow-lg transition-all"
          >
            <Mic className="w-4 h-4 text-amber-400" />
            <span>Booking Jadwal MC / Moderator</span>
          </button>
        </div>

        {/* Engagements Showcase Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {speakingEngagements.map((item) => (
            <div
              key={item.id}
              className="p-6 rounded-3xl bg-white/80 hover:bg-white border border-slate-200/90 hover:border-slate-300 shadow-[0_8px_30px_rgba(0,0,0,0.03)] hover:shadow-[0_16px_36px_rgba(15,23,42,0.08)] transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Event Type & Role Badges */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="px-3 py-1 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-[11px] font-extrabold">
                    {item.role}
                  </span>
                  <span className="text-xs text-slate-400 font-semibold">
                    {item.date}
                  </span>
                </div>

                <h3 className="text-lg font-extrabold text-slate-900 tracking-tight leading-snug mb-2">
                  {item.title}
                </h3>

                {/* Organizer & Location */}
                <div className="space-y-1 mb-4 text-xs text-slate-500 font-medium">
                  <div className="flex items-center gap-1.5 text-slate-700 font-bold">
                    <Award className="w-3.5 h-3.5 text-amber-600" />
                    <span>{item.organizer}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-slate-400" />
                    <span>{item.location} • {item.attendees} Peserta</span>
                  </div>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  {item.description}
                </p>
              </div>

              {/* Key Moments */}
              <div className="pt-3 border-t border-slate-100">
                <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">
                  Protokol & Keahlian Khusus
                </div>
                <div className="space-y-1">
                  {item.keyMoments.map((moment, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0 mt-0.5" />
                      <span>{moment}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
