import React, { useEffect, useRef } from 'react';

interface DotsWaveCanvasProps {
  isDark: boolean;
  heroRef: React.RefObject<HTMLElement | null>;
}

export const DotsWaveCanvas: React.FC<DotsWaveCanvasProps> = ({ isDark, heroRef }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const hero = heroRef.current;
    if (!canvas || !hero) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let animationFrameId: number;
    let width = 0;
    let height = 0;
    let dpr = 1;

    // Mouse tracking
    const mouse = {
      x: -9999,
      y: -9999,
      targetX: -9999,
      targetY: -9999,
      isHovered: false,
      activityLevel: 0, // 0 = idle/ambient, 1 = active cursor
    };

    const handlePointerMove = (e: PointerEvent) => {
      const rect = hero.getBoundingClientRect();
      mouse.targetX = (e.clientX - rect.left);
      mouse.targetY = (e.clientY - rect.top);
      mouse.isHovered = true;
    };

    const handlePointerLeave = () => {
      mouse.isHovered = false;
    };

    hero.addEventListener('pointermove', handlePointerMove);
    hero.addEventListener('pointerleave', handlePointerLeave);

    const resize = () => {
      const rect = hero.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      dpr = Math.min(window.devicePixelRatio || 1, 2);

      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);
    };

    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(hero);
    resize();

    // Grid definition
    const COLS = 75; // along width
    const ROWS = 36; // along depth
    let time = 0;

    const render = () => {
      // Smooth mouse coordinates interpolation
      if (mouse.isHovered) {
        if (mouse.x === -9999) {
          mouse.x = mouse.targetX;
          mouse.y = mouse.targetY;
        } else {
          mouse.x += (mouse.targetX - mouse.x) * 0.15;
          mouse.y += (mouse.targetY - mouse.y) * 0.15;
        }
        mouse.activityLevel += (1 - mouse.activityLevel) * 0.08;
      } else {
        mouse.activityLevel += (0 - mouse.activityLevel) * 0.04;
        if (mouse.activityLevel < 0.01) {
          mouse.x = -9999;
          mouse.y = -9999;
        }
      }

      // Time progression: slow and graceful when idle, slightly more fluid when active
      const timeStep = 0.006 + mouse.activityLevel * 0.008;
      time += timeStep;

      ctx.clearRect(0, 0, width, height);

      // Camera & 3D projection parameters - positioned further down towards the bottom
      const fov = 420;
      const cameraY = 60;
      const cameraZ = -90;
      const centerY = height * 0.93; // Lowered further down as requested
      const centerX = width * 0.5;

      const spacingX = Math.max(width / (COLS * 0.82), 16);
      const spacingZ = 20;
      const cursorRadius = 220;

      // Color palettes (crisp grey with distinct contrast)
      // Dark mode: bright silver-grey (pops at 75% opacity)
      // Light mode: clean charcoal grey (pops at 100% opacity, matching reference)
      const baseR = isDark ? 210 : 75;
      const baseG = isDark ? 215 : 80;
      const baseB = isDark ? 225 : 92;

      // Render dots from back to front for correct depth overlap
      for (let r = ROWS - 1; r >= 0; r--) {
        const z = r * spacingZ + cameraZ;
        const depthNorm = 1 - r / ROWS; // 1 = closest, 0 = furthest

        for (let c = 0; c < COLS; c++) {
          const x = (c - (COLS - 1) / 2) * spacingX;

          // Multi-harmonic sinusoidal wave for undulating ribbon landscape
          const waveFreqX = 0.082;
          const waveFreqZ = 0.125;

          // High wave amplitude (tall undulation with dramatic crests & troughs)
          let y =
            Math.sin(c * waveFreqX + time * 1.1) * 78 +
            Math.cos(r * waveFreqZ + time * 0.8) * 56 +
            Math.sin((c * 0.05 + r * 0.09) + time * 0.6) * 36;

          // 3D perspective projection
          const rotAngle = 0.35; // perspective tilt
          const cosA = Math.cos(rotAngle);
          const sinA = Math.sin(rotAngle);

          const yRot = (y - cameraY) * cosA - z * sinA;
          const zRot = (y - cameraY) * sinA + z * cosA + 520;

          if (zRot <= 10) continue;

          const scale = fov / zRot;
          const screenX = centerX + x * scale;
          const screenY = centerY + yRot * scale;

          // Skip if completely outside view
          if (
            screenX < -30 ||
            screenX > width + 30 ||
            screenY < -30 ||
            screenY > height + 30
          ) {
            continue;
          }

          // Cursor interactive influence - ONLY active around the cursor
          let cursorInfluence = 0;
          let extraRadius = 0;
          let rippleElevation = 0;

          if (mouse.activityLevel > 0.01 && mouse.x !== -9999) {
            const dx = screenX - mouse.x;
            const dy = screenY - mouse.y;
            const dist = Math.hypot(dx, dy);

            if (dist < cursorRadius) {
              const normDist = 1 - dist / cursorRadius;
              // Smooth bell curve
              cursorInfluence = normDist * normDist * mouse.activityLevel;

              // High-frequency dynamic ripple around active cursor
              const rippleWave = Math.sin(dist * 0.07 - time * 8);
              rippleElevation = rippleWave * 24 * cursorInfluence;
              extraRadius = cursorInfluence * 0.9;
            }
          }

          // Adjust projected Y based on interactive ripple
          const finalScreenY = screenY + rippleElevation * scale;

          // Natural border fade (soft vignette at canvas boundaries)
          const topFade = Math.min(1, Math.max(0, finalScreenY / (height * 0.12)));
          const bottomFade = Math.min(1, Math.max(0, (height - finalScreenY + 25) / (height * 0.07)));

          // Edge fading (soft vignette at left/right borders)
          const edgeFadeX = Math.min(
            1,
            Math.min(screenX / (width * 0.12), (width - screenX) / (width * 0.12))
          );
          const edgeFadeY = topFade * bottomFade;
          const edgeFade = Math.max(0, Math.min(edgeFadeX, edgeFadeY));

          // Opacity set to 25% (0.25) as requested
          const baseAlpha = 0.16 + depthNorm * 0.09 + cursorInfluence * 0.08;
          const finalAlpha = Math.min(0.25, Math.max(0, baseAlpha * edgeFade));

          if (finalAlpha <= 0.005) continue;

          // Crisp dot radius
          const dotRadius = Math.max(
            0.55,
            (0.65 + depthNorm * 0.95 + extraRadius) * (scale * 0.95)
          );

          ctx.beginPath();
          ctx.arc(screenX, finalScreenY, dotRadius, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${baseR}, ${baseG}, ${baseB}, ${finalAlpha})`;
          ctx.fill();
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrameId);
      resizeObserver.disconnect();
      hero.removeEventListener('pointermove', handlePointerMove);
      hero.removeEventListener('pointerleave', handlePointerLeave);
    };
  }, [isDark, heroRef]);

  return (
    <canvas
      ref={canvasRef}
      id="hero-dots-wave-canvas"
      aria-hidden="true"
      className="absolute inset-0 w-full h-full pointer-events-none z-0"
    />
  );
};
