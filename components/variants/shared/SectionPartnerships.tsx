'use client';

import { useTranslations } from 'next-intl';

export default function SectionPartnerships() {
  const t = useTranslations('partnerships');

  return (
    <section id="partnerships" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-heading font-bold text-neutral-900 mb-8 text-center">
          {t('title', { default: 'Партнерство' })}
        </h2>

        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xl text-neutral-700 mb-8">
            {t('description', {
              default:
                'Ми відкриті до співпраці з організаціями та компаніями, які поділяють нашу місію підтримки захисників України.',
            })}
          </p>

          <div className="bg-neutral-50 p-8 rounded-card">
            <h3 className="text-2xl font-bold text-neutral-900 mb-4">
              {t('contact.title', { default: 'Контакти для партнерства' })}
            </h3>

            <div className="space-y-3 text-lg text-neutral-700">
              <p>
                <span className="font-semibold">Email:</span>{' '}
                partnerships@prytulafoundation.org
              </p>
              <p>
                <span className="font-semibold">
                  {t('contact.phone', { default: 'Телефон' })}:
                </span>{' '}
                +380 XX XXX XX XX
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
