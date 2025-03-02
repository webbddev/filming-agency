import { Separator } from '@/components/ui/separator';
import Brands from './components/brands';
import Image from 'next/image';
import Process from './components/process';
import Impact from './components/impact';
import Navbar from '@/components/navbar';
// import Footer from '@/components/footer';
import Industries from './components/industries';
import { servicesData } from './data/services-data';

const Services = () => {
  return (
    <div className='md:min-h-screen bg-white'>
      <Navbar />

      {/* hero section */}

      <div className='pt-32 pb-20 px-6 mx-auto 2xl:w-4/5 md:px-16'>
        <div className='mx-auto flex items-center'>
          <div className='md:w-2/3'>
            <h1 className='text-4xl xl:text-6xl 2xl:text-7xl font-bold mb-8'>
              Bring Your Brand&apos;s Story to Life
            </h1>
            <p className='text-xl text-neutral-500'>
              We produce high-quality photos, videos, and content that capture
              your brand&apos;s essence and engage your audience across all
              platforms
            </p>
          </div>
        </div>
      </div>

      <Brands />
      <Separator className='my-16' />

      {/* services section */}

      <div className='md:py-20 px-6 mx-auto 2xl:w-4/5 md:px-16'>
        <h2 className='text-xl font-bold text-[#7b7b7b] mb-10'>
          / Our Services
        </h2>

        <div className='space-y-16 md:space-y-32'>
          {servicesData.map((service, index) => (
            <div key={index} className='grid grid-cols-1 md:grid-cols-2 gap-10'>
              {/* image section */}
              <div className='w-full'>
                <Image
                  priority
                  width={1200}
                  height={675}
                  src={service.image}
                  alt='image'
                  className='shadow-lg md:w-[640px] h-[400px] object-cover'
                />
              </div>

              {/* content section */}
              <div className='w-full'>
                <h2 className='text-2xl font-bold mb-8'>{service.title}</h2>
                <p className='text-[#7b7b7b] mb-12'>{service.description}</p>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                  {service.benefits?.map((benefit, benefitIndex) => (
                    <div
                      className='flex items-center space-x-2'
                      key={benefitIndex}
                    >
                      <span className='text-[#7b7b7b]'>/ {benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Components from the folder */}
      <Process />
      <Impact />
      <Industries />
      {/* <Footer /> */}
    </div>
  );
};

export default Services;
