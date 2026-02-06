'use client';

import { useTranslations } from 'next-intl';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Menu, X, ArrowRight } from 'lucide-react';
import LanguageSwitcher from './LanguageSwitcher';

export default function Header() {
  const t = useTranslations('header');
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const navItems = [
    { href: '#about', label: t('nav.about') },
    { href: '#courses', label: t('nav.courses') },
    { href: '#achievements', label: t('nav.achievements') },
    { href: '#partnerships', label: t('nav.partnerships') },
  ];

  return (
    <>
      <header
        className={`
          fixed top-0 w-full z-50 transition-all duration-300
          ${scrolled
            ? 'bg-white shadow-lg shadow-neutral-900/5 border-b border-neutral-100'
            : 'bg-white'
          }
        `}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <a href="#" className="group">
              <div className="relative h-10 w-10 transition-transform group-hover:scale-105">
                <Image
                  src="/branding/logo/prytula-logo.svg"
                  alt="Навчальний центр Фонду Притули"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </a>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="relative px-4 py-2 text-sm font-medium text-neutral-600 hover:text-neutral-900 transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            {/* Right side */}
            <div className="flex items-center gap-3">
              <LanguageSwitcher />
              <a
                href="https://prytulafoundation.org"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden lg:inline-flex items-center h-10 px-5 bg-[#f3f4fc] text-neutral-700 rounded-full text-sm font-medium hover:text-neutral-900 transition-colors"
              >
                {t('foundation_button')}
              </a>
              <a
                href="#registration"
                className="hidden sm:inline-flex items-center gap-2 h-10 px-6 bg-primary text-white rounded-full text-sm font-semibold hover:bg-primary-600 transition-colors"
              >
                {t('cta')}
                <ArrowRight className="w-4 h-4" />
              </a>
              {/* Mobile hamburger */}
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="lg:hidden p-2 text-neutral-700 hover:text-neutral-900 transition-colors"
                aria-label="Toggle menu"
              >
                {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile menu overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div className="absolute inset-0 bg-black/20 backdrop-blur-sm" onClick={() => setMobileOpen(false)} />
          <div className="absolute top-20 right-0 left-0 bg-white border-b border-neutral-100 shadow-xl p-6">
            <nav className="flex flex-col gap-2">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="px-4 py-3 text-lg font-medium text-neutral-700 hover:text-primary hover:bg-primary-50 rounded-xl transition-colors"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="https://prytulafoundation.org"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileOpen(false)}
                className="mt-4 flex items-center justify-center px-6 py-3 bg-[#f3f4fc] text-neutral-700 rounded-full text-center font-medium hover:text-neutral-900 transition-colors"
              >
                {t('foundation_button')}
              </a>
              <a
                href="#registration"
                onClick={() => setMobileOpen(false)}
                className="flex items-center justify-center gap-2 px-6 py-3 bg-primary text-white rounded-full text-center font-semibold hover:bg-primary-600 transition-colors"
              >
                {t('cta')}
                <ArrowRight className="w-4 h-4" />
              </a>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
