import SectionHero from '@/components/variants/shared/SectionHero';
import SectionAbout from '@/components/variants/shared/SectionAbout';
import SectionAdvantages from '@/components/variants/shared/SectionAdvantages';
import SectionKeyNumbers from '@/components/variants/shared/SectionKeyNumbers';
import SectionCourses from '@/components/variants/shared/SectionCourses';
import SectionMilitaryUnits from '@/components/variants/shared/SectionMilitaryUnits';
import SectionRegistration from '@/components/variants/shared/SectionRegistration';
import SectionDonate from '@/components/variants/shared/SectionDonate';
import SectionPartnerships from '@/components/variants/shared/SectionPartnerships';

export default function VariantAPage() {
  return (
    <main className="pt-16">
      {/* Traditional top-to-bottom flow */}
      <SectionHero />
      <SectionAbout />
      <SectionAdvantages />
      <SectionKeyNumbers />
      <SectionCourses />
      <SectionMilitaryUnits />
      <SectionRegistration />
      <SectionDonate />
      <SectionPartnerships />
    </main>
  );
}
