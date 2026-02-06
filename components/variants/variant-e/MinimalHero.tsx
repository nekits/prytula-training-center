'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

export default function MinimalHero() {
  const t = useTranslations('hero');

  return (
    <section className="min-h-screen flex items-center justify-center bg-white pt-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-center space-y-12"
        >
          <h1 className="text-6xl md:text-8xl font-heading font-bold text-neutral-900 leading-tight">
            {t('title', { default: 'Навчальний центр Фонду Притули' })}
          </h1>

          <p className="text-2xl md:text-3xl text-neutral-600 font-light">
            {t('subtitle', {
              default: 'Професійна підготовка для захисників України',
            })}
          </p>

          <div className="pt-8">
            <button className="bg-neutral-900 text-white px-12 py-5 rounded-full text-lg font-medium hover:bg-neutral-800 transition-colors">
              {t('cta', { default: 'Подати заявку' })}
            </button>
          </div>

          {/* Minimal divider */}
          <div className="pt-20">
            <div className="w-24 h-px bg-neutral-300 mx-auto" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
