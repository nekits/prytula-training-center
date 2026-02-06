import Link from 'next/link';
import { useTranslations } from 'next-intl';

const variants = [
  {
    id: 'a',
    name: 'Traditional',
    description: 'Classic top-to-bottom flow',
    complexity: 'Simple',
    icon: '📄',
  },
  {
    id: 'b',
    name: 'Split Screen',
    description: 'Hero with 50/50 layout',
    complexity: 'Medium',
    icon: '⚡',
  },
  {
    id: 'c',
    name: 'Card-Centric',
    description: 'Everything organized in cards',
    complexity: 'Medium',
    icon: '🎴',
  },
  {
    id: 'd',
    name: 'Asymmetric',
    description: 'Dynamic asymmetric layout',
    complexity: 'Complex',
    icon: '🔷',
  },
  {
    id: 'e',
    name: 'Minimalist',
    description: 'Maximum white space, ultra clean',
    complexity: 'Simple',
    icon: '⚪',
  },
];

export default function HomePage() {
  const t = useTranslations('header');

  return (
    <main className="min-h-screen bg-neutral-50 py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-heading font-bold text-neutral-900 mb-4">
            Layout Variants Demo
          </h1>
          <p className="text-xl text-neutral-700 max-w-2xl mx-auto">
            {t('logo')} — Choose a layout variant to preview
          </p>
        </div>

        {/* Variant Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {variants.map((variant) => (
            <Link key={variant.id} href={`/variant-${variant.id}`}>
              <div className="bg-white p-8 rounded-card border border-neutral-50 hover:shadow-lg transition-all cursor-pointer group">
                {/* Icon */}
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">
                  {variant.icon}
                </div>

                {/* Name */}
                <h3 className="text-2xl font-bold text-neutral-900 mb-2">
                  Variant {variant.id.toUpperCase()}: {variant.name}
                </h3>

                {/* Description */}
                <p className="text-neutral-700 mb-4">{variant.description}</p>

                {/* Complexity badge */}
                <div className="inline-block">
                  <span
                    className={`text-sm px-3 py-1 rounded-full ${
                      variant.complexity === 'Simple'
                        ? 'bg-green-100 text-green-700'
                        : variant.complexity === 'Medium'
                        ? 'bg-yellow-100 text-yellow-700'
                        : 'bg-red-100 text-red-700'
                    }`}
                  >
                    {variant.complexity}
                  </span>
                </div>

                {/* Arrow */}
                <div className="mt-4 text-primary font-semibold group-hover:translate-x-2 transition-transform inline-block">
                  View Preview →
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Footer note */}
        <div className="text-center mt-16 text-neutral-600">
          <p>All variants use the same content and design system</p>
          <p className="text-sm mt-2">
            Colors: #4e51ff (Primary), #111 (Dark), #ff9900 (Accent)
          </p>
        </div>
      </div>
    </main>
  );
}
