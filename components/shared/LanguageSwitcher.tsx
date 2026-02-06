'use client';

import { useRouter, usePathname } from 'next/navigation';

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();

  const currentLocale = pathname.split('/')[1] === 'en' ? 'en' : 'uk';
  const targetLocale = currentLocale === 'uk' ? 'en' : 'uk';

  const switchLocale = () => {
    const newPathname = pathname.replace(/^\/(uk|en)/, `/${targetLocale}`);
    router.push(newPathname);
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
