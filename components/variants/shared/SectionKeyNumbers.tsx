'use client';

import { useLocale } from 'next-intl';
import { motion } from 'framer-motion';
import keyNumbersData from '@/lib/data/key-numbers.json';

export default function SectionKeyNumbers() {
  const locale = useLocale();

  return (
    <section>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-heading font-bold text-neutral-900 mb-12 text-center"
      >
        {locale === 'uk' ? 'Наші досягнення' : 'Our Achievements'}
      </motion.h2>

      <div className="grid md:grid-cols-3 gap-8">
        {keyNumbersData.numbers.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{
              duration: 0.7,
              delay: index * 0.15,
              ease: [0.16, 1, 0.3, 1]
            }}
            className="group relative text-center p-8 rounded-2xl border border-neutral-100 bg-gradient-to-br from-white to-neutral-50/50 hover:shadow-xl hover:shadow-primary/10 hover:border-primary/30 transition-all duration-500"
          >
            {/* Background accent */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/0 group-hover:from-primary/5 group-hover:to-accent-orange/5 rounded-2xl transition-all duration-500" />

            {/* Decorative element */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-all duration-500" />

            {/* Number with shimmer effect */}
            <div className="relative mb-4">
              <div className="text-7xl md:text-8xl font-heading font-bold bg-gradient-to-br from-primary via-primary-600 to-primary-700 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-500">
                {item.value}
              </div>

              {/* Shine effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-0 group-hover:opacity-100 -translate-x-full group-hover:translate-x-full transition-all duration-1000" />
            </div>

            {/* Label */}
            <p className="relative text-lg md:text-xl text-neutral-600 font-medium leading-snug">
              {locale === 'uk' ? item.label_uk : item.label_en}
            </p>

            {/* Bottom accent line */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-primary to-accent-orange group-hover:w-2/3 transition-all duration-500 rounded-full" />
          </motion.div>
        ))}
      </div>

      {/* Decorative element below */}
      <motion.div
        initial={{ opacity: 0, scaleX: 0 }}
        whileInView={{ opacity: 1, scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.5 }}
        className="mt-12 h-px bg-gradient-to-r from-transparent via-neutral-200 to-transparent"
      />
    </section>
  );
}
