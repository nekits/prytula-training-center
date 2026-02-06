'use client';

import { useTranslations } from 'next-intl';

const advantages = [
  {
    id: 'ecosystem',
    icon: '🔗',
  },
  {
    id: 'full-cycle',
    icon: '🔄',
  },
  {
    id: 'expertise',
    icon: '🎯',
  },
  {
    id: 'results',
    icon: '📊',
  },
];

export default function SectionAdvantages() {
  const t = useTranslations('advantages');

  return (
    <section className="py-20 bg-neutral-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-heading font-bold text-neutral-900 mb-12 text-center">
          {t('title', { default: 'Наші переваги' })}
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {advantages.map((advantage) => (
            <div
              key={advantage.id}
              className="bg-white p-8 rounded-card border border-neutral-50 hover:shadow-lg transition-shadow"
            >
              <div className="text-5xl mb-4">{advantage.icon}</div>
              <h3 className="text-xl font-bold text-neutral-900 mb-3">
                {t(`${advantage.id}.title`, { default: advantage.id })}
              </h3>
              <p className="text-neutral-700">
                {t(`${advantage.id}.description`, {
                  default: 'Опис переваги',
                })}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
