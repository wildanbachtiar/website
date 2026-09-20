import React, { useState, useEffect } from 'react';
import { flushSync } from 'react-dom';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { PortfolioSection } from './components/PortfolioSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';
import { Preloader } from './components/Preloader';
import { useSectionScroll } from './hooks/useSectionScroll';
import { Project } from './data/projects';

export default function App() {
  const [isDark, setIsDark] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('wb_portfolio_theme');
      if (saved) return saved === 'dark';
    }
    return true; // Default Terminal Noir dark
  });

  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isPreloaderActive, setIsPreloaderActive] = useState<boolean>(true);

  // Gentle easy-ease smooth scroll between Hero -> Portfolio and Portfolio -> Contact/CTA
  useSectionScroll({
    enabled: !isPreloaderActive && !selectedProject,
  });

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('wb_portfolio_theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  const toggleTheme = (event?: React.MouseEvent<HTMLButtonElement>) => {
    if (document.documentElement.dataset.themeTransitioning === 'true') {
      return;
    }

    const nextIsDark = !isDark;

    // Get origin coordinates from click event or toggle button
    let originX = window.innerWidth / 2;
    let originY = 40;

    const btn = document.getElementById('nav-theme-toggle');
    const targetRect = (event?.currentTarget || btn)?.getBoundingClientRect();

    if (targetRect) {
      originX = targetRect.left + targetRect.width / 2;
      originY = targetRect.top + targetRect.height / 2;
    } else if (event && event.clientX && event.clientY) {
      originX = event.clientX;
      originY = event.clientY;
    }

    const maxRadius = Math.hypot(
      Math.max(originX, window.innerWidth - originX),
      Math.max(originY, window.innerHeight - originY)
    );

    const applyTheme = () => {
      flushSync(() => {
        setIsDark(nextIsDark);
        if (nextIsDark) {
          document.documentElement.classList.add('dark');
        } else {
          document.documentElement.classList.remove('dark');
        }
        localStorage.setItem('wb_portfolio_theme', nextIsDark ? 'dark' : 'light');
      });
    };

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const duration = prefersReducedMotion ? 450 : 700;

    const docWithTransition = document as unknown as {
      startViewTransition?: (callback: () => void) => {
        ready: Promise<void>;
        finished: Promise<void>;
      };
    };

    // Fallback if startViewTransition is not supported
    if (typeof docWithTransition.startViewTransition !== 'function') {
      const fallback = document.createElement('span');
      fallback.className = 'dashboard-theme-reveal-fallback';
      fallback.style.setProperty('--dashboard-theme-fallback-origin-x', `${originX}px`);
      fallback.style.setProperty('--dashboard-theme-fallback-origin-y', `${originY}px`);
      fallback.style.background = isDark ? '#131313' : '#ffffff';
      document.body.appendChild(fallback);
      document.documentElement.dataset.themeTransitioning = 'true';

      applyTheme();

      let timer = 0;
      const cleanup = () => {
        window.clearTimeout(timer);
        fallback.remove();
        delete document.documentElement.dataset.themeTransitioning;
      };

      fallback.addEventListener('transitionend', cleanup, { once: true });
      timer = window.setTimeout(cleanup, 1000);

      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          fallback.style.setProperty('--dashboard-theme-fallback-radius', `${maxRadius}px`);
        });
      });
      return;
    }

    // Modern View Transitions API with M3 emphasized deceleration curve
    document.documentElement.dataset.themeTransitioning = 'true';
    document.documentElement.style.setProperty('--dashboard-theme-origin-x', `${originX}px`);
    document.documentElement.style.setProperty('--dashboard-theme-origin-y', `${originY}px`);
    document.documentElement.style.setProperty('--dashboard-theme-radius', `${maxRadius}px`);

    const transition = docWithTransition.startViewTransition(applyTheme);

    transition.ready
      .then(() => {
        return document.documentElement.animate(
          [
            { clipPath: `circle(0px at ${originX}px ${originY}px)` },
            { clipPath: `circle(${maxRadius}px at ${originX}px ${originY}px)` },
          ],
          {
            duration,
            easing: 'cubic-bezier(0.3, 0, 0, 1)',
            fill: 'both',
            pseudoElement: '::view-transition-new(root)',
          }
        ).finished;
      })
      .catch(() => {
        document.documentElement.dataset.themeAnimationFallback = 'true';
      });

    transition.finished.finally(() => {
      delete document.documentElement.dataset.themeTransitioning;
      delete document.documentElement.dataset.themeAnimationFallback;
      document.documentElement.style.removeProperty('--dashboard-theme-origin-x');
      document.documentElement.style.removeProperty('--dashboard-theme-origin-y');
      document.documentElement.style.removeProperty('--dashboard-theme-radius');
    });
  };

  const handleExploreClick = () => {
    const portfolioEl = document.getElementById('portfolio');
    if (portfolioEl) {
      portfolioEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div
      className={`min-h-screen flex flex-col font-sans ${
        isDark ? 'bg-[#131313] text-[#e5e2e1]' : 'bg-white text-neutral-900'
      }`}
    >
      {/* Fullscreen Loading Screen with Percentage Counter & Swipe Up Transition */}
      <Preloader onComplete={() => setIsPreloaderActive(false)} />

      {/* Floating Navigation Header */}
      <Navbar isDark={isDark} onToggleTheme={toggleTheme} />

      {/* Main Content Area */}
      <main className="w-full flex-grow flex flex-col">
        {/* Section 1: Hero */}
        <Hero isDark={isDark} onExploreClick={handleExploreClick} />

        {/* Section 2: Portfolio Gallery & Filter */}
        <PortfolioSection
          isDark={isDark}
          onSelectProject={(project) => setSelectedProject(project)}
        />

        {/* Section 3: Contact / CTA */}
        <ContactSection isDark={isDark} />
      </main>

      {/* Footer */}
      <Footer isDark={isDark} />

      {/* Project Detail Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        isDark={isDark}
      />
    </div>
  );
}
