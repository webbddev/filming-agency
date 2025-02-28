'use client';

import React from 'react';
import { motion, useScroll, useTransform, easeOut } from 'framer-motion';
import Link from 'next/link';
import { WordRotate } from './magicui/word-rotate';

const Hero = () => {
  const { scrollY } = useScroll();

  // Transform video size and width based on scroll with eased transitions
  const videoScale = useTransform(scrollY, [0, 500], [0.9, 1], {
    ease: easeOut,
  });
  const videoWidth = useTransform(scrollY, [0, 500], ['65%', '100%'], {
    ease: easeOut,
  });
  const videoBorderRadius = useTransform(scrollY, [0, 500], [32, 0], {
    ease: easeOut,
  });

  // Enhanced content animations
  const contentVariants = {
    hidden: {
      opacity: 0,
      y: 40,
      filter: 'blur(30px)', // Apply blur filter to text
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)', // Remove blur filter
      transition: {
        duration: 0.9,
        ease: [0.25, 0.1, 0, 1],
        staggerChildren: 0.5, // This creates the 0.1s delay between spans
      },
    },
  };

  const buttonVariants = {
    hidden: {
      opacity: 0,
      y: 20,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0, 1],
        delay: 0.8,
      },
    },
  };

  const videoContainerVariants = {
    hidden: {
      opacity: 0,
      y: 60,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        delay: 0.8,
        duration: 1.2,
        ease: [0.25, 0.1, 0, 1],
      },
    },
  };

  return (
    <div className='flex flex-col items-center'>
      {/* Main Content Section */}
      <motion.div
        className='w-full flex justify-center items-center md:px-0 mt-32 md:mt-52 bg-white'
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true }}
        variants={contentVariants}
      >
        <div className='md:max-w-5xl text-center px-8'>
          <motion.h1
            variants={contentVariants}
            className='text-4xl font-extrabold md:text-6xl md:font-bold text-gray-900 mb-4'
          >
            <motion.span className='inline-block' variants={contentVariants}>
              Crafting Compelling{' '}
              <WordRotate words={['Content', 'Videos', 'Stunning Photos']} duration={2400}/>
            </motion.span>
            <br />
            <motion.span className='inline-block' variants={contentVariants}>
              To Elevate Your Brand
            </motion.span>
          </motion.h1>

          <motion.p
            variants={contentVariants}
            className='text-xl text-[#7b7b7b] mb-8'
          >
            We&apos;re filmmakers, photographers, and marketers passionate about
            helping businesses <br />
            tell their stories and connect with their audience
          </motion.p>

          <motion.div
            variants={buttonVariants}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}
            className='flex gap-x-3 md:gap-x-6 justify-center mb-10'
          >
            <Link
              href={'/projects'}
              className='bg-black text-white 
              px-6 md:px-8 py-3 rounded-full text-lg font-medium transition-all hover:shadow-lg'
            >
              View Our Work
            </Link>

            <motion.a
              href='https://meetings.hubspot.com/productizedos/epic-labs?uuid=fca92f30-4111-4445-9498-af335bb840af'
              target='_blank'
              rel='noopener noreferrer'
              className='bg-red-500 text-white
               px-6 md:px-8 py-3 rounded-full text-lg
                font-medium hover:bg-red-600 transition-all hover:shadow-lg inline-block'
            >
              Book a meeting
            </motion.a>
          </motion.div>
        </div>
      </motion.div>

      {/* Video Section */}
      <motion.div
        className='flex justify-center w-full md:px-0'
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true }}
        variants={videoContainerVariants}
      >
        <motion.div
          style={{
            width: videoWidth,
            scale: videoScale,
            borderRadius: videoBorderRadius,
            overflow: 'hidden',
          }}
          className='relative w-full md:w-auto'
        >
          <video
            src='/hero-video.mp4'
            autoPlay
            muted
            loop
            className='w-full h-full object-cover pointer-events-none'
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;
