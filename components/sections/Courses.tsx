'use client';

import { useLocale, useTranslations } from 'next-intl';
import { Gamepad2, Shield, Heart } from 'lucide-react';
import ScrollReveal from '@/components/ui/ScrollReveal';
import coursesData from '@/lib/data/courses.json';

const courseIcons = [Gamepad2, Shield, Heart];
const courseGradients = [
  'from-blue-500/20 to-primary/20',
  'from-red-500/20 to-orange-500/20',
  'from-green-500/20 to-emerald-500/20',
];
const courseIconColors = ['text-primary', 'text-red-500', 'text-green-600'];

export default function Courses() {
  const locale = useLocale();
  const t = useTranslations('courses');

  return (
    <section id="courses" className="py-24 md:py-32 bg-white">
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
              {t('subtitle')}
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-8">
          {coursesData.courses.map((course, index) => {
            const Icon = courseIcons[index];
            return (
              <ScrollReveal key={course.id} delay={index * 0.1}>
                <div className="group relative bg-white rounded-2xl border border-neutral-100 overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-primary/8 hover:-translate-y-1">
                  {/* Gradient placeholder image */}
                  <div className={`relative h-48 bg-gradient-to-br ${courseGradients[index]} flex items-center justify-center overflow-hidden`}>
                    <Icon className={`w-16 h-16 ${courseIconColors[index]} opacity-40 group-hover:scale-110 transition-transform duration-500`} strokeWidth={1} />
                    <div className="absolute inset-0 bg-gradient-to-t from-white/10 to-transparent" />
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-neutral-900 mb-3">
                      {locale === 'uk' ? course.title_uk : course.title_en}
                    </h3>
                    <p className="text-neutral-600 mb-6 leading-relaxed text-sm">
                      {locale === 'uk' ? course.description_uk : course.description_en}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      <span className="inline-flex items-center px-3 py-1 rounded-full bg-neutral-100 text-xs font-medium text-neutral-700">
                        {t('duration')}: {locale === 'uk' ? course.duration_uk : course.duration_en}
                      </span>
                      <span className="inline-flex items-center px-3 py-1 rounded-full bg-primary-50 text-xs font-medium text-primary-700">
                        {t('level')}: {locale === 'uk' ? course.level_uk : course.level_en}
                      </span>
                    </div>

                    <button className="w-full py-3 px-6 bg-neutral-900 text-white rounded-full text-sm font-semibold hover:bg-neutral-800 transition-colors">
                      {t('learn_more')}
                    </button>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
