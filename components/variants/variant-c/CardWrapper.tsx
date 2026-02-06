'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface CardWrapperProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  delay?: number;
}

export default function CardWrapper({
  children,
  className = '',
  hover = true,
  delay = 0
}: CardWrapperProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        duration: 0.6,
        delay,
        ease: [0.16, 1, 0.3, 1]
      }}
      className={`
        group relative bg-white rounded-2xl
        border border-neutral-100/50
        shadow-[0_2px_8px_rgba(0,0,0,0.04),0_1px_2px_rgba(0,0,0,0.06)]
        overflow-hidden
        ${hover ? 'hover:shadow-[0_8px_30px_rgba(78,81,255,0.12),0_2px_8px_rgba(0,0,0,0.08)] hover:-translate-y-1 hover:border-primary/20 transition-all duration-300' : ''}
        ${className}
      `}
    >
      {/* Subtle gradient overlay on hover */}
      {hover && (
        <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-transparent to-accent-orange/0 group-hover:from-primary/[0.02] group-hover:to-accent-orange/[0.01] transition-all duration-500 pointer-events-none" />
      )}

      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Content */}
      <div className="relative">
        {children}
      </div>
    </motion.div>
  );
}
