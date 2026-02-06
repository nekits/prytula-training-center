'use client';

import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export default function Card({ children, className = '', hover = true }: CardProps) {
  return (
    <div
      className={cn(
        'relative bg-white rounded-2xl border border-neutral-100 shadow-sm overflow-hidden',
        hover && 'transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1 hover:border-primary/20',
        className
      )}
    >
      {children}
    </div>
  );
}
