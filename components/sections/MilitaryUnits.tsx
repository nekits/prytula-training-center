'use client';

import { useTranslations } from 'next-intl';
import { Shield } from 'lucide-react';
import ScrollReveal from '@/components/ui/ScrollReveal';

export default function MilitaryUnits() {
  const t = useTranslations('military_units');

  return (
    <section className="py-24 md:py-32 bg-neutral-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <ScrollReveal>
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-neutral-900 text-white mb-8">
              <Shield className="w-10 h-10" strokeWidth={1.5} />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
              {t('title')}
            </h2>
            <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
              {t('subtitle')}
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
