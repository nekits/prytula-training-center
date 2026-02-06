'use client';

import { useEffect } from 'react';

export default function SmoothScroll() {
  useEffect(() => {
    let lenis: any;

    const init = async () => {
      try {
        const Lenis = (await import('lenis')).default;
        lenis = new Lenis({
          duration: 1.2,
          easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          touchMultiplier: 2,
        });

        function raf(time: number) {
          lenis.raf(time);
          requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);
      } catch {
        // Lenis not available, fall back to native scroll
      }
    };

    init();

    return () => {
      lenis?.destroy();
    };
  }, []);

  return null;
}
