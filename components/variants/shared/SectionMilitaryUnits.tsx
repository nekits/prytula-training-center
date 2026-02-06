'use client';

import { useTranslations } from 'next-intl';

// Placeholder для логотипів підрозділів
const militaryUnits = [
  { id: '1', name: 'Підрозділ 1' },
  { id: '2', name: 'Підрозділ 2' },
  { id: '3', name: 'Підрозділ 3' },
  { id: '4', name: 'Підрозділ 4' },
  { id: '5', name: 'Підрозділ 5' },
  { id: '6', name: 'Підрозділ 6' },
];

export default function SectionMilitaryUnits() {
  const t = useTranslations('military_units');

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-heading font-bold text-neutral-900 mb-12 text-center">
          {t('title', { default: 'Підрозділи, які ми підготували' })}
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {militaryUnits.map((unit) => (
            <div
              key={unit.id}
              className="aspect-square bg-neutral-50 rounded-card flex items-center justify-center grayscale hover:grayscale-0 transition-all cursor-pointer"
            >
              {/* Placeholder для логотипу */}
              <div className="text-4xl font-bold text-neutral-400">
                {unit.name[0]}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
