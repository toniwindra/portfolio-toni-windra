import { VideoShowcaseItem, GalleryItem, SpeakingEngagement, WorkExperience, SkillCategory } from '../types';

export const PERSONAL_INFO = {
  name: 'TONI WINDRA, S.T., C.VES.',
  headline: 'Profesional Multimedia Event | THR Production | Content Creator | Certified Video Editor (BNSP)',
  leadTitle: '',
  email: 'toniwindra.umc@gmail.com',
  location: 'Indonesia',
  status: 'Available',
  bio: 'Sarjana Teknik Komputer bersertifikat BNSP di bidang Video Editing dengan rekam jejak kuat di sektor Sociopreneurship, Pembinaan Karakter Andalasian, Aktivis Dakwah, Bintang Aktivis Kampus, dan Filantropi. Berpengalaman mengelola bisnis multimedia melalui CV THR Production dan UMCreative. Memiliki dedikasi tinggi dalam manajemen tim, operasional program pembinaan mahasiswa, serta turun langsung sebagai relawan bersama berbagai lembaga amil zakat nasional. Berkomitmen mengintegrasikan keahlian teknis dan manajemen untuk mencetak SDM yang mandiri, berkarakter, dan berdampak sosial.',
  shortBio: 'Sarjana Teknik Komputer bersertifikat BNSP di bidang Video Editing dengan rekam jejak kuat di sektor Sociopreneurship, Pembinaan Karakter Andalasian, Aktivis Dakwah, Bintang Aktivis Kampus, dan Filantropi. Berpengalaman mengelola bisnis multimedia melalui CV THR Production dan UMCreative. Memiliki dedikasi tinggi dalam manajemen tim, operasional program pembinaan mahasiswa, serta turun langsung sebagai relawan bersama berbagai lembaga amil zakat nasional. Berkomitmen mengintegrasikan keahlian teknis dan manajemen untuk mencetak SDM yang mandiri, berkarakter, dan berdampak sosial.',
  stats: [
    { label: 'Sertifikasi BNSP', value: '2028', sub: 'Certified Video Editor' },
    { label: 'Proyek Multimedia', value: 'CEO', sub: 'THR Production' },
    { label: 'Relawan & Filantropi', value: 'Aktif', sub: 'Lembaga Zakat Nasional' },
    { label: 'Beasiswa', value: 'BAKTI NUSA', sub: 'Batch 14' },
  ],
  socials: {
    email: 'mailto:toniwindra.umc@gmail.com',
    instagram: 'https://instagram.com/toni_windra',
    linkedin: 'https://linkedin.com',
    youtube: 'https://youtube.com',
    whatsapp: 'https://wa.me/6285264915802',
  }
};

export const VIDEO_SHOWCASE: VideoShowcaseItem[] = [
  {
    id: 'vid-yt-1',
    title: 'UMCreative Institutional Media & Creative Showcase 2025',
    category: 'Broadcast',
    type: 'youtube',
    embedUrl: 'https://www.youtube-nocookie.com/embed/ScMzIvxBSi4',
    directUrl: 'https://www.youtube.com/watch?v=ScMzIvxBSi4',
    thumbnail: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=1200&auto=format&fit=crop',
    duration: '04:18',
    date: '2025',
    role: 'Executive Producer & Multi-Camera Director',
    description: 'Flagship institutional branding video highlighting campus culture, world-class research facilities, and creative media units at Universitas Muhammadiyah.',
    tags: ['4K Video', 'DaVinci Resolve', 'Direction', 'Branding'],
    featured: true
  },
  {
    id: 'vid-yt-2',
    title: 'Live Broadcast Direction: National Academic Convocation & Dies Natalis',
    category: 'Event',
    type: 'youtube',
    embedUrl: 'https://www.youtube-nocookie.com/embed/L_LUpnjgPso',
    directUrl: 'https://www.youtube.com/watch?v=L_LUpnjgPso',
    thumbnail: 'https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1200&auto=format&fit=crop',
    duration: '02:45:00',
    date: '2024',
    role: 'Broadcast Director & Protocol MC Coordinator',
    description: 'High-stakes multi-camera live switching, real-time graphics lower-thirds, and synchronized audio routing for a 3,500-attendee formal convocation.',
    tags: ['Live Multi-Cam', 'Vmix', 'Broadcast Protocol', 'NDI Stream']
  },
  {
    id: 'vid-gdrive-1',
    title: 'Master Footage Archive: 4K Aerial & Cinematography Raw Master',
    category: 'Corporate',
    type: 'gdrive',
    embedUrl: 'https://drive.google.com/file/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs/preview',
    directUrl: 'https://drive.google.com/file/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs/view?usp=sharing',
    thumbnail: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=1200&auto=format&fit=crop',
    duration: '03:42',
    date: '2025',
    role: 'Drone Pilot & Color Grader',
    description: 'High-bitrate ProRes master archive stored in Google Drive Workspace with /preview endpoint wrapper for institutional clients and broadcasters.',
    tags: ['Google Drive Preview', 'ProRes 422', 'HDR Grading', 'Raw Master'],
    featured: true
  },
  {
    id: 'vid-gdrive-2',
    title: 'Behind the Scenes: UMCreative Studio Audio-Visual Suite & Multi-Camera Setup',
    category: 'Documentary',
    type: 'gdrive',
    embedUrl: 'https://drive.google.com/file/d/1u3N3U7oT2lX8q4Wp1e8r9kL0mB9yXz/preview',
    directUrl: 'https://drive.google.com/file/d/1u3N3U7oT2lX8q4Wp1e8r9kL0mB9yXz/view?usp=sharing',
    thumbnail: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=1200&auto=format&fit=crop',
    duration: '05:10',
    date: '2024',
    role: 'Lead Presenter & Studio Engineer',
    description: 'Studio tour demonstrating broadcast routing, wireless intercoms, studio teleprompter workflows, and live tally indicators.',
    tags: ['Studio Tour', 'Audio Suite', 'Broadcasting Rig']
  },
  {
    id: 'vid-ig-1',
    title: 'Grand Convocation MC Opening Ceremony Highlight Reel',
    category: 'Reel',
    type: 'instagram',
    embedUrl: 'https://www.instagram.com/reel/C_testReel1/',
    directUrl: 'https://www.instagram.com/reel/C_testReel1/',
    thumbnail: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?q=80&w=900&auto=format&fit=crop',
    duration: '00:58',
    date: '2025',
    role: 'Master of Ceremonies',
    description: 'Viral Instagram 9:16 Reel capturing the resonant opening remarks, formal greetings, and high-energy stage presence at the National Convocation.',
    tags: ['9:16 Vertical', 'MC Highlight', 'Stage Presence', 'Viral Reel'],
    featured: true
  },
  {
    id: 'vid-ig-2',
    title: 'International Panel Moderation: Tech & Public Communication Trends',
    category: 'Reel',
    type: 'instagram',
    embedUrl: 'https://www.instagram.com/reel/C_testReel2/',
    directUrl: 'https://www.instagram.com/reel/C_testReel2/',
    thumbnail: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=900&auto=format&fit=crop',
    duration: '01:15',
    date: '2024',
    role: 'Chief Moderator',
    description: 'Key insights and bilingual moderation dynamic from the plenary panel with international guest delegates.',
    tags: ['Bilingual Moderator', 'Panel Discussion', 'Public Speaking']
  },
  {
    id: 'vid-yt-3',
    title: 'Cinematic Visual Campaign: "Empowering Future Innovators"',
    category: 'Corporate',
    type: 'youtube',
    embedUrl: 'https://www.youtube-nocookie.com/embed/kJQP7kiw5Fk',
    directUrl: 'https://www.youtube.com/watch?v=kJQP7kiw5Fk',
    thumbnail: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=1200&auto=format&fit=crop',
    duration: '02:30',
    date: '2024',
    role: 'Creative Director & Post-Production Editor',
    description: 'Narrative commercial spot with orchestral sound design, precision color grading, and dynamic typography animations.',
    tags: ['Commercial', 'Storytelling', 'Color Grading', 'Sound Design']
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'photo-1',
    title: 'Executive Dignitary Portraiture — Convocation Plenary',
    category: 'photography',
    categoryLabel: 'Natural Photography',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1200&auto=format&fit=crop',
    highResImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=90&w=2400&auto=format&fit=crop',
    aspectRatio: 'portrait',
    caption: '100% Natural Facial Preservation — Zero plastic AI smoothing, authentic skin micro-textures, and organic studio rim-lighting.',
    description: 'Captured during the Presidential Academic Board meeting. Employs soft directional strobe lighting that enhances individual character and dignity while preserving real skin pores, true melanin tones, and sharp optical clarity.',
    client: 'Universitas Muhammadiyah Executive Board',
    year: '2025',
    tags: ['Executive Portrait', 'Natural Skin Tone', 'Strobe Lighting', 'No AI Filter'],
    facialPreservationNote: '100% Natural Facial Preservation — Handcrafted tone curve, zero skin-softening or beautify smoothing algorithms. Preserving genuine dignity and high-resolution optical truth.',
    technicalSpecs: {
      camera: 'Sony Alpha 7R V',
      lens: 'FE 85mm f/1.4 GM',
      settings: '1/200s • f/2.8 • ISO 100 • Broncolor 90cm Octa Softbox',
      software: 'Capture One Pro Raw Processing (Zero Beautify)',
      dimensions: '6000 x 8000 px (61 MP Uncompressed)'
    }
  },
  {
    id: 'flyer-1',
    title: 'International Symposium on Artificial Intelligence & Ethics',
    category: 'flyers',
    categoryLabel: 'Flyers & Posters',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop',
    highResImage: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=90&w=2400&auto=format&fit=crop',
    aspectRatio: 'portrait',
    caption: 'Official Key Visual Flyer — Minimalist Swiss grid typography paired with deep obsidian glass visual cues.',
    description: 'Principal promotional poster and digital registration flyer distributed across Southeast Asian academic networks. Designed with mathematical typographical hierarchy and high contrast readouts.',
    client: 'Faculty of Science & Technology',
    year: '2025',
    tags: ['Typography', 'Grid System', 'Print CMYK', 'Vector Art'],
    technicalSpecs: {
      software: 'Adobe Illustrator & InDesign 2025',
      dimensions: 'A3 (297 x 420 mm) @ 300 DPI CMYK',
      settings: 'Pantone Metallic Spot Colors + Digital Hex RGB'
    }
  },
  {
    id: 'deck-1',
    title: 'UMCreative Institutional Media Kit & Strategic Pitch Deck',
    category: 'pitchdeck',
    categoryLabel: 'Pitch Decks & Corporate',
    image: 'https://images.unsplash.com/photo-1542744094-3a31f272c490?q=80&w=1200&auto=format&fit=crop',
    highResImage: 'https://images.unsplash.com/photo-1542744094-3a31f272c490?q=90&w=2400&auto=format&fit=crop',
    aspectRatio: 'landscape',
    caption: 'Comprehensive 42-slide partnership pitch deck with glassmorphic data visualization and clean ROI projections.',
    description: 'Corporate deck utilized to secure industry sponsorship and multi-stakeholder media partnerships for university broadcasts and youth creative initiatives.',
    client: 'Institutional Relations & Industry Partners',
    year: '2025',
    tags: ['Pitch Deck', 'Data Viz', 'Corporate Presentation', 'Figma'],
    technicalSpecs: {
      software: 'Figma & Apple Keynote Pro',
      dimensions: '16:9 Ultra HD (3840 x 2160 px)',
      settings: 'Custom Vector Master Components + Interactive Prototype'
    }
  },
  {
    id: 'photo-2',
    title: 'Stage In-Action: Master of Ceremonies & Keynote Address',
    category: 'photography',
    categoryLabel: 'Natural Photography',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1200&auto=format&fit=crop',
    highResImage: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=90&w=2400&auto=format&fit=crop',
    aspectRatio: 'portrait',
    caption: '100% Natural Facial Preservation — Ambient auditorium rim lighting capturing authentic human focus and stage eloquence.',
    description: 'Live performance photograph capturing the intensity and composure of formal public communication. Zero plastic skin blur — honoring the subject’s real expressions and lighting environment.',
    client: 'National Media Forum',
    year: '2024',
    tags: ['Live Stage', 'Natural Contrast', 'Ambient Lighting', 'Editorial'],
    facialPreservationNote: '100% Natural Facial Preservation — Faithful low-light sensor rendering with natural fine noise grain, avoiding AI hallucinations or unnatural beauty smoothing.',
    technicalSpecs: {
      camera: 'Sony Alpha 7 IV',
      lens: 'FE 70-200mm f/2.8 GM OSS II',
      settings: '1/320s • f/2.8 • ISO 1600 • 135mm',
      software: 'Adobe Lightroom Classic (Zero Clarity/Texture Softening)',
      dimensions: '4672 x 7008 px (33 MP)'
    }
  },
  {
    id: 'flyer-2',
    title: 'Dies Natalis Golden Jubilee Commemorative Poster & Key Visual',
    category: 'flyers',
    categoryLabel: 'Flyers & Posters',
    image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1200&auto=format&fit=crop',
    highResImage: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?q=90&w=2400&auto=format&fit=crop',
    aspectRatio: 'portrait',
    caption: 'Official 50th Anniversary Commemorative Visual — Bespoke gold foil vector typography and geometric emblem.',
    description: 'Key visual identity implemented across large-format LED billboards, stage backdrops, invitation cards, and commemorative books.',
    client: 'Universitas Muhammadiyah Chancellor Office',
    year: '2024',
    tags: ['Commemorative', 'Gold Foil Vector', 'Key Visual', 'Large Format'],
    technicalSpecs: {
      software: 'Adobe Photoshop & Illustrator Vector Master',
      dimensions: 'Large Format LED 4K (4096 x 2304 px) + A2 Print',
      settings: 'High Precision Vector Paths + 3D Light Rendering'
    }
  },
  {
    id: 'branding-1',
    title: 'UMCreative Visual Identity & Motion Design System',
    category: 'branding',
    categoryLabel: 'Brand Identity',
    image: 'https://images.unsplash.com/photo-1600132806370-bf17e65e942f?q=80&w=1200&auto=format&fit=crop',
    highResImage: 'https://images.unsplash.com/photo-1600132806370-bf17e65e942f?q=90&w=2400&auto=format&fit=crop',
    aspectRatio: 'landscape',
    caption: 'Comprehensive brand architecture, responsive logo variations, custom typeface hierarchy, and lower-third broadcast templates.',
    description: 'The definitive design guidelines manual for UMCreative. Standardized color codes, safe zones, lower thirds for live broadcast, and social media layout grids.',
    client: 'UMCreative Internal Production Unit',
    year: '2024',
    tags: ['Brand Guidelines', 'Logo System', 'Motion Lower-Thirds', 'Identity'],
    technicalSpecs: {
      software: 'Figma Design System + After Effects Essential Graphics',
      dimensions: 'Dynamic Vector Design System',
      settings: 'MOGRT Broadcast Templates for Premiere Pro'
    }
  },
  {
    id: 'photo-3',
    title: 'Senior Faculty & Chancellor Honor Portraiture',
    category: 'photography',
    categoryLabel: 'Natural Photography',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1200&auto=format&fit=crop',
    highResImage: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=90&w=2400&auto=format&fit=crop',
    aspectRatio: 'portrait',
    caption: '100% Natural Facial Preservation — Meticulous lighting preserving natural micro-expression, eye reflections, and genuine elegance.',
    description: 'Official academic portraiture for international visiting professors. Preserving real organic beauty through mastery of classical Rembrandt lighting and high optical resolving power.',
    client: 'International Relations Office',
    year: '2025',
    tags: ['Editorial Portrait', 'Natural Aesthetics', 'Zero Filter', 'High Resolution'],
    facialPreservationNote: '100% Natural Facial Preservation — True organic depth. Rejecting plastic doll-like beautification in favor of real skin integrity and professional elegance.',
    technicalSpecs: {
      camera: 'Sony Alpha 7R V',
      lens: 'FE 135mm f/1.8 GM',
      settings: '1/250s • f/2.2 • ISO 100 • Keylight Grid + Diffused Fill',
      software: 'Raw Optical Neutral Curve',
      dimensions: '6000 x 8000 px (48-bit Color Depth)'
    }
  },
  {
    id: 'deck-2',
    title: 'Multi-Camera Live Broadcast Infrastructure Proposal Deck',
    category: 'pitchdeck',
    categoryLabel: 'Pitch Decks & Corporate',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop',
    highResImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=90&w=2400&auto=format&fit=crop',
    aspectRatio: 'landscape',
    caption: 'Technical workflow architecture deck outlining 12G-SDI / NDI hybrid production suites for university auditoriums.',
    description: 'Detailed financial and technical feasibility deck presented to university trustees for capital broadcast equipment procurement and studio upgrade.',
    client: 'University Executive Board & Finance Committee',
    year: '2024',
    tags: ['Technical Deck', 'Broadcast Engineering', 'Feasibility Study', 'Architecture'],
    technicalSpecs: {
      software: 'Figma + Microsoft PowerPoint Corporate',
      dimensions: '16:9 Presentation (1920 x 1080 px)',
      settings: 'Vector Architecture Diagrams & Flowcharts'
    }
  },
  {
    id: 'flyer-3',
    title: 'National Media Literacy & Public Speaking Masterclass',
    category: 'flyers',
    categoryLabel: 'Flyers & Posters',
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1200&auto=format&fit=crop',
    highResImage: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=90&w=2400&auto=format&fit=crop',
    aspectRatio: 'portrait',
    caption: 'Masterclass promotional visual featuring Toni Windra as Master Trainer — Bold glass card overlays and vibrant high-contrast hierarchy.',
    description: 'Promotional campaign flyer for an intensive 2-day certified workshop in formal Master of Ceremonies protocols and broadcast public communication.',
    client: 'UMCreative Public Academy',
    year: '2025',
    tags: ['Masterclass', 'Public Speaking', 'Workshop Poster', 'Typography'],
    technicalSpecs: {
      software: 'Adobe Photoshop & InDesign 2025',
      dimensions: 'Instagram Post (1080 x 1350 px) + Print Flyer',
      settings: 'Optimized RGB Web Profile'
    }
  }
];

export const SPEAKING_ENGAGEMENTS: SpeakingEngagement[] = [];

export const EDUCATION_AND_CERTIFICATION = [
  {
    period: 'Agust 2021 - Jan 2026',
    title: 'Universitas Andalas | Sarjana Teknik (S.T.), Teknik Komputer',
    description: 'Tugas Akhir: Mengembangkan sistem computer vision menggunakan algoritma YOLO dan Raspberry Pi untuk mendeteksi penyakit tanaman cabai.'
  },
  {
    period: 'Okt 2025 - Okt 2028',
    title: 'Certified Video Editor (BNSP)',
    description: 'Kompetensi: Manajemen aset audio-visual, perencanaan UX, penerjemahan creative brief, dan penyuntingan video profesional.'
  },
  {
    period: 'Jan 2025 - Des 2025',
    title: 'Beasiswa Aktivis Nusantara (BAKTI NUSA) Batch 14',
    description: 'Mengembangkan "UMCreative" sebagai wadah pelatihan dan layanan kreatif untuk menjembatani kesenjangan keterampilan mahasiswa dengan industri multimedia.'
  }
];

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    period: 'Apr 2026 - Sekarang',
    role: 'Direktur Utama (CEO)',
    company: 'CV THR Production',
    location: '',
    description: 'Mengelola perusahaan yang bergerak di bidang Creative Multimedia, Agrotech, dan Solusi IT. Mengelola proyek Marketing Communication (Marcom) untuk Inisiatif Zakat Indonesia (IZI) Sumatera Barat.',
    achievements: [
      'Merancang program inkubasi "Academy of Life" berbasis asrama untuk memfasilitasi kemandirian finansial dan pembinaan karakter mahasiswa.',
      'Menerapkan sistem pelacakan kebiasaan (habit tracking) untuk mendukung kedisiplinan dan evaluasi kerja tim.'
    ]
  },
  {
    period: 'Mar 2024 - Feb 2026',
    role: 'Chief Executive Officer (CEO)',
    company: 'UMCreative',
    location: '',
    description: 'Mengelola penyediaan layanan videografi, fotografi, desain grafis, dan live streaming untuk berbagai klien dan kebutuhan Direktorat Kemahasiswaan Universitas Andalas.',
    achievements: [
      'Menyusun proposal kemitraan dan mengontrol kualitas keluaran (quality control) dari konten visual tim produksi.'
    ]
  },
  {
    period: 'Jan 2022 - Sekarang',
    role: 'Tim Media Creative',
    company: 'Direktorat Kemahasiswaan Universitas Andalas',
    location: '',
    description: 'Membantu dokumentasi setiap event kemahasiswaan Universitas Andalas.',
    achievements: [
      'Mengelola ruang podcast kemahasiswaan dengan mengundang tiap UKM Universitas.',
      'Mengelola Sosial Media @ditmawa.unand.'
    ]
  },
  {
    period: 'Jan 2021 - Des 2023',
    role: 'Freelance Master of Ceremony (MC) & Moderator',
    company: 'Freelance',
    location: '',
    description: 'Memandu acara formal berskala nasional, termasuk Seminar Nasional dan Wisuda Fakultas, yang melatih kemampuan public speaking dan manajemen audiens.',
    achievements: [
      'Membangun komunikasi efektif dengan narasumber dan panitia untuk memastikan alur acara berjalan dinamis.'
    ]
  },
  {
    period: 'Jun 2021 - Feb 2024',
    role: 'Photographer & Studio Administrator',
    company: 'Studio HTE Photography',
    location: '',
    description: 'Terlibat aktif dalam pendirian dan pengembangan awal operasional studio, membangun sistem kerja yang efisien dari tahap inisiasi hingga bisnis berjalan stabil.',
    achievements: [
      'Bertanggung jawab sebagai fotografer untuk berbagai kebutuhan klien, memastikan kualitas visual yang konsisten dan artistik.'
    ]
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Hard Skills',
    iconName: 'Camera',
    description: 'Videography, Photography, Video Editing, Graphic Design, Scriptwriting.',
    skills: [
      { name: 'Videography', proficiency: 95 },
      { name: 'Photography', proficiency: 95 },
      { name: 'Video Editing', proficiency: 95 },
      { name: 'Graphic Design', proficiency: 90 },
      { name: 'Scriptwriting', proficiency: 85 }
    ]
  },
  {
    title: 'Software',
    iconName: 'MonitorPlay',
    description: 'Adobe Premiere Pro, After Effects, Photoshop, Illustrator, Figma, CapCut.',
    skills: [
      { name: 'Adobe Premiere Pro', proficiency: 95 },
      { name: 'After Effects', proficiency: 90 },
      { name: 'Photoshop', proficiency: 95 },
      { name: 'Illustrator', proficiency: 90 },
      { name: 'Figma', proficiency: 85 },
      { name: 'CapCut', proficiency: 95 }
    ]
  },
  {
    title: 'Soft Skills',
    iconName: 'Users',
    description: 'Leadership, Project Management, Public Speaking.',
    skills: [
      { name: 'Leadership', proficiency: 95 },
      { name: 'Project Management', proficiency: 90 },
      { name: 'Public Speaking', proficiency: 95 }
    ]
  }
];
