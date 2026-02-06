'use client';

import { useTranslations } from 'next-intl';
import { Heart } from 'lucide-react';
import ScrollReveal from '@/components/ui/ScrollReveal';

export default function Donate() {
  const t = useTranslations('donate');

  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <ScrollReveal>
          <div className="relative bg-gradient-to-br from-neutral-50 to-white rounded-3xl border border-neutral-100 p-10 md:p-14 text-center overflow-hidden">
            {/* Decorative heart */}
            <div className="absolute -top-6 -right-6 w-32 h-32 text-red-100">
              <Heart className="w-full h-full" fill="currentColor" strokeWidth={0} />
            </div>

            <div className="relative z-10">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-red-50 text-red-500 mb-8">
                <Heart className="w-8 h-8" strokeWidth={1.5} />
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
                {t('title')}
              </h2>

              <p className="text-lg text-neutral-600 mb-8 max-w-xl mx-auto leading-relaxed">
                {t('description')}
              </p>

              <a
                href="https://prytulafoundation.org/donate"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-neutral-900 text-white rounded-full text-lg font-semibold hover:bg-neutral-800 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
              >
                {t('cta')}
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
