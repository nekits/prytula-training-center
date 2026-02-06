'use client';

import { useTranslations } from 'next-intl';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import LanguageSwitcher from './LanguageSwitcher';

export default function Header() {
  const t = useTranslations('header');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`
        fixed top-0 w-full z-50 transition-all duration-300
        ${scrolled
          ? 'bg-white/95 backdrop-blur-xl shadow-lg shadow-neutral-900/5 border-b border-neutral-100'
          : 'bg-white/80 backdrop-blur-md border-b border-neutral-50'
        }
      `}
    >
      <div className="container mx-auto px-4 lg:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo with image */}
          <a href="#top" className="flex items-center gap-3 group">
            <div className="relative w-12 h-12 transition-transform group-hover:scale-105">
              <Image
                src="/branding/logo/nc-logo.png"
                alt="Training Center"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="hidden sm:block">
              <div className="font-heading font-bold text-lg leading-tight bg-gradient-to-r from-neutral-900 to-neutral-700 bg-clip-text text-transparent">
                {t('logo', { default: 'Навчальний центр' })}
              </div>
              <div className="text-xs text-neutral-500 font-medium">
                {t('logo_sub', { default: 'Фонд Притули' })}
              </div>
            </div>
          </a>

          {/* Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {[
              { href: '#about', label: t('nav.about', { default: 'Про нас' }) },
              { href: '#courses', label: t('nav.courses', { default: 'Курси' }) },
              { href: '#achievements', label: t('nav.achievements', { default: 'Досягнення' }) },
              { href: '#partnerships', label: t('nav.partnerships', { default: 'Партнерство' }) },
            ].map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="group relative px-4 py-2 text-sm font-medium text-neutral-700 hover:text-primary transition-colors"
              >
                {item.label}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-primary to-accent-orange group-hover:w-3/4 transition-all duration-300 rounded-full" />
              </a>
            ))}
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-3">
            <LanguageSwitcher />
            <button className="group relative px-6 py-2.5 bg-primary text-white rounded-full text-sm font-semibold overflow-hidden transition-all hover:shadow-lg hover:shadow-primary/30 hover:-translate-y-0.5">
              {/* Shimmer effect */}
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
              <span className="relative">{t('cta', { default: 'Подати заявку' })}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Subtle shadow line */}
      <div className={`h-px bg-gradient-to-r from-transparent via-primary/10 to-transparent transition-opacity duration-300 ${scrolled ? 'opacity-100' : 'opacity-0'}`} />
    </header>
  );
}
