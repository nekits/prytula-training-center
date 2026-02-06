'use client';

import { useTranslations } from 'next-intl';
import LanguageSwitcher from './LanguageSwitcher';

export default function Header() {
  const t = useTranslations('header');

  return (
    <header className="fixed top-0 w-full bg-white/90 backdrop-blur-sm border-b border-neutral-50 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="font-heading text-xl font-bold text-primary">
          {t('logo')}
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex gap-8">
          <a href="#about" className="text-neutral-900 hover:text-primary transition-colors">
            {t('nav.about')}
          </a>
          <a href="#courses" className="text-neutral-900 hover:text-primary transition-colors">
            {t('nav.courses')}
          </a>
          <a href="#partnerships" className="text-neutral-900 hover:text-primary transition-colors">
            {t('nav.partnerships')}
          </a>
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-4">
          <LanguageSwitcher />
          <button className="bg-primary text-white px-6 py-2 rounded-full hover:bg-primary-700 transition-colors">
            {t('cta')}
          </button>
        </div>
      </div>
    </header>
  );
}
