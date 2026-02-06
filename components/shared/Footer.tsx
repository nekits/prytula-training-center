'use client';

import { useTranslations } from 'next-intl';

export default function Footer() {
  const t = useTranslations('footer');

  return (
    <footer className="bg-neutral-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Logo */}
          <div>
            <div className="font-heading text-xl font-bold text-primary mb-4">
              {t('contact')}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Навігація</h3>
            <nav className="flex flex-col gap-2">
              <a href="#about" className="hover:text-primary transition-colors">
                Про центр
              </a>
              <a href="#courses" className="hover:text-primary transition-colors">
                Курси
              </a>
              <a href="#partnerships" className="hover:text-primary transition-colors">
                Партнерство
              </a>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">{t('contact')}</h3>
            <p className="text-neutral-50">
              Placeholder для контактів
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-neutral-700 mt-8 pt-8 text-center text-neutral-50">
          {t('copyright')}
        </div>
      </div>
    </footer>
  );
}
