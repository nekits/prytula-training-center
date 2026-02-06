'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';

export default function SectionRegistration() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const t = useTranslations('registration');

  return (
    <>
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
            {t('title', { default: 'Готові розпочати навчання?' })}
          </h2>

          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            {t('subtitle', {
              default:
                'Заповніть заявку та наша команда зв\'яжеться з вами найближчим часом.',
            })}
          </p>

          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-white text-primary px-8 py-4 rounded-full text-lg font-semibold hover:bg-neutral-50 transition-colors shadow-lg"
          >
            {t('cta', { default: 'Подати заявку' })}
          </button>
        </div>
      </section>

      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="bg-white rounded-card p-8 max-w-2xl w-full max-h-[90vh] overflow-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-start mb-6">
              <h3 className="text-2xl font-bold text-neutral-900">
                {t('modal.title', { default: 'Реєстрація на курс' })}
              </h3>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-neutral-600 hover:text-neutral-900 text-3xl leading-none"
              >
                ×
              </button>
            </div>

            {/* Google Forms iframe placeholder */}
            <div className="bg-neutral-50 rounded p-8 text-center text-neutral-600">
              <p>
                {t('modal.placeholder', {
                  default: 'Тут буде вбудована Google Form',
                })}
              </p>
              <p className="text-sm mt-2">
                iframe з Google Forms буде додано пізніше
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
