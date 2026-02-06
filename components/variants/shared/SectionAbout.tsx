'use client';

import { useTranslations } from 'next-intl';

export default function SectionAbout() {
  const t = useTranslations('about');

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-heading font-bold text-neutral-900 mb-8 text-center">
          {t('title', { default: 'Про навчальний центр' })}
        </h2>

        <div className="max-w-4xl mx-auto space-y-6 text-lg text-neutral-700">
          <p>
            {t('paragraph1', {
              default:
                'Навчальний центр Фонду Притули - це сучасна освітня платформа для підготовки військовослужбовців ЗСУ.',
            })}
          </p>
          <p>
            {t('paragraph2', {
              default:
                'Ми надаємо якісне навчання з використанням найсучаснішого обладнання та методик.',
            })}
          </p>
          <p>
            {t('paragraph3', {
              default:
                'Наша місія - забезпечити захисників України знаннями та навичками для перемоги.',
            })}
          </p>
        </div>
      </div>
    </section>
  );
}
