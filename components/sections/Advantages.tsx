'use client';

import { useTranslations } from 'next-intl';
import { Link2, Repeat, Target, TrendingUp } from 'lucide-react';
import ScrollReveal from '@/components/ui/ScrollReveal';

const advantages = [
  { id: 'ecosystem', Icon: Link2 },
  { id: 'full-cycle', Icon: Repeat },
  { id: 'expertise', Icon: Target },
  { id: 'results', Icon: TrendingUp },
];

export default function Advantages() {
  const t = useTranslations('advantages');

  return (
    <section className="py-24 md:py-32 bg-neutral-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">
              {t('label')}
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mt-3">
              {t('title')}
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-6">
          {advantages.map((item, index) => (
            <ScrollReveal key={item.id} delay={index * 0.1}>
              <div className="group relative bg-white rounded-2xl border border-neutral-100 p-8 transition-all duration-300 hover:shadow-xl hover:shadow-primary/8 hover:-translate-y-1 hover:border-primary/20">
                {/* Icon */}
                <div className="mb-6 inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-primary-50 to-primary-100 text-primary group-hover:scale-110 transition-transform duration-300">
                  <item.Icon className="w-6 h-6" strokeWidth={1.5} />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-neutral-900 mb-3">
                  {t(`${item.id}.title`)}
                </h3>
                <p className="text-neutral-600 leading-relaxed">
                  {t(`${item.id}.description`)}
                </p>

                {/* Hover accent line */}
                <div className="absolute bottom-0 left-8 right-8 h-0.5 bg-gradient-to-r from-primary to-primary-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full" />
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
