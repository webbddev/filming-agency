'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { impactData } from '../data/services-data';

// ImpactCardProps type and ImpactCard component
type ImpactCardProps = {
  title: string;
  subtitle: string;
  value: string;
  description: string;
};
const ImpactCard = ({
  title,
  subtitle,
  value,
  description,
}: ImpactCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 0.5 }}
      className='flex flex-col p-8 border-l border-black h-80 divide-y divide-gray-200'
    >
      <div className='flex flex-col h-full justify-between'>
        <div className='space-y-6'>
          <h3 className='text-xl font-medium'>{title}</h3>
          <p className='text-gray-500 text-sm'>{subtitle}</p>
        </div>
        {/* numerical/statistical value and description */}
        <motion.div
          initial={{ scale: 0.5 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: false }}
          transition={{ delay: 0.2, duration: 1 }}
          className='text-6xl md:text-7xl font-normal'
        >
          {value}
        </motion.div>

        <div>
          <p className='text-gray-600 text-sm leading-relaxed'>{description}</p>
        </div>
      </div>
    </motion.div>
  );
};

const Impact = () => {
  return (
    <div className='2xl:w-4/5 md:mx-auto md:px-16 px-6 py-16 md:pb-32'>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className='mb-16 space-y-2'
      >
        <h2 className='text-4xl font-bold text-gray-900 mb-4'>Our Impact</h2>
        <p className='text-[#7b7b7b] text-lg'>
          Our process is designed to deliver exceptional results and ensure a
          seamless experience from start to finish.
        </p>
      </motion.div>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16'>
        {impactData.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <ImpactCard {...item} />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Impact;
