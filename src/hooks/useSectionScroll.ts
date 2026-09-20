import { useEffect, useRef } from 'react';

interface UseSectionScrollOptions {
  enabled: boolean;
}

export function useSectionScroll({ enabled }: UseSectionScrollOptions) {
  const isAnimatingRef = useRef<boolean>(false);
  const touchStartY = useRef<number | null>(null);

  useEffect(() => {
    if (!enabled) return;

    // Smooth scroll with custom easy-ease (cubic bezier)
    const smoothScrollTo = (targetY: number, duration = 850) => {
      if (isAnimatingRef.current) return;
      isAnimatingRef.current = true;

      const startY = window.scrollY;
      const distance = targetY - startY;

      if (Math.abs(distance) < 5) {
        isAnimatingRef.current = false;
        return;
      }

      const startTime = performance.now();

      // Easy Ease curve (cubic-bezier ease in-out)
      const easeInOutCubic = (t: number) => {
        return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
      };

      let rafId: number;

      const step = (currentTime: number) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const eased = easeInOutCubic(progress);

        window.scrollTo(0, startY + distance * eased);

        if (progress < 1) {
          rafId = requestAnimationFrame(step);
        } else {
          window.scrollTo(0, targetY);
          // Cooldown to prevent immediate re-trigger from inertia
          setTimeout(() => {
            isAnimatingRef.current = false;
          }, 120);
        }
      };

      rafId = requestAnimationFrame(step);
    };

    const handleWheel = (e: WheelEvent) => {
      if (isAnimatingRef.current) {
        e.preventDefault();
        return;
      }

      // Ignore if user is scrolling inside an input, textarea, or open modal
      const target = e.target as HTMLElement | null;
      if (target?.closest('input, textarea, select, [role="dialog"], .overflow-y-auto')) {
        return;
      }

      const heroEl = document.getElementById('hero');
      const portfolioEl = document.getElementById('portfolio');
      const contactEl = document.getElementById('contact');

      if (!heroEl || !portfolioEl || !contactEl) return;

      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const navOffset = 70; // Navbar clearance

      const heroRect = heroEl.getBoundingClientRect();
      const portfolioRect = portfolioEl.getBoundingClientRect();
      const contactRect = contactEl.getBoundingClientRect();

      const portfolioTargetY = Math.max(0, scrollY + portfolioRect.top - navOffset);
      const contactTargetY = Math.max(0, scrollY + contactRect.top - navOffset);

      // Scenario 1: User is at Hero section and scrolls DOWN
      // If hero top is visible and we are near the top of the page
      if (e.deltaY > 15 && scrollY < heroEl.offsetHeight * 0.65) {
        e.preventDefault();
        smoothScrollTo(portfolioTargetY, 850);
        return;
      }

      // Scenario 2: User is at the bottom of Portfolio section and scrolls DOWN
      // The portfolio section content is finished when portfolioRect.bottom is close to the viewport bottom
      if (e.deltaY > 15) {
        const isPortfolioBottomInView = portfolioRect.bottom <= windowHeight + 120;
        const isNotYetAtContact = contactRect.top > windowHeight * 0.5;

        if (isPortfolioBottomInView && isNotYetAtContact) {
          e.preventDefault();
          smoothScrollTo(contactTargetY, 850);
          return;
        }
      }

      // Scenario 3: User is at Contact section and scrolls UP
      if (e.deltaY < -15) {
        const isAtContact = contactRect.top <= 120;
        if (isAtContact) {
          e.preventDefault();
          // Scroll back to bottom of portfolio
          const returnY = Math.max(0, scrollY + portfolioRect.bottom - windowHeight + 40);
          smoothScrollTo(returnY, 850);
          return;
        }

        // Scenario 4: User is near the top of Portfolio and scrolls UP
        if (portfolioRect.top >= 0 && portfolioRect.top <= 140 && scrollY > 0) {
          e.preventDefault();
          smoothScrollTo(0, 850);
          return;
        }
      }
    };

    const handleTouchStart = (e: TouchEvent) => {
      if (e.touches.length === 1) {
        touchStartY.current = e.touches[0].clientY;
      }
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (touchStartY.current === null || isAnimatingRef.current) return;

      const touchCurrentY = e.touches[0].clientY;
      const deltaY = touchStartY.current - touchCurrentY; // Positive = scroll down

      if (Math.abs(deltaY) < 35) return; // Threshold

      const heroEl = document.getElementById('hero');
      const portfolioEl = document.getElementById('portfolio');
      const contactEl = document.getElementById('contact');

      if (!heroEl || !portfolioEl || !contactEl) return;

      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const navOffset = 70;

      const portfolioRect = portfolioEl.getBoundingClientRect();
      const contactRect = contactEl.getBoundingClientRect();

      const portfolioTargetY = Math.max(0, scrollY + portfolioRect.top - navOffset);
      const contactTargetY = Math.max(0, scrollY + contactRect.top - navOffset);

      // Hero -> Portfolio
      if (deltaY > 35 && scrollY < heroEl.offsetHeight * 0.5) {
        touchStartY.current = null;
        smoothScrollTo(portfolioTargetY, 850);
        return;
      }

      // Portfolio bottom -> Contact
      if (deltaY > 35) {
        const isPortfolioBottomInView = portfolioRect.bottom <= windowHeight + 100;
        const isNotYetAtContact = contactRect.top > windowHeight * 0.5;
        if (isPortfolioBottomInView && isNotYetAtContact) {
          touchStartY.current = null;
          smoothScrollTo(contactTargetY, 850);
          return;
        }
      }

      // Contact -> Portfolio
      if (deltaY < -35 && contactRect.top <= 100) {
        touchStartY.current = null;
        const returnY = Math.max(0, scrollY + portfolioRect.bottom - windowHeight + 40);
        smoothScrollTo(returnY, 850);
        return;
      }

      // Portfolio top -> Hero
      if (deltaY < -35 && portfolioRect.top >= 0 && portfolioRect.top <= 120) {
        touchStartY.current = null;
        smoothScrollTo(0, 850);
        return;
      }
    };

    const handleTouchEnd = () => {
      touchStartY.current = null;
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (isAnimatingRef.current) return;

      // Handle PageDown or Space or ArrowDown when at Hero
      if (e.key === 'ArrowDown' || e.key === 'PageDown' || (e.key === ' ' && !e.shiftKey)) {
        const heroEl = document.getElementById('hero');
        const portfolioEl = document.getElementById('portfolio');
        if (heroEl && portfolioEl && window.scrollY < heroEl.offsetHeight * 0.5) {
          e.preventDefault();
          const portfolioTargetY = Math.max(0, window.scrollY + portfolioEl.getBoundingClientRect().top - 70);
          smoothScrollTo(portfolioTargetY, 850);
        }
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: true });
    window.addEventListener('touchend', handleTouchEnd, { passive: true });
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [enabled]);
}
