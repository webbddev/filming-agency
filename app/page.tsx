import FAQs from '@/components/faq';
import Footer from '@/components/footer';
import Founders from '@/components/founders';
import Hero from '@/components/hero';
import Navbar from '@/components/navbar';
import Projects from '@/components/projects';
import Statistics from '@/components/statistics';
import Trusted from '@/components/trusted';

export default function Home() {
  return (
    <div className='h-[5000px]'>
      <Navbar />
      <Hero />
      <Trusted />
      <Projects />
      <Founders />
      <Statistics />
      <FAQs />
      <Footer />
    </div>
  );
}
