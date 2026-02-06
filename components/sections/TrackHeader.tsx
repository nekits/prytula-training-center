'use client';

import { useTranslations } from 'next-intl';
import { useLocale } from 'next-intl';
import Image from 'next/image';
import { Users, Crosshair, TrendingUp, GraduationCap, BookOpen, Heart, type LucideIcon } from 'lucide-react';
import ScrollReveal from '@/components/ui/ScrollReveal';
import AnimatedCounter from '@/components/ui/AnimatedCounter';
import UavIllustration from '@/components/ui/UavIllustration';
import MedicIllustration from '@/components/ui/MedicIllustration';
import keyNumbersData from '@/lib/data/key-numbers.json';

type TrackHeaderProps = {
  track: 'uav' | 'tactical-medicine';
};

const trackImages: Record<string, string> = {
  uav: '/photos/my-durves-vector.svg',
  'tactical-medicine': '/photos/tactical-medicine-bw.png',
};

const numberIcons: Record<string, LucideIcon> = {
  crews: Users,
  'kill-rate': Crosshair,
  efficiency: TrendingUp,
  participants: GraduationCap,
  trainings: BookOpen,
  'trained-total': Heart,
};

const advantagesByTrack = {
  uav: [
    { id: 'ecosystem', color: 'bg-green-500' },
    { id: 'full-cycle', color: 'bg-primary' },
    { id: 'expertise', color: 'bg-accent-orange' },
    { id: 'results', color: 'bg-primary-400' },
  ],
  'tactical-medicine': [
    { id: 'scale', color: 'bg-green-500' },
    { id: 'international', color: 'bg-primary' },
    { id: 'analytics', color: 'bg-accent-orange' },
    { id: 'network', color: 'bg-primary-400' },
  ],
};

export default function TrackHeader({ track }: TrackHeaderProps) {
  const trackKey = track === 'tactical-medicine' ? 'tactical_medicine' : 'uav';
  const locale = useLocale();
  const t = useTranslations(`tracks.${trackKey}`);
  const tAdv = useTranslations(`advantages.${trackKey}`);
  const advantages = advantagesByTrack[track];
  const numbers = keyNumbersData.numbers.filter((item) => item.track === track);

  return (
    <section
      id={`track-${track}`}
      className="pt-24 md:pt-32 pb-12 md:pb-16 bg-white border-t border-neutral-200"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header: текст + фото */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <ScrollReveal>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-1 bg-gradient-to-r from-primary to-primary-400 rounded-full" />
                <span className="text-sm font-semibold text-primary uppercase tracking-wider">
                  {t('label')}
                </span>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6 leading-tight">
                {t('title')}
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <p className="text-lg text-neutral-600 leading-relaxed">
                {t('description')}
              </p>
            </ScrollReveal>

            {/* Advantages — dot indicators під описом */}
            <ScrollReveal delay={0.3}>
              <div className="flex flex-wrap gap-x-6 gap-y-2 mt-6">
                {advantages.map((item) => (
                  <div key={item.id} className="flex items-center gap-2">
                    <div className={`w-2 h-2 rounded-full ${item.color}`} />
                    <span className="text-sm text-neutral-600">
                      {tAdv(`${item.id}.title`)}
                    </span>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={0.2}>
            <div className="relative rounded-2xl overflow-hidden">
              {track === 'uav' ? (
                <UavIllustration className="w-full h-auto" />
              ) : (
                <MedicIllustration className="w-full h-auto" />
              )}
            </div>
          </ScrollReveal>
        </div>

        {/* Key numbers — compact icon cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-10">
          {numbers.map((item, index) => {
            const Icon = numberIcons[item.id] || Users;
            return (
              <ScrollReveal key={item.id} delay={0.3 + index * 0.1}>
                <div className="flex items-start gap-3 p-4 rounded-xl bg-neutral-50 border border-neutral-100">
                  <div className="shrink-0 w-9 h-9 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                    <Icon className="w-4 h-4" strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-neutral-900 leading-tight">
                      <AnimatedCounter value={item.numericValue} suffix={item.suffix} />
                    </p>
                    <p className="text-xs text-neutral-500 mt-1 leading-snug">
                      {locale === 'uk' ? item.label_uk : item.label_en}
                    </p>
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
