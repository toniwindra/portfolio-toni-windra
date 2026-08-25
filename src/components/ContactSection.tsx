import React, { useState } from 'react';
import { Mail, Phone, Send, CheckCircle2, MessageSquare, Instagram, Linkedin, Youtube, ShieldCheck, Clock, Sparkles } from 'lucide-react';
import { usePortfolio } from '../context/PortfolioContext';
import { ContactFormData } from '../types';

export const ContactSection: React.FC = () => {
  const { personalInfo } = usePortfolio();
  const [formData, setFormData] = useState({
    nama: '',
    email: '',
    instansi: '',
    layanan: 'Master of Ceremonies & Moderasi',
    tanggal: '',
    catatan: ''
  });

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Format the message for WhatsApp
    const message = `Halo Toni Windra, saya tertarik untuk berkolaborasi.%0A%0A*Detail Permohonan:*%0A- *Nama:* ${formData.nama}%0A- *Email:* ${formData.email}%0A- *Instansi/Klien:* ${formData.instansi}%0A- *Layanan:* ${formData.layanan}%0A- *Estimasi Tanggal:* ${formData.tanggal || 'Belum ditentukan'}%0A%0A*Catatan/Detail Kebutuhan:*%0A${formData.catatan}`;
    
    // Open WhatsApp in a new tab with the pre-filled message
    window.open(`https://wa.me/6285264915802?text=${message}`, '_blank');
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Channels & Booking Guidance */}
          <div className="lg:col-span-5 flex flex-col space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sky-50 border border-sky-200 text-sky-800 text-xs font-bold uppercase tracking-wider mb-3">
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Konsultasi & Penjadwalan</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                Mari Berkolaborasi
              </h2>
              <p className="text-sm sm:text-base text-slate-600 mt-2 leading-relaxed">
                Tersedia untuk pengarah siaran multi-kamera, pemotretan komersial/editorial natural, visual campaign, serta pemandu acara formal tingkat nasional.
              </p>
            </div>

            {/* Direct Contact Cards */}
            <div className="space-y-3">
              <a
                href="mailto:toniwindra.umc@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-2xl bg-white/80 hover:bg-white border border-slate-200/90 shadow-sm hover:shadow-md flex items-center gap-4 transition-all"
              >
                <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-bold uppercase">Email Resmi</div>
                  <div className="text-sm font-extrabold text-slate-900">{personalInfo.email}</div>
                </div>
              </a>

              <a
                href="https://wa.me/6285264915802?text=Halo%20CV%20THR%20Production,%20saya%20ingin%20berdiskusi%20mengenai%20ketersediaan%20jadwal"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-2xl bg-white/80 hover:bg-white border border-slate-200/90 shadow-sm hover:shadow-md flex items-center gap-4 transition-all"
              >
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-bold uppercase">WhatsApp Langsung</div>
                  <div className="text-sm font-extrabold text-slate-900">Respon Cepat & Diskusi Rundown</div>
                </div>
              </a>
            </div>

            {/* Social Links */}
            <div className="p-5 rounded-3xl bg-slate-50 border border-slate-200/80">
              <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">
                Saluran Media Sosial
              </div>
              <div className="flex items-center gap-3">
                <a
                  href="https://www.instagram.com/toni_windra/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-white hover:bg-pink-50 border border-slate-200 text-slate-700 hover:text-pink-600 transition-colors shadow-sm"
                  aria-label="Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href="https://www.linkedin.com/in/toni-windra-949b8b21b/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-white hover:bg-blue-50 border border-slate-200 text-slate-700 hover:text-blue-600 transition-colors shadow-sm"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href="https://www.youtube.com/@UMCreative.official"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-white hover:bg-red-50 border border-slate-200 text-slate-700 hover:text-red-600 transition-colors shadow-sm"
                  aria-label="YouTube"
                >
                  <Youtube className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Clean Interactive Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-3xl bg-white/80 backdrop-blur-xl border border-white shadow-[0_12px_40px_rgba(15,23,42,0.06)] ring-1 ring-slate-900/5">
              <form onSubmit={handleWhatsAppSubmit} className="space-y-4">
                <h3 className="text-xl font-extrabold text-slate-900 tracking-tight mb-2">
                  Formulir Pemesanan & Penawaran
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      Nama Lengkap *
                    </label>
                    <input
                      type="text"
                      name="nama"
                      required
                      value={formData.nama}
                      onChange={handleFormChange}
                      placeholder="Contoh: Budi Santoso"
                      className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-200 text-slate-900 text-xs focus:ring-2 focus:ring-sky-500 focus:border-transparent outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      Email Kontak *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleFormChange}
                      placeholder="nama@instansi.com"
                      className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-200 text-slate-900 text-xs focus:ring-2 focus:ring-sky-500 focus:border-transparent outline-none transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      Instansi / Lembaga / Klien *
                    </label>
                    <input
                      type="text"
                      name="instansi"
                      required
                      value={formData.instansi}
                      onChange={handleFormChange}
                      placeholder="Nama Kampus / Perusahaan"
                      className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-200 text-slate-900 text-xs focus:ring-2 focus:ring-sky-500 focus:border-transparent outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      Kebutuhan Layanan
                    </label>
                    <select
                      name="layanan"
                      value={formData.layanan}
                      onChange={handleFormChange}
                      className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-200 text-slate-900 text-xs focus:ring-2 focus:ring-sky-500 focus:border-transparent outline-none transition-all"
                    >
                      <option value="Master of Ceremonies & Moderasi">Master of Ceremonies & Moderasi</option>
                      <option value="Live Broadcast & Produksi Video">Live Broadcast & Produksi Video</option>
                      <option value="Fotografi Komersial & Natural">Fotografi Komersial & Natural</option>
                      <option value="Desain Grafis, Flyer & Pitch Deck">Desain Grafis, Flyer & Pitch Deck</option>
                      <option value="Konsultasi Media & Branding">Konsultasi Media & Branding</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    Estimasi Tanggal Pelaksanaan (Opsional)
                  </label>
                  <input
                    type="date"
                    name="tanggal"
                    value={formData.tanggal}
                    onChange={handleFormChange}
                    className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-200 text-slate-900 text-xs focus:ring-2 focus:ring-sky-500 focus:border-transparent outline-none transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    Detail Kebutuhan & Catatan *
                  </label>
                  <textarea
                    name="catatan"
                    required
                    rows={4}
                    value={formData.catatan}
                    onChange={handleFormChange}
                    placeholder="Jelaskan ringkasan acara, konsep, atau ruang lingkup pekerjaan..."
                    className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-200 text-slate-900 text-xs focus:ring-2 focus:ring-sky-500 focus:border-transparent outline-none transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  id="contact-btn-submit"
                  className="w-full py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs shadow-md active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Kirim Formulir Permohonan</span>
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
