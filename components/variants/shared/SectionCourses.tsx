'use client';

import { useLocale } from 'next-intl';
import { useTranslations } from 'next-intl';
import coursesData from '@/lib/data/courses.json';

export default function SectionCourses() {
  const locale = useLocale();
  const t = useTranslations('courses');

  return (
    <section id="courses" className="py-20 bg-neutral-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-heading font-bold text-neutral-900 mb-12 text-center">
          {t('title', { default: 'Наші курси' })}
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {coursesData.courses.map((course) => (
            <div
              key={course.id}
              className="bg-white p-8 rounded-card border border-neutral-50 hover:shadow-lg transition-shadow"
            >
              <h3 className="text-2xl font-bold text-neutral-900 mb-4">
                {locale === 'uk' ? course.title_uk : course.title_en}
              </h3>

              <p className="text-neutral-700 mb-6">
                {locale === 'uk'
                  ? course.description_uk
                  : course.description_en}
              </p>

              <div className="space-y-2 text-sm text-neutral-600">
                <div>
                  <span className="font-semibold">
                    {t('duration', { default: 'Тривалість' })}:
                  </span>{' '}
                  {locale === 'uk' ? course.duration_uk : course.duration_en}
                </div>
                <div>
                  <span className="font-semibold">
                    {t('level', { default: 'Рівень' })}:
                  </span>{' '}
                  {locale === 'uk' ? course.level_uk : course.level_en}
                </div>
              </div>

              <button className="mt-6 w-full bg-primary text-white px-6 py-3 rounded-full hover:bg-primary-700 transition-colors">
                {t('learn_more', { default: 'Детальніше' })}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
