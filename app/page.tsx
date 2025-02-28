import Hero from '@/components/hero';
import Navbar from '@/components/navbar';
import Trusted from '@/components/trusted';

export default function Home() {
  return (
    <div className='h-[5000px]'>
      <Navbar />
      <Hero />
      <Trusted />
    </div>
  );
}
