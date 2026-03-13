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
            <div className="relative w-full h-12 mb-4">
              <Image
                src="/branding/logo/nc-logo-bw.svg"
                alt="Training Center"
                fill
                className="object-contain object-left brightness-0 invert"
              />
            </div>
            <p className="text-sm leading-relaxed mb-6">
              {t('tagline')}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4 uppercase">{t('nav_title')}</h4>
            <nav className="flex flex-col gap-2">
              <a href="#about" className="text-sm hover:text-white transition-colors">{t('nav.about')}</a>
              <a href="#courses" className="text-sm hover:text-white transition-colors">{t('nav.courses')}</a>
              <a href="#partnerships" className="text-sm hover:text-white transition-colors">{t('nav.partnerships')}</a>
              <a href="#partnerships" className="text-sm hover:text-white transition-colors">{t('nav.support')}</a>
            </nav>
          </div>

          {/* Courses */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4 uppercase">{t('courses_title')}</h4>
            <nav className="flex flex-col gap-2">
              <a href="#track-uav" className="text-sm hover:text-white transition-colors">{t('course.uav')}</a>
            </nav>
          </div>

          {/* Contacts */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4 uppercase">{t('contact_title')}</h4>
            <div className="flex flex-col gap-2 text-sm">
              <a href="mailto:educational.centre@prytulafoundation.org" className="hover:text-white transition-colors">
                educational.centre@prytulafoundation.org
              </a>
              <a href="tel:+380505250566" className="hover:text-white transition-colors">
                {t('phone')} <span className="text-neutral-500">({t('phone_messengers')})</span>
              </a>
              <span>{t('address')}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright bar */}
      <div className="border-t border-neutral-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-neutral-500">{t('copyright')}</p>
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
