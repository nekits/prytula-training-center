'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

export default function HeroSplitScreen() {
  const t = useTranslations('hero');

  return (
    <section className="min-h-screen flex pt-16">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        {/* Left side - Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-1/2 pr-0 md:pr-12 mb-8 md:mb-0"
        >
          <h1 className="text-4xl md:text-6xl font-heading font-bold text-neutral-900 mb-6">
            {t('title', { default: 'Навчальний центр Фонду Притули' })}
          </h1>

          <p className="text-lg md:text-xl text-neutral-700 mb-8">
            {t('subtitle', {
              default: 'Професійна підготовка для захисників України',
            })}
          </p>

          <button className="bg-primary text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-primary-700 transition-colors shadow-lg">
            {t('cta', { default: 'Подати заявку' })}
          </button>
        </motion.div>

        {/* Right side - Visual placeholder */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full md:w-1/2"
        >
          <div className="aspect-square bg-gradient-to-br from-primary to-primary-700 rounded-card flex items-center justify-center">
            <div className="text-white text-center p-8">
              <div className="text-6xl mb-4">🎯</div>
              <p className="text-2xl font-bold">Професійне навчання</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
