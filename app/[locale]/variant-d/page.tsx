import AsymmetricHero from '@/components/variants/variant-d/AsymmetricHero';
import SectionAbout from '@/components/variants/shared/SectionAbout';
import SectionAdvantages from '@/components/variants/shared/SectionAdvantages';
import SectionKeyNumbers from '@/components/variants/shared/SectionKeyNumbers';
import SectionCourses from '@/components/variants/shared/SectionCourses';
import SectionMilitaryUnits from '@/components/variants/shared/SectionMilitaryUnits';
import SectionRegistration from '@/components/variants/shared/SectionRegistration';
import SectionDonate from '@/components/variants/shared/SectionDonate';
import SectionPartnerships from '@/components/variants/shared/SectionPartnerships';

export default function VariantDPage() {
  return (
    <main>
      {/* Asymmetric Hero with overlapping elements */}
      <AsymmetricHero />

      {/* About and Advantages in asymmetric grid */}
      <div className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-7">
            <SectionAbout />
          </div>
          <div className="col-span-12 md:col-span-5 md:pt-12">
            <div className="bg-primary-50 p-8 rounded-card">
              <h3 className="text-2xl font-bold text-neutral-900 mb-4">
                Швидкі факти
              </h3>
              <ul className="space-y-3 text-neutral-700">
                <li>✓ Сучасне обладнання</li>
                <li>✓ Досвідчені інструктори</li>
                <li>✓ Практичне навчання</li>
                <li>✓ Підтримка після курсу</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <SectionAdvantages />
      <SectionKeyNumbers />

      {/* Courses in asymmetric layout */}
      <div className="bg-neutral-50 py-20">
        <div className="container mx-auto px-4">
          <SectionCourses />
        </div>
      </div>

      <SectionMilitaryUnits />
      <SectionRegistration />
      <SectionDonate />
      <SectionPartnerships />
    </main>
  );
}
