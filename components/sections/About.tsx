'use client';

import { useTranslations } from 'next-intl';
import ScrollReveal from '@/components/ui/ScrollReveal';

export default function About() {
  const t = useTranslations('about');

  return (
    <section id="about" className="py-24 md:py-32 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <ScrollReveal>
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-1 bg-gradient-to-r from-primary to-primary-400 rounded-full" />
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">
              {t('label')}
            </span>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 mb-12 leading-tight">
            {t('title')}
          </h2>
        </ScrollReveal>

        <div className="space-y-6 text-lg md:text-xl text-neutral-600 leading-relaxed">
          <ScrollReveal delay={0.2}>
            <p>{t('paragraph1')}</p>
          </ScrollReveal>
          <ScrollReveal delay={0.3}>
            <p>{t('paragraph2')}</p>
          </ScrollReveal>
          <ScrollReveal delay={0.4}>
            <p>{t('paragraph3')}</p>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
