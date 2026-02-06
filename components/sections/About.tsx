'use client';

import { useTranslations } from 'next-intl';
import { useRef, useState } from 'react';
import Image from 'next/image';
import { ChevronDown, ArrowUpRight } from 'lucide-react';
import ScrollReveal from '@/components/ui/ScrollReveal';

export default function About() {
  const t = useTranslations('about');
  const [expanded, setExpanded] = useState(false);
  const dividerRef = useRef<HTMLDivElement>(null);

  return (
    <section id="about" className="py-24 md:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Top: title + paragraph1 + photo */}
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Text content */}
          <div>
            <ScrollReveal>
              <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-12 leading-tight">
                {t('title')}
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <p className="text-lg text-neutral-600 leading-relaxed">
                {t('paragraph1_before_free')}
                <span className="wavy-accent">{t('paragraph1_free')}</span>
                {t('paragraph1_between')}
                <span className="wavy-accent">{t('paragraph1_military')}</span>
                {t('paragraph1_after')}
              </p>
            </ScrollReveal>
          </div>

          {/* Photo */}
          <ScrollReveal delay={0.2}>
            <div className="relative aspect-[3/2] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/photos/graduation.jpg"
                alt="Graduation ceremony"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
            </div>
          </ScrollReveal>
        </div>

        {/* Dotted divider with "Read more" toggle */}
        <ScrollReveal delay={0.3}>
          <div ref={dividerRef} className="mt-12">
            <button
              onClick={() => {
                const wasExpanded = expanded;
                setExpanded(!expanded);
                if (!wasExpanded) {
                  const el = dividerRef.current;
                  if (!el) return;
                  const start = window.scrollY;
                  const target = el.getBoundingClientRect().top + start - 100;
                  const distance = target - start;
                  if (Math.abs(distance) < 1) return;
                  const duration = 800;
                  let startTime: number | null = null;
                  const html = document.documentElement;
                  html.style.scrollBehavior = 'auto';
                  const step = (time: number) => {
                    if (!startTime) startTime = time;
                    const progress = Math.min((time - startTime) / duration, 1);
                    const ease = 1 - Math.pow(1 - progress, 3);
                    html.scrollTop = start + distance * ease;
                    if (progress < 1) {
                      requestAnimationFrame(step);
                    } else {
                      html.style.scrollBehavior = '';
                    }
                  };
                  requestAnimationFrame(step);
                }
              }}
              className="group w-full flex items-center gap-4 cursor-pointer"
            >
              <div className="flex-1 border-t border-dashed border-neutral-300" />
              <span className="flex items-center gap-2 text-sm font-medium text-neutral-500 group-hover:text-primary transition-colors whitespace-nowrap">
                {t('read_more')}
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-300 ${expanded ? 'rotate-180' : ''}`}
                />
              </span>
              <div className="flex-1 border-t border-dashed border-neutral-300" />
            </button>
          </div>
        </ScrollReveal>

        {/* Expandable: paragraph2 + paragraph3 + logo */}
        <div
          className={`grid transition-all duration-500 ease-in-out ${
            expanded ? 'grid-rows-[1fr] opacity-100 mt-12' : 'grid-rows-[0fr] opacity-0 mt-0'
          }`}
        >
          <div className="overflow-hidden">
            <div className="grid md:grid-cols-3 gap-8 items-center">
              {/* Paragraph 2 */}
              <div className="text-lg text-neutral-600 leading-relaxed">
                <p>{t('paragraph2')}</p>
              </div>

              {/* Logo on dotted grid + foundation link */}
              <div className="flex flex-col items-center gap-4">
                <div className="relative aspect-[2/1] w-full rounded-2xl overflow-hidden">
                  <svg
                    className="absolute inset-0 w-full h-full"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <defs>
                      <pattern id="about-dot-grid" width="24" height="24" patternUnits="userSpaceOnUse">
                        <circle cx="12" cy="12" r="1" fill="#d1d5db" />
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#about-dot-grid)" />
                  </svg>
                  <div className="relative z-10 flex items-center justify-center w-full h-full">
                    <div className="relative w-3/4 aspect-square">
                      <Image
                        src="/branding/logo/nc-logo-color.svg"
                        alt="Логотип Навчального центру"
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                </div>
                <a
                  href="https://prytulafoundation.org/about"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs text-neutral-400 hover:text-primary transition-colors"
                >
                  {t('foundation_link')}
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </div>

              {/* Paragraph 3 */}
              <div className="text-lg text-neutral-600 leading-relaxed">
                <p>{t('paragraph3')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
