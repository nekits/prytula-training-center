import Header from '@/components/shared/Header';
import Footer from '@/components/shared/Footer';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Advantages from '@/components/sections/Advantages';
import KeyNumbers from '@/components/sections/KeyNumbers';
import Courses from '@/components/sections/Courses';
import MilitaryUnits from '@/components/sections/MilitaryUnits';
import Registration from '@/components/sections/Registration';
import Donate from '@/components/sections/Donate';
import Partnerships from '@/components/sections/Partnerships';
import SmoothScroll from '@/components/SmoothScroll';

export default function HomePage() {
  return (
    <>
      <SmoothScroll />
      <Header />
      <main>
        <Hero />
        <About />
        <Advantages />
        <KeyNumbers />
        <Courses />
        <MilitaryUnits />
        <Registration />
        <Donate />
        <Partnerships />
      </main>
      <Footer />
    </>
  );
}
