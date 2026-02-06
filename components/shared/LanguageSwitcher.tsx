'use client';

import { useLocale } from 'next-intl';
import { useRouter, usePathname } from '@/i18n/navigation';

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();

  const targetLocale = locale === 'uk' ? 'en' : 'uk';

  const switchLocale = () => {
    router.replace(pathname, { locale: targetLocale });
  };

  return (
    <button
      onClick={switchLocale}
      className="w-10 h-10 flex items-center justify-center rounded-full bg-[#f3f4fc] text-sm font-medium text-neutral-700 hover:text-neutral-900 transition-colors"
    >
      {targetLocale.toUpperCase()}
    </button>
  );
}
