'use client';

import { useTranslations } from 'next-intl';
import { Zap, BarChart3, Award, Mail } from 'lucide-react';
import ScrollReveal from '@/components/ui/ScrollReveal';

const benefits = [
  { id: 'impact', Icon: Zap },
  { id: 'transparency', Icon: BarChart3 },
  { id: 'recognition', Icon: Award },
];

export default function Partnerships() {
  const t = useTranslations('partnerships');

  return (
    <section id="partnerships" className="py-24 md:py-32 bg-neutral-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">
              {t('label')}
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mt-3">
              {t('title')}
            </h2>
            <p className="text-neutral-600 mt-4 text-lg max-w-2xl mx-auto">
              {t('description')}
            </p>
          </div>
        </ScrollReveal>

        {/* Benefit cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {benefits.map((item, index) => (
            <ScrollReveal key={item.id} delay={index * 0.1}>
              <div className="bg-white rounded-2xl border border-neutral-100 p-8 text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary-50 text-primary mb-6">
                  <item.Icon className="w-6 h-6" strokeWidth={1.5} />
                </div>
                <h3 className="text-lg font-bold text-neutral-900 mb-3">
                  {t(`benefits.${item.id}.title`)}
                </h3>
                <p className="text-neutral-600 text-sm leading-relaxed">
                  {t(`benefits.${item.id}.description`)}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Contact card */}
        <ScrollReveal delay={0.3}>
          <div className="bg-white rounded-2xl border border-neutral-100 p-8 md:p-10 max-w-xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-neutral-900 text-white mb-6">
              <Mail className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-bold text-neutral-900 mb-2">
              {t('contact.title')}
            </h3>
            <a
              href="mailto:training@prytulafoundation.org"
              className="text-primary hover:text-primary-700 text-lg font-medium transition-colors"
            >
              training@prytulafoundation.org
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
