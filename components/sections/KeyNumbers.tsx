'use client';

import { useLocale } from 'next-intl';
import { useTranslations } from 'next-intl';
import ScrollReveal from '@/components/ui/ScrollReveal';
import AnimatedCounter from '@/components/ui/AnimatedCounter';
import keyNumbersData from '@/lib/data/key-numbers.json';

type KeyNumbersProps = {
  track: 'uav' | 'tactical-medicine';
};

export default function KeyNumbers({ track }: KeyNumbersProps) {
  const locale = useLocale();
  const t = useTranslations('key_numbers');
  const numbers = keyNumbersData.numbers.filter((item) => item.track === track);

  return (
    <section id={track === 'uav' ? 'achievements' : undefined} className="relative py-24 md:py-32 bg-neutral-900 text-white overflow-hidden noise-texture">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary-400/8 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-primary-300 uppercase tracking-wider">
              {t('label')}
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mt-3">
              {t('title')}
            </h2>
          </div>
        </ScrollReveal>

        <div className={`grid md:grid-cols-3 gap-8 md:gap-0 md:divide-x md:divide-neutral-700`}>
          {numbers.map((item, index) => (
            <ScrollReveal key={item.id} delay={index * 0.15}>
              <div className="text-center px-8">
                <div className="text-6xl md:text-7xl font-bold bg-gradient-to-br from-primary-300 via-primary-400 to-primary-500 bg-clip-text text-transparent mb-4">
                  <AnimatedCounter value={item.numericValue} suffix={item.suffix} />
                </div>
                <p className="text-neutral-400 text-lg">
                  {locale === 'uk' ? item.label_uk : item.label_en}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
