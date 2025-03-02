import React from 'react';
import { industriesData } from '../data/services-data';

const Industries = () => {
  return (
    <div className='min-h-screen bg-[#17191f] text-white px-6 py-16'>
      <div className='mx-auto 2xl:w-4/5 md:px-10'>
        {/* Header */}
        <h1 className='text-4xl font-bold mb-8'>Industries</h1>
        <p className='md:text-xl mb-24 max-w-2xl'>
          We unite with big brands and startups in various industries to create award-winning work.
        </p>

        {/* Industries List */}
        <div className='space-y-12'>
          {industriesData.map((industry, index) => (
            <div key={index} className='border-t border-gray-700 py-8'>
              <div className='grid grid-cols-1 md:grid-cols-12 gap-8'>
                {/* Title Column - 4 columns wide */}
                <div className='md:col-span-4'>
                  <h2 className='text-2xl font-semibold'>{industry.title} \</h2>
                </div>

                {/* Description Column - 4 columns wide */}
                <div className='md:col-span-4'>
                  <p className='text-gray-300'>{industry.description}</p>
                </div>

                {/* Companies Column - 4 columns wide */}
                <div className='md:col-span-4'>
                  <p className='text-gray-300'>{industry.companies}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Industries;
