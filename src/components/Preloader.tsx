import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface PreloaderProps {
  onComplete?: () => void;
}

export const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [percent, setPercent] = useState<number>(0);
  const [isFinished, setIsFinished] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState<boolean>(true);

  useEffect(() => {
    // Lock body scroll during preloader
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const startTime = performance.now();
    const duration = 1400; // ~1.4s smooth realistic loading sequence

    let animationFrameId: number;

    const updateCounter = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Custom easing curve for natural feeling progression
      // Starts briskly and snaps to 100%
      const easeProgress =
        progress < 0.7
          ? Math.pow(progress / 0.7, 1.2) * 0.75
          : 0.75 + Math.pow((progress - 0.7) / 0.3, 0.8) * 0.25;

      const currentPercent = Math.min(Math.floor(easeProgress * 100), 100);
      setPercent(currentPercent);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(updateCounter);
      } else {
        setPercent(100);
        // Small brief pause at 100% before swiping up
        setTimeout(() => {
          setIsFinished(true);
        }, 180);
      }
    };

    animationFrameId = requestAnimationFrame(updateCounter);

    return () => {
      cancelAnimationFrame(animationFrameId);
      document.body.style.overflow = prevOverflow;
    };
  }, []);

  const handleAnimationComplete = () => {
    // Unlock body scroll and notify parent
    document.body.style.overflow = '';
    setIsVisible(false);
    if (onComplete) {
      onComplete();
    }
  };

  if (!isVisible) return null;

  return (
    <AnimatePresence onExitComplete={handleAnimationComplete}>
      {!isFinished && (
        <motion.div
          key="preloader-overlay"
          initial={{ y: 0 }}
          exit={{ y: '-100%' }}
          transition={{
            duration: 0.85,
            ease: [0.76, 0, 0.24, 1], // Sophisticated smooth swipe-up curve
          }}
          className="fixed inset-0 z-[99999] bg-black flex flex-col justify-end items-end p-8 sm:p-12 md:p-16 select-none"
        >
          {/* Percentage text positioned in bottom right corner with thin JetBrains Mono */}
          <span
            className="text-white/95 font-mono text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-extralight tracking-tight tabular-nums leading-none"
            style={{
              fontFamily: "'JetBrains Mono', ui-monospace, monospace",
              fontWeight: 200,
            }}
          >
            {percent}%
          </span>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
