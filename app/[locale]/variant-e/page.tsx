import MinimalHero from '@/components/variants/variant-e/MinimalHero';
import SectionAbout from '@/components/variants/shared/SectionAbout';
import SectionAdvantages from '@/components/variants/shared/SectionAdvantages';
import SectionKeyNumbers from '@/components/variants/shared/SectionKeyNumbers';
import SectionCourses from '@/components/variants/shared/SectionCourses';
import SectionMilitaryUnits from '@/components/variants/shared/SectionMilitaryUnits';
import SectionRegistration from '@/components/variants/shared/SectionRegistration';
import SectionDonate from '@/components/variants/shared/SectionDonate';
import SectionPartnerships from '@/components/variants/shared/SectionPartnerships';

export default function VariantEPage() {
  return (
    <main className="bg-white">
      {/* Minimal Hero with maximum white space */}
      <MinimalHero />

      {/* Extra spacing between sections */}
      <div className="py-20" />

      {/* About with minimal styling */}
      <div className="py-32">
        <SectionAbout />
      </div>

      {/* White space */}
      <div className="py-20" />

      {/* Key Numbers - clean display */}
      <div className="py-32 bg-neutral-50">
        <SectionKeyNumbers />
      </div>

      {/* White space */}
      <div className="py-20" />

      {/* Advantages */}
      <div className="py-32">
        <SectionAdvantages />
      </div>

      {/* White space */}
      <div className="py-20" />

      {/* Courses */}
      <div className="py-32 bg-neutral-50">
        <SectionCourses />
      </div>

      {/* White space */}
      <div className="py-20" />

      {/* Military Units */}
      <div className="py-32">
        <SectionMilitaryUnits />
      </div>

      {/* Registration - minimal */}
      <SectionRegistration />

      {/* White space */}
      <div className="py-20" />

      {/* Donate */}
      <div className="py-32">
        <SectionDonate />
      </div>

      {/* Partnerships */}
      <div className="py-32 bg-neutral-50">
        <SectionPartnerships />
      </div>

      {/* Final white space */}
      <div className="py-20" />
    </main>
  );
}
