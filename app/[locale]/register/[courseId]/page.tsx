'use client';

import { useLocale } from 'next-intl';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import { ArrowLeft } from 'lucide-react';
import coursesData from '@/lib/data/courses.json';

const embedUrls: Record<string, string> = {
  'taras-p': 'https://docs.google.com/forms/d/e/1FAIpQLSe0GgJkvBvC6_UXoslaWOdU6Dc8dyFfXwg0C6b9-mx7NVLCJA/viewform?embedded=true',
  'sting': 'https://docs.google.com/forms/d/e/1FAIpQLScim3SBmFCc0jXNbcYqSXit8AGAloKa42oqw6VGXBOR38uWnw/viewform?embedded=true',
};

export default function RegisterPage() {
  const locale = useLocale();
  const { courseId } = useParams<{ courseId: string }>();

  const course = coursesData.courses.find((c) => c.id === courseId);
  const embedUrl = embedUrls[courseId];

  if (!course || !embedUrl) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <p className="text-neutral-500 mb-4">
            {locale === 'uk' ? 'Курс не знайдено' : 'Course not found'}
          </p>
          <a href={`/${locale}`} className="text-primary font-semibold hover:text-primary-700 transition-colors">
            {locale === 'uk' ? '← На головну' : '← Back to home'}
          </a>
        </div>
      </div>
    );
  }

  const title = locale === 'uk' ? course.title_uk : course.title_en;

  return (
    <div className="flex flex-col min-h-screen">
      {/* Compact header */}
      <header className="bg-white border-b border-neutral-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
          <div className="flex items-center gap-4">
            <a
              href={`/${locale}`}
              className="inline-flex items-center gap-2 text-sm text-neutral-500 hover:text-neutral-900 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="hidden sm:inline">
                {locale === 'uk' ? 'На головну' : 'Back to home'}
              </span>
            </a>
            <div className="h-6 w-px bg-neutral-200" />
            <h1 className="text-sm font-semibold text-neutral-900">
              {locale === 'uk' ? `Реєстрація: ${title}` : `Registration: ${title}`}
            </h1>
          </div>
          <a href={`/${locale}`} className="relative w-44 h-10">
            <Image
              src="/branding/logo/nc-logo-color.svg"
              alt="Навчальний Центр"
              fill
              className="object-contain object-right"
            />
          </a>
        </div>
      </header>

      {/* Google Form iframe — fills remaining height */}
      <iframe
        src={embedUrl}
        className="flex-1 w-full border-0"
        title={`${title} — Registration`}
        allowFullScreen
      />
    </div>
  );
}
