'use client';

import { useRouter, usePathname } from 'next/navigation';
import { useLocale } from 'next-intl';

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();

  const targetLocale = locale === 'uk' ? 'en' : 'uk';

  const switchLocale = () => {
    // Strip existing locale prefix if present (handles /en, /en/about, /uk, /uk/about)
    const pathWithoutLocale = pathname.replace(/^\/(uk|en)(\/|$)/, '/');

    // Default locale (uk) needs no prefix due to localePrefix: 'as-needed'
    const newPath =
      targetLocale === 'uk'
        ? pathWithoutLocale
        : `/${targetLocale}${pathWithoutLocale === '/' ? '' : pathWithoutLocale}`;

    router.push(newPath);
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
