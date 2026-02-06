'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import ScrollReveal from '@/components/ui/ScrollReveal';

export default function About() {
  const t = useTranslations('about');

  return (
    <section id="about" className="py-24 md:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <div>
            <ScrollReveal>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-1 bg-gradient-to-r from-primary to-primary-400 rounded-full" />
                <span className="text-sm font-semibold text-primary uppercase tracking-wider">
                  {t('label')}
                </span>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-12 leading-tight">
                {t('title')}
              </h2>
            </ScrollReveal>

            <div className="space-y-6 text-lg text-neutral-600 leading-relaxed">
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

          {/* Photo */}
          <ScrollReveal delay={0.2}>
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/photos/graduation.jpg"
                alt="Graduation ceremony"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
