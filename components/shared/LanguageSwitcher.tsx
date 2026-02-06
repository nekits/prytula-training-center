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
      className="px-3 py-1.5 rounded-lg text-sm font-medium text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100 transition-colors"
    >
      {targetLocale.toUpperCase()}
    </button>
  );
}
