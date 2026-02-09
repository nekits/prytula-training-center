import Header from '@/components/shared/Header';
import Footer from '@/components/shared/Footer';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import TrackHeader from '@/components/sections/TrackHeader';
import Courses from '@/components/sections/Courses';
import TacticalMedicineContent from '@/components/sections/TacticalMedicineContent';
import Registration from '@/components/sections/Registration';
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

        {/* Напрямок 1: БпАК */}
        <TrackHeader track="uav" />
        <Courses track="uav" />

        {/* Напрямок 2: Тактична медицина */}
        <TrackHeader track="tactical-medicine" />
        <TacticalMedicineContent />

        <Registration />
        <Partnerships />
      </main>
      <Footer />
    </>
  );
}
