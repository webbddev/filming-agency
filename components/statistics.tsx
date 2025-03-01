'use client';

import React from 'react';
import { Separator } from '@/components/ui/separator';
import { NumberTicker } from './magicui/number-ticker';

const statsData = [
  { number: '100', suffix: '+', label: 'Clients from 17 Countries' },
  { number: '280', suffix: 'M+', label: 'Millions raised for our clients' },
  { number: '90', suffix: '%', label: 'Of our clients come back' },
  { number: '98', suffix: '', label: 'Net Promoting Score' },
];

type StatCardProps = {
  number: string;
  suffix: string;
  label: string;
};

// Stat card component
const StatCard = ({ number, label, suffix }: StatCardProps) => {
  const numericValue = parseInt(number.replace(/[^0-9]/g, ''));

  return (
    <div className='bg-gray-100 p-6 shadow-sm'>
      <div className='h-14 flex items-center'>
        <NumberTicker
          value={numericValue}
          className='text-5xl font-bold text-black'
        />
        <span className='text-5xl font-bold text-black'>{suffix}</span>
      </div>
      <div className='text-[#7b7b7b] text-sm'>{label}</div>
    </div>
  );
};

const Statistics = () => {

  return (
    <div className='mx-auto 2xl:w-4/5 md:px-16 px-6'>
      <Separator className='my-16' />

      <div className='flex flex-col md:flex-row items-start justify-between'>
        {/* Left content */}
        <div className='md:w-1/4 mb-8 md:mb-0'>
          <h2 className='text-4xl font-bold'>Our Numbers:</h2>
          <p className='text-gray-500 mt-4'>
            With every project we take on, we strive to deliver the best results
            for our clients.
          </p>
        </div>
        {/* Right content */}
        <div className='md:w-2/4 w-full'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            {statsData.map((stat, index) => (
              <StatCard key={index} number={stat.number} label={stat.label} suffix={stat.suffix} />
            ))}
          </div>
        </div>
      </div>

      <Separator className='my-16' />
    </div>
  );
};

export default Statistics;
