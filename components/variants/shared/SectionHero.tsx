'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

export default function SectionHero() {
  const t = useTranslations('hero');

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 to-white pt-20">
      <div className="container mx-auto px-4 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-7xl font-heading font-bold text-neutral-900 mb-6"
        >
          {t('title', { default: 'Навчальний центр Фонду Притули' })}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl md:text-2xl text-neutral-700 mb-8 max-w-3xl mx-auto"
        >
          {t('subtitle', { default: 'Професійна підготовка для захисників України' })}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <button className="bg-primary text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-primary-700 transition-colors shadow-lg">
            {t('cta', { default: 'Подати заявку' })}
          </button>
        </motion.div>
      </div>
    </section>
  );
}
