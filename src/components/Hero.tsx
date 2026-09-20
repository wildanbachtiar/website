import React, { useRef } from 'react';
import { ArrowDown } from 'lucide-react';
import { MEMOJI_URLS } from '../data/projects';
import { DotsWaveCanvas } from './DotsWaveCanvas';

interface HeroProps {
  isDark: boolean;
  onExploreClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ isDark, onExploreClick }) => {
  const heroRef = useRef<HTMLElement | null>(null);

  return (
    <section
      ref={heroRef}
      id="hero"
      className="relative min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center text-center px-4 sm:px-6 md:px-12 overflow-hidden pt-28 pb-16"
    >
      {/* 3D Animated Dots Wave Canvas Background */}
      <DotsWaveCanvas isDark={isDark} heroRef={heroRef} />

      {/* Ambient Monochrome Radial Glow */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center z-0">
        <div
          className={`w-[28rem] h-[28rem] sm:w-[36rem] sm:h-[36rem] md:w-[52rem] md:h-[52rem] rounded-full blur-[130px] transition-colors duration-500 ${
            isDark ? 'bg-white/[0.04]' : 'bg-neutral-900/[0.03]'
          }`}
        />
      </div>

      <div className="relative z-10 flex flex-col items-center max-w-4xl mx-auto w-full">
        {/* Floating Top-Right Memoji (Laptop) */}
        <div
          className="absolute -top-12 -right-4 sm:-right-12 md:-right-24 lg:-right-32 w-20 h-20 sm:w-28 sm:h-28 md:w-36 md:h-36 pointer-events-none select-none transition-transform duration-700 hover:scale-110 z-20 hidden sm:block animate-bounce [animation-duration:4s]"
          style={{ transform: 'rotate(6deg)' }}
        >
          <img
            src={MEMOJI_URLS.laptop}
            alt="Memoji Wildan dengan Laptop"
            className="w-full h-full object-contain filter drop-shadow-[0_16px_32px_rgba(0,0,0,0.6)]"
            loading="eager"
          />
        </div>

        {/* Monospaced Overline Badge */}
        <div
          id="hero-badge"
          className={`inline-flex items-center justify-center px-4 py-1.5 rounded-full text-xs sm:text-sm tracking-wide mb-6 font-medium font-mono transition-all duration-300 ${
            isDark
              ? 'border border-white/15 bg-[#1a1919] text-neutral-300 shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]'
              : 'border border-neutral-300 bg-neutral-100 text-neutral-700 shadow-sm'
          }`}
        >
          Portofolio Website
        </div>

        {/* Main Heading */}
        <h1
          id="hero-title"
          className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.08] transition-colors duration-300 max-w-3xl ${
            isDark ? 'text-white' : 'text-neutral-900'
          }`}
        >
          Explore The{' '}
          <span className="relative inline-block align-baseline">
            <span className="wildan-gradient-text">Wildan</span>
            <span className="wildan-gradient-glow" aria-hidden="true">
              Wildan
            </span>
          </span>
          ’s World
        </h1>

        {/* Indonesian Subheading */}
        <p
          id="hero-description"
          className={`text-base sm:text-lg md:text-xl mt-5 max-w-2xl font-normal leading-relaxed transition-colors duration-300 ${
            isDark ? 'text-neutral-400' : 'text-neutral-600'
          }`}
        >
          Kumpulan karya website yang saya bangun — dari tools, game interaktif, hingga sistem informasi keuangan.
        </p>

        {/* Action CTA Button */}
        <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
          <button
            type="button"
            id="hero-cta-btn"
            onClick={onExploreClick}
            className={`inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full text-sm sm:text-base font-medium transition-all duration-300 group cursor-pointer shadow-lg active:scale-95 ${
              isDark
                ? 'bg-[#262626] text-white hover:bg-white hover:text-black border border-white/10 hover:border-white'
                : 'bg-neutral-900 text-white hover:bg-neutral-800 border border-neutral-800'
            }`}
          >
            <span>Lihat Portofolio</span>
            <ArrowDown className="w-4 h-4 transition-transform duration-300 group-hover:translate-y-1" />
          </button>
        </div>

        {/* Floating Bottom-Left Memoji (Thumbs Up) */}
        <div
          className="absolute -bottom-10 -left-4 sm:-left-12 md:-left-24 lg:-left-32 w-20 h-20 sm:w-28 sm:h-28 md:w-36 md:h-36 pointer-events-none select-none transition-transform duration-700 hover:scale-110 z-20 hidden sm:block animate-bounce [animation-duration:5s] [animation-delay:1s]"
          style={{ transform: 'rotate(-6deg)' }}
        >
          <img
            src={MEMOJI_URLS.thumbsUp}
            alt="Memoji Wildan Thumbs Up"
            className="w-full h-full object-contain filter drop-shadow-[0_16px_32px_rgba(0,0,0,0.6)]"
            loading="eager"
          />
        </div>
      </div>
    </section>
  );
};
