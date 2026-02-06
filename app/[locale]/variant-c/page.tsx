import HeroCard from '@/components/variants/variant-c/HeroCard';
import CardWrapper from '@/components/variants/variant-c/CardWrapper';
import SectionAbout from '@/components/variants/shared/SectionAbout';
import SectionAdvantages from '@/components/variants/shared/SectionAdvantages';
import SectionKeyNumbers from '@/components/variants/shared/SectionKeyNumbers';
import SectionCourses from '@/components/variants/shared/SectionCourses';
import SectionMilitaryUnits from '@/components/variants/shared/SectionMilitaryUnits';
import SectionRegistration from '@/components/variants/shared/SectionRegistration';
import SectionDonate from '@/components/variants/shared/SectionDonate';
import SectionPartnerships from '@/components/variants/shared/SectionPartnerships';

export default function VariantCPage() {
  return (
    <main className="pt-16 bg-neutral-50">
      <div className="container mx-auto px-4 py-8 space-y-8">
        {/* Hero as a card */}
        <HeroCard />

        {/* About in card */}
        <CardWrapper className="p-8">
          <SectionAbout />
        </CardWrapper>

        {/* Advantages */}
        <CardWrapper className="p-8">
          <SectionAdvantages />
        </CardWrapper>

        {/* Key Numbers in card */}
        <CardWrapper className="p-8">
          <SectionKeyNumbers />
        </CardWrapper>

        {/* Courses */}
        <CardWrapper className="p-8">
          <SectionCourses />
        </CardWrapper>

        {/* Military Units */}
        <CardWrapper className="p-8">
          <SectionMilitaryUnits />
        </CardWrapper>

        {/* Registration CTA */}
        <SectionRegistration />

        {/* Donate */}
        <CardWrapper className="p-8">
          <SectionDonate />
        </CardWrapper>

        {/* Partnerships */}
        <CardWrapper className="p-8">
          <SectionPartnerships />
        </CardWrapper>
      </div>
    </main>
  );
}
