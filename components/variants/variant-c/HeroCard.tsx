'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import CardWrapper from './CardWrapper';

export default function HeroCard() {
  const t = useTranslations('hero');

  return (
    <CardWrapper className="relative overflow-hidden bg-gradient-to-br from-white via-primary-50/30 to-white">
      {/* Background pattern - subtle tactical grid */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(to right, #4e51ff 1px, transparent 1px),
            linear-gradient(to bottom, #4e51ff 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }} />
      </div>

      {/* Gradient accent - top right */}
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent-orange/5 rounded-full blur-3xl" />

      <div className="relative text-center px-8 py-16 md:px-20 md:py-24">
        {/* Logo with sophisticated entrance */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: -20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12 flex justify-center"
        >
          <div className="relative">
            {/* Logo glow effect */}
            <div className="absolute inset-0 bg-primary/20 blur-2xl rounded-full scale-110" />
            <Image
              src="/branding/logo/nc-logo.png"
              alt="Training Center Logo"
              width={140}
              height={140}
              className="relative drop-shadow-2xl"
              priority
            />
          </div>
        </motion.div>

        {/* Title with staggered reveal */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold mb-8 leading-[1.1]">
            <span className="bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 bg-clip-text text-transparent">
              {t('title', { default: 'Навчальний центр' })}
            </span>
            <br />
            <span className="bg-gradient-to-r from-primary via-primary-600 to-primary-700 bg-clip-text text-transparent">
              {t('subtitle_brand', { default: 'Фонду Притули' })}
            </span>
          </h1>
        </motion.div>

        {/* Subtitle with delay */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-xl md:text-2xl lg:text-3xl text-neutral-600 mb-12 max-w-4xl mx-auto font-light leading-relaxed"
        >
          {t('subtitle', {
            default: 'Професійна підготовка для захисників України',
          })}
        </motion.p>

        {/* CTA with magnetic hover effect */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <button className="group relative px-10 py-5 bg-primary text-white rounded-full text-lg font-semibold overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-primary/30 hover:-translate-y-1">
            {/* Animated background gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary-600 via-primary to-primary-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            {/* Shimmer effect */}
            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent" />

            <span className="relative flex items-center gap-2">
              {t('cta', { default: 'Подати заявку' })}
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
          </button>

          <button className="group px-10 py-5 border-2 border-neutral-200 text-neutral-700 rounded-full text-lg font-semibold hover:border-neutral-300 hover:bg-neutral-50 transition-all duration-300 hover:-translate-y-1">
            <span className="flex items-center gap-2">
              {t('cta_secondary', { default: 'Дізнатись більше' })}
              <svg className="w-5 h-5 group-hover:translate-y-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </span>
          </button>
        </motion.div>

        {/* Trust indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-16 pt-12 border-t border-neutral-100 flex flex-wrap justify-center gap-x-12 gap-y-4 text-sm text-neutral-500"
        >
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span>Акредитовано МОУ</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>150+ випускників</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>5000+ годин практики</span>
          </div>
        </motion.div>
      </div>
    </CardWrapper>
  );
}
