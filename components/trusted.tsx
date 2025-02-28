import { Marquee } from '@/components/magicui/marquee';
import { cn } from '@/lib/utils';

import Image from 'next/image';

const companies = [
  { name: 'coca-cola', logo: '/logos/logo1.svg' },
  { name: 'amazon', logo: '/logos/logo2.svg' },
  { name: 'forbes', logo: '/logos/logo3.svg' },
  { name: 'booking', logo: '/logos/logo4.svg' },
  { name: 'microsoft', logo: '/logos/logo5.svg' },
  { name: 'paypal', logo: '/logos/logo6.svg' },
  { name: 'redbull', logo: '/logos/logo7.svg' },
];

const firstRow = companies.slice(0, Math.ceil(companies.length / 2));
const secondRow = companies.slice(Math.ceil(companies.length / 2));

const CompanyLogo = ({ name, logo }: { name: string; logo: string }) => {
  return (
    <div className='mx-8 flex items-center justify-center'>
      <Image
        priority
        width={200}
        height={200}
        src={logo}
        alt={`${name} logo`}
        className='w-16 h-16'
      />
    </div>
  );
};

const Trusted = () => {
  return (
    <div className={cn('w-full overflow-hidden bg-white py-12 ')}>
      <div className='mb-8 text-center'>
        <h2 className='text-2xl font-semibold text-gray-900 mb-4'>
          Trusted by Moldova&apos;s leading companies
        </h2>
        <p className='text-gray-600'>
          We go beyond expectations, delivering exceptional quality and results
          that resonate
        </p>
      </div>

      <div className='flex w-full flex-col items-center mt-10 md:mt-0 '>
        <Marquee pauseOnHover className='[--duration:30s]'>
          {firstRow.map((company, idx) => (
            <CompanyLogo key={`${company.name}-${idx}`} {...company} />
          ))}
        </Marquee>
        <Marquee
          reverse
          pauseOnHover
          className='[--duration:30s] mt-10 md:mt-0'
        >
          {secondRow.map((company, idx) => (
            <CompanyLogo key={`${company.name}-${idx}`} {...company} />
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default Trusted;
