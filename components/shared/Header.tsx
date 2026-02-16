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
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const sectionIds = ['about', 'track-uav', 'track-tactical-medicine', 'partnerships'];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-40% 0px -50% 0px' }
    );
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
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
    { href: '#track-uav', label: t('nav.uav') },
    { href: '#track-tactical-medicine', label: t('nav.tactical_medicine') },
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
              {navItems.map((item) => {
                const isActive = activeSection === item.href.slice(1);
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    className={`relative px-4 py-2 text-sm font-medium transition-colors ${
                      isActive ? 'text-neutral-900' : 'text-neutral-400'
                    }`}
                  >
                    {item.label}
                  </a>
                );
              })}
            </nav>

            {/* Right side */}
            <div className="flex items-center gap-3">
              <LanguageSwitcher />
              <a
                href="#track-uav"
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
                  className={`px-4 py-3 text-lg font-medium rounded-xl transition-colors ${
                    activeSection === item.href.slice(1) ? 'text-neutral-900' : 'text-neutral-400'
                  }`}
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#track-uav"
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
