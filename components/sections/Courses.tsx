'use client';

import { useLocale, useTranslations } from 'next-intl';
import Image from 'next/image';
import { Plane, Clock, Crosshair, Shield, Zap, Users, BookOpen, Globe, Award, type LucideIcon } from 'lucide-react';
import ScrollReveal from '@/components/ui/ScrollReveal';
import coursesData from '@/lib/data/courses.json';

type CoursesProps = {
  track: 'uav' | 'tactical-medicine';
};

function QuadcopterIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="5" cy="5" r="2.5" />
      <circle cx="19" cy="5" r="2.5" />
      <circle cx="5" cy="19" r="2.5" />
      <circle cx="19" cy="19" r="2.5" />
      <line x1="7" y1="7" x2="10" y2="10" />
      <line x1="17" y1="7" x2="14" y2="10" />
      <line x1="7" y1="17" x2="10" y2="14" />
      <line x1="17" y1="17" x2="14" y2="14" />
      <rect x="10" y="10" width="4" height="4" rx="1" />
    </svg>
  );
}

const tagIcons: Record<string, LucideIcon | null> = {
  'Літакового типу': Plane,
  'Fixed-wing': Plane,
  'Роторного типу': null,
  'Rotary-wing': null,
  'Тривалість: 10 днів': Clock,
  'Тривалість: 15 днів': Clock,
  'Тривалість: 5 днів': Clock,
  'Duration: 10 days': Clock,
  'Duration: 15 days': Clock,
  'Duration: 5 days': Clock,
  'Перехоплення розвідувальних БпЛА': Crosshair,
  'Reconnaissance UAV interception': Crosshair,
  '"Антішахед"': Shield,
  '"Anti-Shahed"': Shield,
  '83% коефіцієнт збиття': Zap,
  '83% kill rate': Zap,
  'Наймасовіший засіб перехоплення': Users,
  'Most widely used interception system': Users,
  'Стрільці-Санітари та Бойові Медики': Users,
  'Combat Medics & Shooter-Paramedics': Users,
  'Stop The Bleed (CLS)': BookOpen,
  'Advanced Shock Management (ASM)': BookOpen,
  '1 тиждень': Clock,
  '1 week': Clock,
  'NATO': Globe,
  'Ukraine Trauma Project': Globe,
  'Розвиток інструкторів': Users,
  'Instructor development': Users,
  'Спеціалізовані тренінги': BookOpen,
  'Specialized trainings': BookOpen,
  'Форум Тактичної Медицини': Award,
  'Tactical Medicine Forum': Award,
  '350 учасників': Users,
  '350 participants': Users,
  '13 аналітичних звітів': BookOpen,
  '13 analytical reports': BookOpen,
  '15 публікацій': BookOpen,
  '15 publications': BookOpen,
};

const quadcopterTags = new Set(['Роторного типу', 'Rotary-wing']);

export default function Courses({ track }: CoursesProps) {
  const locale = useLocale();
  const t = useTranslations('courses');
  const courses = coursesData.courses.filter((course) => course.track === track);

  return (
    <section id={track === 'uav' ? 'courses' : undefined} className="pt-0 pb-16 md:pb-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <ScrollReveal>
          <h3 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-8">
            {t('section_title')}
          </h3>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-6">
          {courses.map((course, index) => {
            const tags: string[] = locale === 'uk' ? (course as any).tags_uk : (course as any).tags_en;
            return (
              <ScrollReveal key={course.id} delay={index * 0.1}>
                <div className="group flex bg-white rounded-2xl border border-neutral-100 overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 h-full">
                  <div className="relative w-40 shrink-0 overflow-hidden">
                    <Image
                      src={course.image}
                      alt={locale === 'uk' ? course.title_uk : course.title_en}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  <div className="p-5 flex flex-col justify-center">
                    <h4 className="text-lg font-bold text-neutral-900 mb-3">
                      {locale === 'uk' ? course.title_uk : course.title_en}
                    </h4>

                    {tags && (
                      <div className="flex flex-col gap-1.5">
                        {tags.map((tag) => {
                          const Icon = tagIcons[tag];
                          const isQuadcopter = quadcopterTags.has(tag);
                          return (
                            <div key={tag} className="flex items-center gap-2">
                              {isQuadcopter ? (
                                <QuadcopterIcon className="w-3.5 h-3.5 text-neutral-400 shrink-0" />
                              ) : Icon ? (
                                <Icon className="w-3.5 h-3.5 text-neutral-400 shrink-0" strokeWidth={1.5} />
                              ) : (
                                <Zap className="w-3.5 h-3.5 text-neutral-400 shrink-0" strokeWidth={1.5} />
                              )}
                              <span className="text-xs text-neutral-600">{tag}</span>
                            </div>
                          );
                        })}
                      </div>
                    )}
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
