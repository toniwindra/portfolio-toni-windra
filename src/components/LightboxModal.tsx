import React, { useEffect, useState } from 'react';
import { X, ChevronLeft, ChevronRight, CheckCircle2, Sliders, Camera, Calendar, User, Tag, Download, Info, ZoomIn, ZoomOut } from 'lucide-react';
import { GalleryItem } from '../types';

interface LightboxModalProps {
  items: GalleryItem[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  items,
  currentIndex,
  isOpen,
  onClose,
  onNavigate,
}) => {
  const [zoomLevel, setZoomLevel] = useState<number>(1);
  const [showMetadata, setShowMetadata] = useState<boolean>(true);

  const currentItem = items[currentIndex];

  useEffect(() => {
    setZoomLevel(1);
  }, [currentIndex]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, currentIndex, items.length]);

  if (!isOpen || !currentItem) return null;

  const handlePrev = () => {
    const nextIndex = currentIndex === 0 ? items.length - 1 : currentIndex - 1;
    onNavigate(nextIndex);
  };

  const handleNext = () => {
    const nextIndex = currentIndex === items.length - 1 ? 0 : currentIndex + 1;
    onNavigate(nextIndex);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 backdrop-blur-2xl p-2 sm:p-4 md:p-6 select-none animate-in fade-in duration-200">
      
      {/* Top Floating Control Bar */}
      <div className="absolute top-4 inset-x-4 max-w-7xl mx-auto flex items-center justify-between z-20 pointer-events-auto">
        <div className="flex items-center gap-3 px-4 py-2 rounded-2xl bg-white/90 backdrop-blur-xl border border-white text-slate-900 shadow-xl">
          <span className="text-xs font-black uppercase tracking-wider text-sky-700">
            {currentItem.categoryLabel}
          </span>
          <span className="text-slate-300">|</span>
          <span className="text-xs font-semibold text-slate-600">
            {currentIndex + 1} dari {items.length}
          </span>
        </div>

        <div className="flex items-center gap-2">
          {/* Zoom Controls */}
          <button
            onClick={() => setZoomLevel((z) => (z < 2 ? z + 0.25 : 1))}
            className="p-2.5 rounded-2xl bg-white/90 hover:bg-white text-slate-700 hover:text-slate-900 border border-white shadow-xl transition-all cursor-pointer"
            title="Zoom Foto"
          >
            {zoomLevel > 1 ? <ZoomOut className="w-4 h-4" /> : <ZoomIn className="w-4 h-4" />}
          </button>

          {/* Toggle Metadata Drawer */}
          <button
            onClick={() => setShowMetadata(!showMetadata)}
            className={`p-2.5 rounded-2xl border border-white shadow-xl transition-all cursor-pointer ${
              showMetadata ? 'bg-sky-600 text-white' : 'bg-white/90 text-slate-700'
            }`}
            title="Info Teknis & Metadata"
          >
            <Info className="w-4 h-4" />
          </button>

          {/* Close Button */}
          <button
            onClick={onClose}
            className="p-2.5 rounded-2xl bg-white/90 hover:bg-rose-50 text-slate-700 hover:text-rose-600 border border-white shadow-xl transition-all cursor-pointer"
            title="Tutup (Esc)"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Main Viewport Grid */}
      <div className="w-full h-full max-w-7xl mx-auto flex items-center justify-center relative pt-14 pb-4">
        
        {/* Navigation Arrow Left */}
        <button
          onClick={handlePrev}
          aria-label="Previous"
          className="absolute left-2 sm:left-4 z-20 p-3 sm:p-4 rounded-2xl bg-white/80 hover:bg-white text-slate-900 border border-white shadow-2xl transition-all active:scale-95 cursor-pointer"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        {/* Center Image Container */}
        <div className="relative w-full h-full flex items-center justify-center overflow-hidden p-2">
          <div
            className="relative max-h-[82vh] max-w-full rounded-2xl overflow-hidden shadow-2xl transition-transform duration-300 flex items-center justify-center bg-black/40"
            style={{ transform: `scale(${zoomLevel})` }}
          >
            <img
              src={currentItem.highResImage || currentItem.image}
              alt={currentItem.title}
              referrerPolicy="no-referrer"
              className="max-h-[80vh] w-auto max-w-full object-contain rounded-xl"
            />
          </div>
        </div>

        {/* Navigation Arrow Right */}
        <button
          onClick={handleNext}
          aria-label="Next"
          className="absolute right-2 sm:right-4 z-20 p-3 sm:p-4 rounded-2xl bg-white/80 hover:bg-white text-slate-900 border border-white shadow-2xl transition-all active:scale-95 cursor-pointer"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Floating / Bottom Light Glass Metadata Drawer */}
        {showMetadata && (
          <div className="absolute bottom-4 inset-x-4 max-w-3xl mx-auto p-4 sm:p-5 rounded-3xl bg-white/95 backdrop-blur-2xl border border-white shadow-2xl z-20 animate-in slide-in-from-bottom-4 duration-300">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <h3 className="font-extrabold text-slate-900 text-base sm:text-lg tracking-tight">
                    {currentItem.title}
                  </h3>
                  <span className="text-xs text-slate-400">({currentItem.year})</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed max-w-xl">
                  {currentItem.caption || currentItem.description}
                </p>

                {/* Natural Preservation Ethos Badge */}
                {currentItem.facialPreservationNote && (
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-800 text-[11px] font-bold mt-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    <span>{currentItem.facialPreservationNote}</span>
                  </div>
                )}
              </div>

              {/* Technical Specifications Specs */}
              {currentItem.technicalSpecs && (
                <div className="flex-shrink-0 p-3 rounded-2xl bg-slate-50 border border-slate-200 text-left min-w-[200px]">
                  <div className="text-[10px] font-black uppercase tracking-wider text-slate-400 mb-1 flex items-center gap-1">
                    <Camera className="w-3 h-3 text-sky-600" />
                    <span>Tech Specs</span>
                  </div>
                  {currentItem.technicalSpecs.camera && (
                    <div className="text-xs font-bold text-slate-800">
                      {currentItem.technicalSpecs.camera}
                    </div>
                  )}
                  {currentItem.technicalSpecs.lens && (
                    <div className="text-[11px] text-slate-600">
                      {currentItem.technicalSpecs.lens}
                    </div>
                  )}
                  {currentItem.technicalSpecs.settings && (
                    <div className="text-[11px] text-slate-500 font-mono">
                      {currentItem.technicalSpecs.settings}
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
