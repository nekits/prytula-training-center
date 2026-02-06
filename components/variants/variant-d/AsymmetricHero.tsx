'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

export default function AsymmetricHero() {
  const t = useTranslations('hero');

  return (
    <section className="min-h-screen relative overflow-hidden pt-16">
      {/* Background shapes */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-accent-orange/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid grid-cols-12 gap-8 items-center">
          {/* Main content - asymmetric positioning */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="col-span-12 md:col-span-7 lg:col-span-6"
          >
            <h1 className="text-5xl md:text-7xl font-heading font-bold text-neutral-900 mb-6 leading-tight">
              {t('title', { default: 'Навчальний центр Фонду Притули' })}
            </h1>

            <p className="text-xl md:text-2xl text-neutral-700 mb-8">
              {t('subtitle', {
                default: 'Професійна підготовка для захисників України',
              })}
            </p>

            <button className="bg-primary text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-primary-700 transition-colors shadow-lg">
              {t('cta', { default: 'Подати заявку' })}
            </button>
          </motion.div>

          {/* Overlapping visual element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="col-span-12 md:col-span-5 lg:col-span-6 relative"
          >
            <div className="aspect-square bg-gradient-to-br from-primary to-accent-orange rounded-card shadow-2xl transform md:translate-x-8 md:-translate-y-8 flex items-center justify-center">
              <div className="text-white text-center p-8">
                <div className="text-7xl mb-4">🚁</div>
                <p className="text-3xl font-bold">150+</p>
                <p className="text-lg opacity-90">підготовлених пілотів</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
