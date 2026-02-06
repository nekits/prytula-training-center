'use client';

import { ReactNode } from 'react';

interface CardWrapperProps {
  children: ReactNode;
  className?: string;
}

export default function CardWrapper({ children, className = '' }: CardWrapperProps) {
  return (
    <div className={`bg-white rounded-card border border-neutral-50 shadow-md overflow-hidden ${className}`}>
      {children}
    </div>
  );
}
