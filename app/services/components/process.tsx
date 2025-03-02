import React from 'react';
import { stepsProcessData } from '../data/services-data';

const Process = () => {
  return (
    <div className='2xl:w-4/5 md:mx-auto py-32 md:pb-32  px-6 md:px-16 '>
      <div className='mx-auto mb-12'>
        <h2 className='text-4xl    font-bold text-black mb-4'>
          We keep it simple
        </h2>
        <p className='text-[#7b7b7b] text-lg'>
          Our process is designed to deliver exceptional results and ensure a
          seamless experience from start to finish.
        </p>
      </div>
      <div className='space-y-12'>
        {stepsProcessData.map((step) => (
          <div key={step.number} className='flex gap-8'>
            <div className='flex-none'>
              <div className='text-3xl font-bold text-gray-900'>
                {step.number}.
              </div>
            </div>
            <div className='flex-1 border-t border-gray-200 pt-3'>
              <h3 className='text-lg font-semibold text-gray-900 mb-2'>
                {step.title}
              </h3>
              <p className='text-[#7b7b7b] leading-relaxed'>
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Process;
