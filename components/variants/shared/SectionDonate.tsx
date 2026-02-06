'use client';

import { useTranslations } from 'next-intl';

export default function SectionDonate() {
  const t = useTranslations('donate');

  return (
    <section className="py-20 bg-neutral-50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-heading font-bold text-neutral-900 mb-6">
          {t('title', { default: 'Підтримати навчальний центр' })}
        </h2>

        <p className="text-xl text-neutral-700 mb-8 max-w-2xl mx-auto">
          {t('description', {
            default:
              'Ваша підтримка допомагає навчати захисників України.',
          })}
        </p>

        <div className="bg-white p-8 rounded-card border border-neutral-50 max-w-md mx-auto">
          <p className="text-neutral-600">
            {t('placeholder', {
              default:
                'Phase 2: Посилання на сторінку донатів Фонду Притули',
            })}
          </p>
        </div>
      </div>
    </section>
  );
}
