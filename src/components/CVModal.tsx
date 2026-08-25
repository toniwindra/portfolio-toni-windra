import React, { useEffect } from 'react';
import { X, Download, Printer, Mail, MapPin, Award, Briefcase, GraduationCap, CheckCircle2, ShieldCheck, Sparkles, ExternalLink } from 'lucide-react';
import { WORK_EXPERIENCE, SKILL_CATEGORIES, EDUCATION_AND_CERTIFICATION } from '../data/portfolioData';
import { usePortfolio } from '../context/PortfolioContext';

interface CVModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CVModal: React.FC<CVModalProps> = ({ isOpen, onClose }) => {
  const { personalInfo } = usePortfolio();

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      id="cv-modal-overlay"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-900/60 backdrop-blur-xl text-slate-900 overflow-y-auto"
    >
      <div
        id="cv-modal-content"
        className="relative w-full max-w-4xl max-h-[92vh] bg-white border border-slate-200 rounded-3xl shadow-2xl overflow-hidden flex flex-col"
      >
        {/* Modal Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 bg-slate-50 border-b border-slate-200 sticky top-0 z-20">
          <div className="flex items-center gap-2">
            <Briefcase className="w-4 h-4 text-sky-600" />
            <span className="text-sm font-extrabold text-slate-900">Curriculum Vitae — {personalInfo.name}</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              id="cv-btn-print"
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-white hover:bg-slate-100 border border-slate-300 text-xs font-bold text-slate-700 transition-colors shadow-sm cursor-pointer"
              title="Cetak atau Simpan PDF"
            >
              <Printer className="w-3.5 h-3.5 text-sky-600" />
              <span>Cetak / Unduh PDF</span>
            </button>
            <button
              onClick={onClose}
              id="cv-btn-close"
              className="p-1.5 rounded-xl bg-white hover:bg-rose-50 border border-slate-300 text-slate-500 hover:text-rose-600 transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Printable Body Content */}
        <div className="p-6 sm:p-10 overflow-y-auto bg-white">
          <div className="bg-white rounded-2xl shadow-sm text-slate-800 text-sm">
            {/* Header Section */}
            <div className="flex flex-col md:flex-row justify-between items-start border-b border-slate-100 pb-6 mb-6">
              <div>
                <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">Toni Windra, S.T., CVES</h2>
                <p className="text-blue-600 font-semibold mt-1.5 text-base">
                  Profesional Multimedia Event | Content Creator | Certified Video Editor (BNSP)
                </p>
              </div>
              <div className="mt-4 md:mt-0 text-slate-500 font-medium space-y-1.5 text-right flex flex-col md:items-end">
                <span className="flex items-center gap-2"><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg> toniwindra.umc@gmail.com</span>
                <span className="flex items-center gap-2"><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg> 085264915802</span>
                <span className="flex items-center gap-2"><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg> Padang, Sumatera Barat</span>
              </div>
            </div>

            {/* Ringkasan Profil */}
            <div className="mb-8">
              <h3 className="text-xs font-bold tracking-widest text-slate-400 uppercase mb-3 flex items-center gap-2">
                <svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> RINGKASAN PROFIL
              </h3>
              <p className="text-slate-600 leading-relaxed text-justify">
                Sarjana Teknik Komputer bersertifikat BNSP di bidang Video Editing dengan rekam jejak kuat di sektor Sociopreneurship, Pembinaan Karakter Andalasian, Aktivis Dakwah, Bintang Aktivis Kampus, dan Filantropi. Berpengalaman mengelola bisnis multimedia melalui CV THR Production dan UMCreative. Berkomitmen mengintegrasikan keahlian teknis dan manajemen untuk mencetak SDM yang mandiri, berkarakter, dan berdampak sosial.
              </p>
            </div>

            {/* Pengalaman Kerja */}
            <div className="mb-8">
              <h3 className="text-xs font-bold tracking-widest text-slate-400 uppercase mb-4 flex items-center gap-2">
                <svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg> PENGALAMAN KERJA & KEPEMIMPINAN
              </h3>
              <div className="border-l-2 border-slate-100 ml-2.5 pl-6 space-y-6 relative">
                
                {/* Exp 1 */}
                <div className="relative">
                  <div className="absolute w-3 h-3 bg-blue-600 rounded-full -left-[31px] top-1.5 shadow-[0_0_0_4px_white]"></div>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-1">
                    <h4 className="text-base font-bold text-slate-900">Direktur Utama (CEO)</h4>
                    <span className="text-blue-600 font-semibold text-xs whitespace-nowrap">Apr 2026 - Sekarang</span>
                  </div>
                  <p className="text-slate-500 font-medium mb-3">CV THR Production — Padang, Sumatera Barat</p>
                  <p className="text-slate-600 mb-2">Mengelola perusahaan yang bergerak di bidang Creative Multimedia, Agrotech, dan Solusi IT.</p>
                  <ul className="space-y-1.5 text-slate-600">
                    <li className="flex items-start gap-2"><svg className="w-4 h-4 text-teal-500 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> Mengelola proyek Marketing Communication untuk Inisiatif Zakat Indonesia (IZI) Sumatera Barat.</li>
                    <li className="flex items-start gap-2"><svg className="w-4 h-4 text-teal-500 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> Merancang program inkubasi "Academy of Life" berbasis asrama untuk memfasilitasi kemandirian finansial mahasiswa.</li>
                  </ul>
                </div>

                {/* Exp 2 */}
                <div className="relative">
                  <div className="absolute w-3 h-3 bg-blue-600 rounded-full -left-[31px] top-1.5 shadow-[0_0_0_4px_white]"></div>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-1">
                    <h4 className="text-base font-bold text-slate-900">Chief Executive Officer (CEO)</h4>
                    <span className="text-blue-600 font-semibold text-xs whitespace-nowrap">Mar 2024 - Feb 2026</span>
                  </div>
                  <p className="text-slate-500 font-medium mb-3">UMCreative — Padang, Sumatera Barat</p>
                  <ul className="space-y-1.5 text-slate-600">
                    <li className="flex items-start gap-2"><svg className="w-4 h-4 text-teal-500 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> Mengelola penyediaan layanan videografi, fotografi, desain grafis, dan live streaming untuk klien dan Direktorat Kemahasiswaan Universitas Andalas.</li>
                    <li className="flex items-start gap-2"><svg className="w-4 h-4 text-teal-500 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> Menyusun proposal kemitraan dan mengontrol kualitas keluaran visual tim produksi.</li>
                  </ul>
                </div>

                {/* Exp 3 */}
                <div className="relative">
                  <div className="absolute w-3 h-3 bg-slate-300 rounded-full -left-[31px] top-1.5 shadow-[0_0_0_4px_white]"></div>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-1">
                    <h4 className="text-base font-bold text-slate-900">Trainer Assistant of Character Andalasian</h4>
                    <span className="text-slate-500 font-semibold text-xs whitespace-nowrap">Feb 2022 - Sekarang</span>
                  </div>
                  <p className="text-slate-500 font-medium mb-3">Universitas Andalas — Padang, Sumatera Barat</p>
                  <ul className="space-y-1.5 text-slate-600">
                    <li className="flex items-start gap-2"><svg className="w-4 h-4 text-teal-500 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> Menjadi pelopor dan fasilitator program pengenalan "Karakter Andalasian" bagi mahasiswa.</li>
                  </ul>
                </div>

                {/* Exp 4 */}
                <div className="relative">
                  <div className="absolute w-3 h-3 bg-slate-300 rounded-full -left-[31px] top-1.5 shadow-[0_0_0_4px_white]"></div>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-1">
                    <h4 className="text-base font-bold text-slate-900">Chief Executive Officer (CEO)</h4>
                    <span className="text-slate-500 font-semibold text-xs whitespace-nowrap">Jan 2021 - Feb 2024</span>
                  </div>
                  <p className="text-slate-500 font-medium mb-2">Studio HTE Photography — Padang, Sumatera Barat</p>
                  <p className="text-slate-600">Membantu pengelolaan sistem kerja, administrasi, dan bertugas sebagai fotografer utama.</p>
                </div>
              </div>
            </div>

            {/* Grid Section for Education & Certifications */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
              
              {/* Pendidikan */}
              <div>
                <h3 className="text-xs font-bold tracking-widest text-slate-400 uppercase mb-4 flex items-center gap-2">
                  <svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path></svg> PENDIDIKAN & BEASISWA
                </h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Sarjana Teknik (S.T.), Teknik Komputer</h4>
                    <p className="text-slate-500 font-medium text-xs mb-1">Universitas Andalas | Agust 2021 - Jan 2026</p>
                    <p className="text-slate-600 text-xs">IPK: 3.42/4.00 (Sangat Memuaskan). Tugas Akhir: Sistem computer vision (YOLO) & Raspberry Pi pendeteksi penyakit cabai.</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Beasiswa Aktivis Nusantara (BAKTI NUSA) Batch 14</h4>
                    <p className="text-slate-500 font-medium text-xs mb-1">Dompet Dhuafa - GREAT Edunesia | Jan 2025 - Des 2025</p>
                    <p className="text-slate-600 text-xs">Leadership Project: Pengembangan "UMCreative". IPK Kepemimpinan: 3.26.</p>
                  </div>
                </div>
              </div>

              {/* Sertifikasi & Keahlian */}
              <div>
                <h3 className="text-xs font-bold tracking-widest text-slate-400 uppercase mb-4 flex items-center gap-2">
                  <svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path></svg> SERTIFIKASI & KEAHLIAN
                </h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Certified Video Editor (BNSP)</h4>
                    <p className="text-slate-500 font-medium text-xs mb-1">LSP Digital Teknologi Informasi | Okt 2025 - Okt 2028</p>
                    <h4 className="text-sm font-bold text-slate-900 mt-2">Certified Video Editor Specialist (CVES©)</h4>
                    <p className="text-slate-500 font-medium text-xs mb-1">LKP Syntax Training Centre | Okt 2025</p>
                  </div>
                  <div className="pt-2 border-t border-slate-100">
                    <p className="text-slate-600 text-xs mb-1"><strong>Hard Skills:</strong> Videography, Photography, Video Editing, Graphic Design, Scriptwriting.</p>
                    <p className="text-slate-600 text-xs mb-1"><strong>Software:</strong> Premiere Pro, After Effects, Photoshop, Illustrator, Figma, CapCut.</p>
                    <p className="text-slate-600 text-xs"><strong>Soft Skills:</strong> Leadership, Project Management, Public Speaking.</p>
                  </div>
                </div>
              </div>

            </div>

            {/* Additional Grid Section: Organisasi, Filantropi & Prestasi */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 border-t border-slate-100 pt-8 mb-4">
              
              {/* Pengalaman Organisasi */}
              <div>
                <h3 className="text-xs font-bold tracking-widest text-slate-400 uppercase mb-4 flex items-center gap-2">
                  <svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg> PENGALAMAN ORGANISASI
                </h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Koordinator Rabbani Multimedia Center</h4>
                    <p className="text-slate-500 font-medium text-xs mb-1">FKI Rabbani UNAND | Des 2023 - Des 2023</p>
                    <p className="text-slate-600 text-xs">Memimpin divisi media dan rutin menyelenggarakan pelatihan multimedia bagi anggota untuk memastikan standar kualitas dalam setiap pengerjaan proyek visual.</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Koordinator Al-Fatih Multimedia Center</h4>
                    <p className="text-slate-500 font-medium text-xs mb-1">FSI Al-Fatih FTI UNAND | Des 2022 - Des 2023</p>
                    <p className="text-slate-600 text-xs">Memimpin divisi media dan rutin menyelenggarakan pelatihan multimedia bagi anggota untuk memastikan standar kualitas dalam setiap pengerjaan proyek visual.</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Staff Media Event / Project Leader Production</h4>
                    <p className="text-slate-500 font-medium text-xs mb-1">UNATIVE (Wakil Rektor III & Ditmawa UNAND) | Des 2022 - Jan 2024</p>
                    <p className="text-slate-600 text-xs">Memimpin divisi media dan rutin menyelenggarakan pelatihan multimedia bagi anggota untuk memastikan standar kualitas dalam setiap pengerjaan proyek visual.</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Staff Media Event</h4>
                    <p className="text-slate-500 font-medium text-xs mb-1">Badan Pengelolaan Mentoring Agama Islam (BPMAI) UNAND | Apr 2022 - Apr 2023</p>
                    <p className="text-slate-600 text-xs">Memimpin divisi media dan rutin menyelenggarakan pelatihan multimedia bagi anggota untuk memastikan standar kualitas dalam setiap pengerjaan proyek visual.</p>
                  </div>
                </div>
              </div>

              {/* Filantropi & Prestasi */}
              <div>
                <h3 className="text-xs font-bold tracking-widest text-slate-400 uppercase mb-4 flex items-center gap-2">
                  <svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg> FILANTROPI & KERELAWANAN
                </h3>
                <ul className="space-y-2.5 text-slate-600 text-xs mb-8 border-l-2 border-slate-100 pl-3 ml-1">
                  <li className="relative">
                    <div className="absolute w-2 h-2 bg-teal-500 rounded-full -left-[17px] top-1"></div>
                    <strong>IZI Sumbar & Dompet Dhuafa:</strong> Relawan Dokumentasi Penyaluran Bencana Sumatera (Des 2025).
                  </li>
                  <li className="relative">
                    <div className="absolute w-2 h-2 bg-teal-500 rounded-full -left-[17px] top-1"></div>
                    <strong>Dompet Dhuafa:</strong> Relawan Event Rumah Singgah Pasien (Mar 2025).
                  </li>
                  <li className="relative">
                    <div className="absolute w-2 h-2 bg-teal-500 rounded-full -left-[17px] top-1"></div>
                    <strong>YBM BRILIaN:</strong> Relawan Cleaning Masjid dalam rangka menyambut Ramadan 1446H (Feb 2025).
                  </li>
                  <li className="relative">
                    <div className="absolute w-2 h-2 bg-teal-500 rounded-full -left-[17px] top-1"></div>
                    <strong>YAKESMA Sumbar:</strong> Videografer untuk Pembuatan Video Profile Pemberdayaan Petani Jamur Tiram (Nov 2024).
                  </li>
                </ul>

                <h3 className="text-xs font-bold tracking-widest text-slate-400 uppercase mb-4 flex items-center gap-2">
                  <svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path></svg> PRESTASI & PENGHARGAAN
                </h3>
                <ul className="space-y-2.5 text-slate-600 text-xs border-l-2 border-slate-100 pl-3 ml-1">
                  <li className="relative">
                    <div className="absolute w-2 h-2 bg-yellow-400 rounded-full -left-[17px] top-1"></div>
                    <strong>Juara 1</strong> - Islamic Education Video FSKI BEM KM FK Universitas Andalas (Jan 2022).
                  </li>
                  <li className="relative">
                    <div className="absolute w-2 h-2 bg-yellow-400 rounded-full -left-[17px] top-1"></div>
                    <strong>Juara 2</strong> - Lomba Desain Poster Kreatif, UKM FKI Rabbani (Nov 2022).
                  </li>
                  <li className="relative">
                    <div className="absolute w-2 h-2 bg-yellow-400 rounded-full -left-[17px] top-1"></div>
                    <strong>Juara 2</strong> - Lomba Videografi Dies Natalis UNAND (Nov 2023).
                  </li>
                </ul>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
