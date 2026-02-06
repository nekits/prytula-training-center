'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { ArrowRight } from 'lucide-react';
import ScrollReveal from '@/components/ui/ScrollReveal';

export default function Registration() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const t = useTranslations('registration');

  return (
    <>
      <section id="registration" className="relative py-24 md:py-32 bg-gradient-to-br from-primary via-primary-600 to-primary-700 text-white overflow-hidden">
        {/* Decorative circles */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-white/5 rounded-full" />

        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <ScrollReveal>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              {t('title')}
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
              {t('subtitle')}
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <button
              onClick={() => setIsModalOpen(true)}
              className="group inline-flex items-center gap-3 px-10 py-5 bg-white text-primary rounded-full text-lg font-bold hover:bg-neutral-50 transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1"
            >
              {t('cta')}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </ScrollReveal>
        </div>
      </section>

      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="bg-white rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-auto shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-start mb-6">
              <h3 className="text-2xl font-bold text-neutral-900">
                {t('modal.title')}
              </h3>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-neutral-400 hover:text-neutral-900 text-2xl leading-none p-1 transition-colors"
              >
                &times;
              </button>
            </div>
            <div className="bg-neutral-50 rounded-xl p-12 text-center text-neutral-500">
              <p className="text-lg">{t('modal.placeholder')}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
