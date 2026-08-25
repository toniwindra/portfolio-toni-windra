import React, { useState } from 'react';
import { Play, Video, ExternalLink, HardDrive, Youtube, Instagram, Film, Info, Radio, Sparkles } from 'lucide-react';
import { usePortfolio } from '../context/PortfolioContext';
import { VideoShowcaseItem, EmbedType } from '../types';

export const VideoSection: React.FC = () => {
  const { videoShowcase } = usePortfolio();
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedVideo, setSelectedVideo] = useState<VideoShowcaseItem | null>(() => videoShowcase[0] || null);

  const categories = ['All', 'Dokumenter', 'Broadcasting', 'Event', 'Profile', 'Short Video'];

  const filteredVideos = activeCategory === 'All'
    ? videoShowcase
    : videoShowcase.filter((v) => v.category === activeCategory);

  const renderEmbedPlayer = (video: VideoShowcaseItem) => {
    if (video.type === 'youtube') {
      return (
        <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-slate-950 shadow-inner">
          <iframe
            src={video.embedUrl.includes('?') ? `${video.embedUrl}&autoplay=1` : `${video.embedUrl}?autoplay=0&rel=0`}
            title={video.title}
            className="absolute inset-0 w-full h-full border-0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
      );
    }

    if (video.type === 'gdrive') {
      return (
        <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-slate-950 shadow-inner">
          <iframe
            src={video.embedUrl}
            title={video.title}
            className="absolute inset-0 w-full h-full border-0"
            allow="autoplay"
            allowFullScreen
          />
          <div className="absolute top-3 left-3 pointer-events-none px-3 py-1 rounded-lg bg-black/60 backdrop-blur-md text-[11px] font-bold text-white flex items-center gap-1.5">
            <HardDrive className="w-3.5 h-3.5 text-sky-400" />
            <span>Google Drive Workspace Archive</span>
          </div>
        </div>
      );
    }

    if (video.type === 'instagram') {
      return (
        <div className="relative w-full max-w-sm mx-auto aspect-[9/16] rounded-2xl overflow-hidden bg-slate-950 shadow-inner flex items-center justify-center p-2">
          <iframe
            src={`${video.directUrl}embed`}
            title={video.title}
            className="w-full h-full border-0 rounded-xl"
            allowFullScreen
            scrolling="no"
          />
        </div>
      );
    }

    return null;
  };

  return (
    <section id="videos" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sky-50 border border-sky-200 text-sky-800 text-xs font-bold uppercase tracking-wider mb-3">
              <Film className="w-3.5 h-3.5" />
              <span>Broadcasting & Media Portfolio</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Embedded Video Productions
            </h2>
            <p className="text-sm sm:text-base text-slate-600 max-w-xl mt-1">
              Multi-kamera live broadcast, rekaman konvensi formal, dan arsip master resolusi tinggi YouTube & Google Drive.
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                  activeCategory === cat
                    ? 'bg-slate-900 text-white shadow-sm'
                    : 'bg-white/80 hover:bg-white text-slate-600 hover:text-slate-900 border border-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Video Player Viewport */}
        <div className="mb-14 p-4 sm:p-6 rounded-3xl bg-white/70 backdrop-blur-xl border border-white/90 shadow-[0_12px_40px_rgba(15,23,42,0.06)] ring-1 ring-slate-900/5">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left/Top Column: 16:9 Video Container */}
            <div className="lg:col-span-8 w-full rounded-2xl overflow-hidden shadow-md bg-slate-950">
              <div className="relative w-full aspect-video">
                <iframe
                  src="https://www.youtube.com/embed/QMyDQnvJzng"
                  title="Company Profile UMCreative"
                  className="absolute inset-0 w-full h-full object-cover border-none"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            </div>

            {/* Right/Bottom Column: Video Metadata & Role Details */}
            <div className="lg:col-span-4 flex flex-col justify-center space-y-4">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2.5 py-1 rounded-md text-[10px] font-extrabold uppercase tracking-wide bg-red-50 text-red-700 border border-red-200">
                    COMPANY PROFILE
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight leading-snug mb-3">
                  Company Profile UMCreative
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed mb-4 text-justify">
                  Video profil resmi yang merangkum ekosistem layanan, visi-misi, dan standar kualitas visual dari UMCreative. Diproduksi untuk memperkuat branding agensi dalam menjalin kemitraan strategis.
                </p>

                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 mb-4 inline-block w-full">
                  <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                    Peran & Keterlibatan
                  </div>
                  <div className="text-xs font-extrabold text-slate-800 flex items-center gap-1.5">
                    <Radio className="w-3.5 h-3.5 text-sky-600" />
                    Founder & CEO | Direktur Utama CV THR Production
                  </div>
                </div>
              </div>

              <a
                href="https://youtu.be/QMyDQnvJzng"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold shadow-sm transition-all"
              >
                <span>Tonton di YouTube UMCreative</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>
        </div>

        {/* Video Thumbnails Showcase Grid */}
        <div className="mt-16">
          {(() => {
            const videoPortfolio = [
              {
                id: 1,
                title: "KAMPUS HIJAU",
                category: "DOKUMENTER",
                description: "Welcome to Andalas University, where sustainability and green campus living aren't just dreams but a reality.",
                embedUrl: "https://www.youtube.com/embed/5oOTbxMzbRI",
                platform: "YouTube"
              },
              {
                id: 2,
                title: "Kisah Haru UMKM Padang Bangkit: Pemberdayaan Zakat IZI Sumbar",
                category: "DOKUMENTER",
                description: "Pernahkah kita menyadari, di balik lapak-lapak kecil di sudut kota Padang, ada para ibu yang menahan lelah agar esok anak-anaknya tetap bisa makan?",
                embedUrl: "https://www.youtube.com/embed/0gZtYW1chCc",
                platform: "YouTube"
              },
              {
                id: 3,
                title: "Sosialisasi Beasiswa LPDP Universitas Andalas",
                category: "DOKUMENTER",
                description: "Universitas Andalas menggelar sosialisasi beasiswa LPDP di Gedung PKM. Acara ini memberikan informasi strategis mengenai kesempatan studi lanjut melalui pendanaan Kementerian Keuangan.",
                embedUrl: "https://www.youtube.com/embed/4Tq3s8Y3ZRA",
                platform: "YouTube"
              },
              {
                id: 4,
                title: "Tari Piring Minangkabau | Menari di atas pecahan kaca | Acara BKSTM 2025",
                category: "BROADCASTING",
                description: "Rapat Kerja Nasional Badan Keahlian Mesin Persatuan Insinyur Indonesia (BKSTM-PII) 2025.",
                embedUrl: "https://www.youtube.com/embed/jf5Ee2McbcI",
                platform: "YouTube"
              },
              {
                id: 5,
                title: "Demo Divisi TD | Kontes Robot Terbang Indonesia (KRTI) Tahun 2025",
                category: "EVENT",
                description: "Kontes Robot Terbang Indonesia KRTI Nasional 2025",
                embedUrl: "https://www.youtube.com/embed/uNp8-LZwLgI",
                platform: "YouTube"
              },
              {
                id: 6,
                title: "BEASISWA FAIR 2026",
                category: "BROADCASTING",
                description: "Beasiswa Fair 2026 yang diadakan oleh Direktorat Kemahasiswaan dan BEM KM Universitas Andalas.",
                embedUrl: "https://www.youtube.com/embed/MeRyiwESlgI",
                platform: "YouTube"
              },
              {
                id: 7,
                title: "Lecron XVII 2026: Enhancing Dental Excellence In The Digital Age",
                category: "BROADCASTING",
                description: "Seminar Internasional Fakultas Kedokteran Gigi Universitas Andalas 2026.",
                embedUrl: "https://www.youtube.com/embed/UVfJOv_1gdM",
                platform: "YouTube"
              },
              {
                id: 8,
                title: "Rakernas Badan Keahlian Mesin Persatuan Insinyur Indonesia (BKM-PII)",
                category: "BROADCASTING",
                description: "Rapat Kerja Nasional Badan Keahlian Mesin Persatuan Insinyur Indonesia (BKSTM-PII) 2025.",
                embedUrl: "https://www.youtube.com/embed/XifyqGQFIFk",
                platform: "YouTube"
              },
              {
                id: 9,
                title: "PPDD UKTPT Bidang Pengajaran / Amatul Firdausa Nasa, M.Psi.",
                category: "PROFILE",
                description: "PPDD UKTPT Bidang Pengajaran / Amatul Firdausa Nasa, M.Psi., Psikolog Serdos 2025.",
                embedUrl: "https://www.youtube.com/embed/rKgVCcalwHg",
                platform: "YouTube"
              },
              {
                id: 10,
                title: "SHORT FILM ( IKLAN ) | Ruang Waktu - LAYANAN DAKWAH ISLAM ( ASSALAM )",
                category: "SHORT VIDEO",
                description: "Yaa.. kata yang tepat. Beda zaman. Beda generasi. Dan beda pola kehidupan. Tapi, apa yang kita sampaikan sama Yaitu ISLAM.",
                embedUrl: "https://www.youtube.com/embed/8aNJq_WTeRU",
                platform: "YouTube"
              },
              {
                id: 11,
                title: "Short Film | Dari Mimpi ( Komedi ) - FESTIVAL FILM",
                category: "SHORT VIDEO",
                description: "Dikisahkan seorang pemuda yang merantau dan akhirnya pulang ke kampung halamannya. Pemuda itu bermimpi tentang keadaan masyarakat kampungnya yang tidak tau dengan protokol kesehatan. Dari mimpi itu ia berhasil merubah kebiasaan masyarakat.",
                embedUrl: "https://www.youtube.com/embed/DtZf_wG0xJc",
                platform: "YouTube"
              },
              {
                id: 12,
                title: "Short Film - BULLY | JUARA 1 FLS2N 2019",
                category: "SHORT VIDEO",
                description: "Short Film - BULLY | Juara 1 FLS2N Tingkat Kabupaten 2019 dan Juara 1 Lomba Video Kreatif yang dibawakan oleh X.MIA5 di SMAN 1 SOLOK SELATAN.",
                embedUrl: "https://www.youtube.com/embed/OZ5qErF5TAw",
                platform: "YouTube"
              }
            ];

            const displayVideos = activeCategory === 'All' 
              ? videoPortfolio 
              : videoPortfolio.filter(v => v.category.toUpperCase() === activeCategory.toUpperCase());

            return (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
                {displayVideos.map((video) => (
                  <div key={video.id} className="flex flex-col h-full bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-md transition-shadow">
                    <div className="w-full aspect-video bg-slate-900 relative">
                      <iframe src={video.embedUrl} className="w-full h-full absolute top-0 left-0 border-none" allowFullScreen allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                      <span className="text-xs font-bold text-blue-600 uppercase tracking-wide">
                        {video.category}
                      </span>
                      <h4 className="text-lg font-bold text-slate-900 line-clamp-2 mt-2">
                        {video.title}
                      </h4>
                      <p className="text-sm text-slate-600 line-clamp-3 mt-2">
                        {video.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            );
          })()}
        </div>
      </div>
    </section>
  );
};
