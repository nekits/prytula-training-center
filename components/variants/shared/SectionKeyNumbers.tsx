'use client';

import { useLocale } from 'next-intl';
import keyNumbersData from '@/lib/data/key-numbers.json';

export default function SectionKeyNumbers() {
  const locale = useLocale();

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12">
          {keyNumbersData.numbers.map((item) => (
            <div key={item.id} className="text-center">
              <div className="text-6xl md:text-7xl font-heading font-bold text-primary mb-4">
                {item.value}
              </div>
              <p className="text-xl text-neutral-700">
                {locale === 'uk' ? item.label_uk : item.label_en}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
