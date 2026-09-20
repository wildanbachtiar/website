import React from 'react';
import { Mail } from 'lucide-react';
import { MEMOJI_URLS, SOCIAL_LINKS } from '../data/projects';

interface ContactSectionProps {
  isDark: boolean;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ isDark }) => {
  return (
    <section
      id="contact"
      className={`w-full py-24 sm:py-28 px-4 sm:px-6 md:px-12 my-12 border-t border-b transition-colors duration-300 ${
        isDark
          ? 'bg-[#0a0a0a] border-white/5'
          : 'bg-neutral-50/70 border-neutral-200'
      }`}
    >
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Left Text Block */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left max-w-xl">
          <span
            id="contact-badge"
            className={`inline-flex items-center justify-center px-4 py-1.5 rounded-full text-xs font-mono font-medium tracking-wider mb-5 ${
              isDark
                ? 'border border-white/15 bg-[#181818] text-neutral-300'
                : 'border border-neutral-300 bg-white text-neutral-700'
            }`}
          >
            Get In Touch
          </span>

          <h2
            id="contact-title"
            className={`text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-tight ${
              isDark ? 'text-white' : 'text-neutral-900'
            }`}
          >
            Mau website seperti ini?
          </h2>

          <p
            id="contact-description"
            className={`text-base sm:text-lg mt-4 max-w-lg font-light leading-relaxed ${
              isDark ? 'text-neutral-400' : 'text-neutral-600'
            }`}
          >
            Langsung saja konsultasikan ide proyek atau kebutuhan website Kamu di sini!
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
            <a
              id="contact-cta-btn"
              href={SOCIAL_LINKS.mailto}
              aria-label="Kirim email ke freehandtools@gmail.com"
              className={`inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full text-sm sm:text-base font-medium transition-all duration-300 group cursor-pointer shadow-lg active:scale-95 ${
                isDark
                  ? 'bg-[#262626] text-white hover:bg-white hover:text-black border border-white/10 hover:border-white'
                  : 'bg-neutral-900 text-white hover:bg-neutral-800 border border-neutral-800'
              }`}
            >
              <Mail className="w-4 h-4 transition-transform duration-300 group-hover:scale-110" />
              <span>Hubungi Saya</span>
            </a>
          </div>
        </div>

        {/* Right Memoji Wildan Character */}
        <div className="flex items-center justify-center relative">
          <div
            className={`absolute inset-0 rounded-full blur-3xl opacity-30 ${
              isDark ? 'bg-white/10' : 'bg-neutral-300'
            }`}
          />
          <img
            src={MEMOJI_URLS.contact}
            alt="Memoji Wildan Bachtiar"
            className="w-44 sm:w-56 md:w-64 h-auto object-contain transition-transform duration-500 hover:scale-105 filter drop-shadow-[0_20px_40px_rgba(0,0,0,0.5)] z-10"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};
