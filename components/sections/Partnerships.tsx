'use client';

import { useTranslations } from 'next-intl';
import { Mail, Heart } from 'lucide-react';
import ScrollReveal from '@/components/ui/ScrollReveal';


export default function Partnerships() {
  const t = useTranslations('partnerships');
  const tDonate = useTranslations('donate');

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

        {/* Contact + Donate cards */}
        <div className="grid md:grid-cols-2 gap-6">
          <ScrollReveal delay={0.3}>
            <div className="bg-white rounded-2xl border border-neutral-100 p-8 md:p-10 text-center h-full">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-neutral-900 text-white mb-6">
                <Mail className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-neutral-900 mb-2">
                {t('contact.title')}
              </h3>
              <a
                href="mailto:educational.centre@prytulafoundation.org"
                className="text-primary hover:text-primary-700 text-lg font-medium transition-colors"
              >
                educational.centre@prytulafoundation.org
              </a>
              <div className="mt-3">
                <a
                  href="tel:+380505250566"
                  className="text-neutral-600 hover:text-primary text-sm transition-colors"
                >
                  +380 (50) 525 05 66
                </a>
                <span className="text-neutral-400 text-sm ml-2">(Signal, WhatsApp)</span>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.4}>
            <div className="bg-white rounded-2xl border border-neutral-100 p-8 md:p-10 text-center h-full">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-red-50 text-red-500 mb-6">
                <Heart className="w-5 h-5" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold text-neutral-900 mb-2">
                {tDonate('title')}
              </h3>
              <p className="text-neutral-600 text-sm leading-relaxed mb-6">
                {tDonate('description')}
              </p>
              <a
                href="https://prytulafoundation.org/donation"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-neutral-900 text-white rounded-full text-sm font-semibold hover:bg-neutral-800 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
              >
                {tDonate('cta')}
              </a>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
