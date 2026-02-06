'use client';

import { useRouter, usePathname } from 'next/navigation';
import { locales } from '@/i18n';

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();

  const currentLocale = pathname.split('/')[1] === 'en' ? 'en' : 'uk';

  const switchLocale = (newLocale: string) => {
    const newPathname = pathname.replace(/^\/(uk|en)/, `/${newLocale}`);
    router.push(newPathname);
  };

  return (
    <div className="flex gap-2">
      {locales.map((locale) => (
        <button
          key={locale}
          onClick={() => switchLocale(locale)}
          className={`px-3 py-1 rounded ${
            currentLocale === locale
              ? 'bg-primary text-white'
              : 'bg-neutral-50 text-neutral-900 hover:bg-neutral-100'
          }`}
        >
          {locale.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
