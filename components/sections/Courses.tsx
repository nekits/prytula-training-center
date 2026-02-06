'use client';

import { useLocale, useTranslations } from 'next-intl';
import Image from 'next/image';
import ScrollReveal from '@/components/ui/ScrollReveal';
import coursesData from '@/lib/data/courses.json';

type CoursesProps = {
  track: 'uav' | 'tactical-medicine';
};

export default function Courses({ track }: CoursesProps) {
  const locale = useLocale();
  const t = useTranslations('courses');
  const courses = coursesData.courses.filter((course) => course.track === track);
  const gridCols = courses.length === 2 ? 'md:grid-cols-2' : 'md:grid-cols-3';

  return (
    <section id={track === 'uav' ? 'courses' : undefined} className="pt-0 pb-16 md:pb-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className={`grid ${gridCols} gap-8`}>
          {courses.map((course, index) => (
            <ScrollReveal key={course.id} delay={index * 0.1}>
              <div className="group relative bg-white rounded-2xl border border-neutral-100 overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-primary/8 hover:-translate-y-1">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={course.image}
                    alt={locale === 'uk' ? course.title_uk : course.title_en}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-neutral-900 mb-3">
                    {locale === 'uk' ? course.title_uk : course.title_en}
                  </h3>
                  <p className="text-neutral-600 mb-6 leading-relaxed text-sm">
                    {locale === 'uk' ? course.description_uk : course.description_en}
                  </p>

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
          ))}
        </div>
      </div>
    </section>
  );
}
