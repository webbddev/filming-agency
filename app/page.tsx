import Hero from '@/components/hero';
import Navbar from '@/components/navbar';
import Projects from '@/components/projects';
import Trusted from '@/components/trusted';

export default function Home() {
  return (
    <div className='h-[5000px]'>
      <Navbar />
      <Hero />
      <Trusted />
      <Projects />
    </div>
  );
}
