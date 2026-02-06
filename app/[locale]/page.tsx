import { useTranslations } from 'next-intl';

export default function HomePage() {
  const t = useTranslations('header');

  return (
    <main className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-primary mb-4">
          {t('logo')}
        </h1>
        <p className="text-neutral-900">
          🚧 Under construction
        </p>
      </div>
    </main>
  );
}
