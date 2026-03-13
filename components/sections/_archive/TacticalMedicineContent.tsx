'use client';

import { useLocale, useTranslations } from 'next-intl';
import { ArrowRight, Users, BookOpen, Stethoscope, Calendar, MessageCircle, BarChart3, Mic } from 'lucide-react';
import Image from 'next/image';
import ScrollReveal from '@/components/ui/ScrollReveal';
import tacmedData from '@/lib/data/tacmed-events.json';

const programs = [
  { id: 'combat_medic', Icon: Users },
  { id: 'cls', Icon: BookOpen },
  { id: 'asm', Icon: Stethoscope },
] as const;

const rndItems = [
  { id: 'forum', Icon: Mic },
  { id: 'monthly', Icon: Calendar },
  { id: 'lessons_learned', Icon: BarChart3 },
] as const;

export default function TacticalMedicineContent() {
  const locale = useLocale();
  const t = useTranslations('tacmed');
  const event = tacmedData.upcomingEvent;
  const channels = tacmedData.telegramChannels;

  return (
    <section className="pt-0 pb-16 md:pb-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-16">

        {/* Block 1: Training Programs */}
        <div>
          <ScrollReveal>
            <h3 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-8">
              {t('training.title')}
            </h3>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {programs.map((program, index) => (
              <ScrollReveal key={program.id} delay={index * 0.1}>
                <div className="bg-white rounded-2xl border border-neutral-100 p-8 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 h-full">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary-50 text-primary mb-6">
                    <program.Icon className="w-6 h-6" strokeWidth={1.5} />
                  </div>
                  <h4 className="text-lg font-bold text-neutral-900 mb-3">
                    {t(`training.${program.id}.name`)}
                  </h4>
                  <p className="text-neutral-600 text-sm leading-relaxed">
                    {t(`training.${program.id}.description`)}
                  </p>
                  <a
                    href={`mailto:educational.centre@prytulafoundation.org?subject=${encodeURIComponent(locale === 'uk' ? `Реєстрація на курс: ${t(`training.${program.id}.name`)}` : `Registration for: ${t(`training.${program.id}.name`)}`)}`}
                    className="group/btn inline-flex items-center gap-1.5 mt-4 text-sm font-semibold text-primary hover:text-primary-700 transition-colors"
                  >
                    {t('events.register')}
                    <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
                  </a>
                </div>
              </ScrollReveal>
            ))}
          </div>

        </div>

        {/* Block 2: Upcoming Event */}
        <div>
          <ScrollReveal>
            <h3 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-8">
              {t('events.title')}
            </h3>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="bg-white rounded-2xl border border-neutral-100 p-8 transition-all duration-300 hover:shadow-lg">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                  <span className="inline-flex items-center gap-2 text-sm text-primary font-semibold mb-2">
                    <Calendar className="w-4 h-4" />
                    {locale === 'uk' ? event.date_label_uk : event.date_label_en}
                  </span>
                  <h4 className="text-lg font-bold text-neutral-900">
                    {locale === 'uk' ? event.title_uk : event.title_en}
                  </h4>
                </div>
                <a
                  href={event.registrationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-full text-sm font-semibold hover:bg-primary-700 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg shrink-0"
                >
                  {t('events.register')}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </ScrollReveal>

        </div>

        {/* Block 3: R&D */}
        <div>
          <ScrollReveal>
            <h3 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-8">
              {t('rnd.title')}
            </h3>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-6">
            {rndItems.map((item, index) => {
              const stat = t.has(`rnd.${item.id}.stat`) ? t(`rnd.${item.id}.stat`) : null;
              return (
                <ScrollReveal key={item.id} delay={index * 0.1}>
                  <div className="bg-white rounded-2xl border border-neutral-100 p-8 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 h-full">
                    <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary-50 text-primary mb-6">
                      <item.Icon className="w-6 h-6" strokeWidth={1.5} />
                    </div>
                    <h4 className="text-lg font-bold text-neutral-900 mb-3">
                      {t(`rnd.${item.id}.name`)}
                    </h4>
                    <p className="text-neutral-600 text-sm leading-relaxed">
                      {t(`rnd.${item.id}.description`)}
                    </p>
                    {stat && (
                      <p className="mt-4 text-sm font-semibold text-primary">
                        {stat}
                      </p>
                    )}
                    {item.id === 'monthly' && (
                      <p className="mt-4 text-xs text-neutral-400">
                        {t('events.archive_title')} · {t('events.archive_placeholder')}
                      </p>
                    )}
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>

        {/* Block 4: Community */}
        <div>
          <ScrollReveal>
            <h3 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-8">
              {t('community.title')}
            </h3>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-6">
            {channels.map((channel, index) => (
              <ScrollReveal key={channel.id} delay={index * 0.1}>
                <div className="bg-white rounded-2xl border border-neutral-100 p-8 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 h-full">
                  {'image' in channel && (
                    <div className="w-14 h-14 rounded-2xl overflow-hidden mb-6">
                      <Image
                        src={(channel as any).image}
                        alt={locale === 'uk' ? channel.title_uk : channel.title_en}
                        width={56}
                        height={56}
                        className="object-cover w-full h-full"
                      />
                    </div>
                  )}
                  <h4 className="text-lg font-bold text-neutral-900 mb-2">
                    {locale === 'uk' ? channel.title_uk : channel.title_en}
                  </h4>
                  {'description_uk' in channel && (
                    <p className="text-neutral-600 text-sm leading-relaxed mb-2">
                      {locale === 'uk' ? (channel as any).description_uk : (channel as any).description_en}
                    </p>
                  )}
                  {channel.isPublic && channel.url ? (
                    <a
                      href={channel.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-2 mt-3 text-sm font-semibold text-primary hover:text-primary-700 transition-colors"
                    >
                      <MessageCircle className="w-4 h-4" />
                      {t('community.join')}
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                  ) : (
                    <p className="text-sm text-neutral-500 mt-1">
                      {t('community.private_access')}
                    </p>
                  )}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
