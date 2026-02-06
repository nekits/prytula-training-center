'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';

export default function Footer() {
  const t = useTranslations('footer');

  return (
    <footer className="bg-neutral-950 text-neutral-400">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
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
            <p className="text-sm leading-relaxed">
              {t('tagline')}
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm mb-4">{t('nav_title')}</h4>
            <nav className="flex flex-col gap-2">
              <a href="#about" className="text-sm hover:text-white transition-colors">{t('nav.about')}</a>
              <a href="#courses" className="text-sm hover:text-white transition-colors">{t('nav.courses')}</a>
              <a href="#partnerships" className="text-sm hover:text-white transition-colors">{t('nav.partnerships')}</a>
              <a href="#registration" className="text-sm hover:text-white transition-colors">{t('nav.support')}</a>
            </nav>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm mb-4">{t('courses_title')}</h4>
            <nav className="flex flex-col gap-2">
              <a href="#track-uav" className="text-sm hover:text-white transition-colors">{t('course.uav')}</a>
              <a href="#track-tactical-medicine" className="text-sm hover:text-white transition-colors">{t('course.medicine')}</a>
            </nav>
          </div>

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
