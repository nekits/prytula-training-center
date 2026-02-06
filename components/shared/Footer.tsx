'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { Instagram, Facebook, Youtube, Twitter } from 'lucide-react';

const socialLinks = [
  { href: 'https://www.instagram.com/prytulafoundation/', icon: Instagram, label: 'Instagram' },
  { href: 'https://www.facebook.com/FundSerhiyPrytula/', icon: Facebook, label: 'Facebook' },
  { href: 'https://www.youtube.com/@prytulafoundation', icon: Youtube, label: 'YouTube' },
  { href: 'https://x.com/praborona', icon: Twitter, label: 'X' },
];

export default function Footer() {
  const t = useTranslations('footer');

  return (
    <footer className="bg-neutral-950 text-neutral-400">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand + social */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="relative w-8 h-8">
                <Image
                  src="/branding/logo/nc-logo.png"
                  alt="Training Center"
                  fill
                  className="object-contain brightness-200"
                />
              </div>
              <span className="font-bold text-white text-sm">{t('brand')}</span>
            </div>
            <p className="text-sm leading-relaxed mb-6">
              {t('tagline')}
            </p>
            <div className="flex items-center gap-2">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="inline-flex items-center justify-center w-9 h-9 rounded-full border border-neutral-700 text-neutral-400 hover:border-white hover:text-white transition-colors"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">{t('nav_title')}</h4>
            <nav className="flex flex-col gap-2">
              <a href="#about" className="text-sm hover:text-white transition-colors">{t('nav.about')}</a>
              <a href="#courses" className="text-sm hover:text-white transition-colors">{t('nav.courses')}</a>
              <a href="#partnerships" className="text-sm hover:text-white transition-colors">{t('nav.partnerships')}</a>
              <a href="#registration" className="text-sm hover:text-white transition-colors">{t('nav.support')}</a>
            </nav>
          </div>

          {/* Courses */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">{t('courses_title')}</h4>
            <nav className="flex flex-col gap-2">
              <a href="#track-uav" className="text-sm hover:text-white transition-colors">{t('course.uav')}</a>
              <a href="#track-tactical-medicine" className="text-sm hover:text-white transition-colors">{t('course.medicine')}</a>
            </nav>
          </div>

          {/* Contacts */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">{t('contact_title')}</h4>
            <div className="flex flex-col gap-2 text-sm">
              <a href="mailto:training@prytulafoundation.org" className="hover:text-white transition-colors">
                training@prytulafoundation.org
              </a>
              <span>{t('address')}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright bar */}
      <div className="border-t border-neutral-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-3">
            <div className="relative w-6 h-6">
              <Image
                src="/branding/logo/nc-logo.png"
                alt="Training Center"
                fill
                className="object-contain brightness-200"
              />
            </div>
            <p className="text-xs text-neutral-500">{t('copyright')}</p>
          </div>
          <a
            href="https://prytulafoundation.org"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-neutral-500 hover:text-white transition-colors"
          >
            prytulafoundation.org
          </a>
        </div>
      </div>
    </footer>
  );
}
