import HeroSplitScreen from '@/components/variants/variant-b/HeroSplitScreen';
import SectionAbout from '@/components/variants/shared/SectionAbout';
import SectionAdvantages from '@/components/variants/shared/SectionAdvantages';
import SectionKeyNumbers from '@/components/variants/shared/SectionKeyNumbers';
import SectionCourses from '@/components/variants/shared/SectionCourses';
import SectionMilitaryUnits from '@/components/variants/shared/SectionMilitaryUnits';
import SectionRegistration from '@/components/variants/shared/SectionRegistration';
import SectionDonate from '@/components/variants/shared/SectionDonate';
import SectionPartnerships from '@/components/variants/shared/SectionPartnerships';

export default function VariantBPage() {
  return (
    <main className="pt-16">
      {/* Split Screen Hero - 50/50 layout */}
      <HeroSplitScreen />

      {/* Rest follows traditional flow */}
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
