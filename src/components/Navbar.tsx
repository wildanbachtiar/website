import React, { useEffect, useState } from 'react';
import { Heart, Moon, Sun } from 'lucide-react';
import { SOCIAL_LINKS } from '../data/projects';

interface NavbarProps {
  isDark: boolean;
  onToggleTheme: (event?: React.MouseEvent<HTMLButtonElement>) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ isDark, onToggleTheme }) => {
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [scrolled, setScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ['hero', 'portfolio', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-5 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none transition-all duration-300">
      <div
        id="navbar-container"
        className={`pointer-events-auto flex items-center justify-between gap-4 sm:gap-6 px-5 sm:px-6 py-2.5 rounded-full transition-all duration-300 ${
          isDark
            ? 'bg-neutral-900/35 text-[#e5e2e1] border border-white/15 shadow-[0_8px_32px_0_rgba(0,0,0,0.5)]'
            : 'bg-white/40 text-neutral-900 border border-black/10 shadow-[0_8px_30px_rgba(0,0,0,0.08)]'
        } backdrop-blur-xl backdrop-saturate-150 hover:border-white/25`}
      >
        <nav className="flex items-center gap-4 sm:gap-6" aria-label="Main Navigation">
          <button
            type="button"
            id="nav-welcome-btn"
            onClick={() => scrollTo('hero')}
            className={`text-xs sm:text-sm tracking-wide transition-colors whitespace-nowrap cursor-pointer ${
              activeSection === 'hero'
                ? isDark
                  ? 'text-white font-medium'
                  : 'text-black font-semibold'
                : isDark
                ? 'text-neutral-400 hover:text-white font-normal'
                : 'text-neutral-500 hover:text-black font-normal'
            }`}
          >
            Welcome
          </button>
          <button
            type="button"
            id="nav-portfolio-btn"
            onClick={() => scrollTo('portfolio')}
            className={`text-xs sm:text-sm tracking-wide transition-colors whitespace-nowrap cursor-pointer ${
              activeSection === 'portfolio'
                ? isDark
                  ? 'text-white font-medium'
                  : 'text-black font-semibold'
                : isDark
                ? 'text-neutral-400 hover:text-white font-normal'
                : 'text-neutral-500 hover:text-black font-normal'
            }`}
          >
            Portofolio
          </button>
          <button
            type="button"
            id="nav-contact-btn"
            onClick={() => scrollTo('contact')}
            className={`text-xs sm:text-sm tracking-wide transition-colors whitespace-nowrap cursor-pointer ${
              activeSection === 'contact'
                ? isDark
                  ? 'text-white font-medium'
                  : 'text-black font-semibold'
                : isDark
                ? 'text-neutral-400 hover:text-white font-normal'
                : 'text-neutral-500 hover:text-black font-normal'
            }`}
          >
            Contact
          </button>
        </nav>

        <div
          className={`h-4 w-[1px] ${
            isDark ? 'bg-white/15' : 'bg-neutral-300'
          }`}
        />

        <div className="flex items-center gap-2">
          <a
            id="nav-support-link"
            href={SOCIAL_LINKS.support}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Support Wildan di Lynk.id"
            title="Dukung karya saya"
            className={`w-8 h-8 rounded-full flex items-center justify-center transition-all border ${
              isDark
                ? 'bg-white/10 text-neutral-300 hover:text-rose-400 hover:bg-white/15 border-white/10'
                : 'bg-black/5 text-neutral-700 hover:text-rose-500 hover:bg-black/10 border-black/5'
            }`}
          >
            <Heart className="w-3.5 h-3.5 fill-current" />
          </a>

          <button
            type="button"
            id="nav-theme-toggle"
            onClick={(e) => onToggleTheme(e)}
            aria-label="Toggle dark and light theme"
            title={isDark ? 'Beralih ke mode terang' : 'Beralih ke mode gelap'}
            className={`w-8 h-8 rounded-full flex items-center justify-center transition-transform active:scale-90 border cursor-pointer ${
              isDark
                ? 'bg-white/10 text-neutral-300 hover:text-white hover:bg-white/15 border-white/10'
                : 'bg-black/5 text-neutral-700 hover:text-black hover:bg-black/10 border-black/5'
            }`}
          >
            {isDark ? (
              <Sun className="w-3.5 h-3.5 transition-transform duration-300 rotate-0 hover:rotate-45" />
            ) : (
              <Moon className="w-3.5 h-3.5 transition-transform duration-300 -rotate-12 hover:rotate-0" />
            )}
          </button>
        </div>
      </div>
    </header>
  );
};
