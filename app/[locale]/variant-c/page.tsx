import Header from '@/components/shared/Header';
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
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-b from-neutral-50 via-white to-neutral-50 pt-20">
      <div className="container mx-auto px-4 py-12 md:py-16 space-y-8 md:space-y-12">
        {/* Hero as a card - no delay, entrance first */}
        <HeroCard />

        {/* About in card */}
        <CardWrapper className="p-8 md:p-12" delay={0.1}>
          <SectionAbout />
        </CardWrapper>

        {/* Advantages */}
        <CardWrapper className="p-8 md:p-12" delay={0.15}>
          <SectionAdvantages />
        </CardWrapper>

        {/* Key Numbers in card */}
        <CardWrapper className="p-8 md:p-12" delay={0.2}>
          <SectionKeyNumbers />
        </CardWrapper>

        {/* Courses */}
        <CardWrapper className="p-8 md:p-12" delay={0.25}>
          <SectionCourses />
        </CardWrapper>

        {/* Military Units */}
        <CardWrapper className="p-8 md:p-12" delay={0.3}>
          <SectionMilitaryUnits />
        </CardWrapper>

        {/* Registration CTA - standalone, no wrapper */}
        <div className="py-8">
          <SectionRegistration />
        </div>

        {/* Donate */}
        <CardWrapper className="p-8 md:p-12" delay={0.35}>
          <SectionDonate />
        </CardWrapper>

        {/* Partnerships */}
        <CardWrapper className="p-8 md:p-12" delay={0.4}>
          <SectionPartnerships />
        </CardWrapper>

        {/* Bottom spacing */}
        <div className="h-16" />
      </div>
    </main>
    </>
  );
}
