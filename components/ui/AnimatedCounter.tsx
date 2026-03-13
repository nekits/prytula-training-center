'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import { useMotionValue, useTransform, animate } from 'framer-motion';

interface AnimatedCounterProps {
  value: number;
  suffix?: string;
  className?: string;
  delay?: number;
}

export default function AnimatedCounter({ value, suffix = '', className = '', delay = 0.1 }: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(value);
  const rounded = useTransform(motionValue, (v) => Math.round(v));
  const [display, setDisplay] = useState(String(value));
  const hasAnimated = useRef(false);

  const startAnimation = useCallback(() => {
    if (hasAnimated.current) return;
    hasAnimated.current = true;
    setDisplay('0');
    motionValue.set(0);

    setTimeout(() => {
      animate(motionValue, value, {
        duration: 2.5,
        ease: 'easeOut',
      });
    }, delay * 1000);
  }, [motionValue, value, delay]);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          startAnimation();
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [startAnimation]);

  useEffect(() => {
    const unsubscribe = rounded.on('change', (v) => {
      setDisplay(String(v));
    });
    return unsubscribe;
  }, [rounded]);

  return (
    <span ref={ref} className={className}>
      {display}{suffix}
    </span>
  );
}
