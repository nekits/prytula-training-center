'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import CardWrapper from './CardWrapper';

export default function HeroCard() {
  const t = useTranslations('hero');

  return (
    <CardWrapper className="text-center p-12 md:p-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl md:text-6xl font-heading font-bold text-neutral-900 mb-6">
          {t('title', { default: 'Навчальний центр Фонду Притули' })}
        </h1>

        <p className="text-xl md:text-2xl text-neutral-700 mb-8 max-w-3xl mx-auto">
          {t('subtitle', {
            default: 'Професійна підготовка для захисників України',
          })}
        </p>

        <button className="bg-primary text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-primary-700 transition-colors shadow-lg">
          {t('cta', { default: 'Подати заявку' })}
        </button>
      </motion.div>
    </CardWrapper>
  );
}
