'use client';

import { Marquee } from '@/components/magicui/marquee';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';

const projects = [
  {
    src: '/img/projects/project-1.jpg',
    name: 'Milina Warehouse',
    logo: '/img/logos/logo-1.svg',
    description: "Created video content related to company's anniversary",
    details:
      'Comprehensive campaign showcasing back-to-school products with dynamic storytelling and visual excellence. We produced a series of high-quality videos that captured the spirit of the anniversary, highlighting key milestones and achievements.',
    tags: ['Video Production', 'Creative Direction', 'Social Media', 'Anniversary Campaign'],
    className: '',
  },
  {
    src: '/img/projects/project-2.jpg',
    name: 'Scenery Selection',
    logo: '/airbnb-logo.png',
    description: 'Selecting the best scenery for author\'s novel',
    details: 'Crafted a user-centric landing page for Airbnb, focusing on intuitive navigation and visually appealing design to enhance user engagement and drive bookings.',
    tags: ['UI/UX Design', 'Web Design', 'Landing Page', 'User Experience'],
    className: '',
  },
  {
    src: '/img/projects/project-3.jpg',
    name: 'Audi',
    logo: '/audi-logo.png',
    description: 'Developed Audi car configurator',
    details: 'Engineered a sophisticated car configurator for Audi, allowing users to customize their vehicles with real-time visualizations and detailed specifications, improving the online purchasing experience.',
    tags: ['Web Development', 'Interactive Design', 'E-commerce', 'Car Configurator'],
    className: '',
  },
  {
    src: '/img/projects/project-4.jpg',
    name: 'Paypal',
    logo: '/paypal-logo.png',
    description: 'Integrated Paypal payment gateway',
    details: 'Seamlessly integrated the PayPal payment gateway into an e-commerce platform, ensuring secure and efficient transactions for customers, enhancing the overall checkout experience.',
    tags: ['Payment Integration', 'E-commerce', 'Web Development', 'API Integration'],
    className: '',
  },
  {
    src: '/img/projects/project-5.jpg',
    name: 'Sony',
    logo: '/sony-logo.png',
    description: 'Developed Sony Playstation website',
    details: 'Built a dynamic and engaging website for Sony PlayStation, featuring interactive elements, immersive visuals, and a user-friendly interface to promote gaming products and services.',
    tags: ['Web Development', 'Interactive Design', 'Gaming', 'E-commerce'],
    className: '',
  },
  {
    src: '/img/projects/project-6.jpg',
    name: 'Under Armour',
    logo: '/under-armour-logo.png',
    description: 'Designed Under Armour fitness app',
    details: 'Designed an intuitive and motivating fitness app for Under Armour, incorporating personalized workout plans, progress tracking, and social features to enhance user engagement and fitness goals.',
    tags: ['Mobile App Design', 'UI/UX Design', 'Fitness', 'App Development'],
    className: '',
  },
  {
    src: '/img/projects/project-7.jpg',
    name: 'Redbull',
    logo: '/redbull-logo.png',
    description: 'Created Redbull energy drink campaign',
    details: 'Developed a high-energy digital campaign for Red Bull, featuring dynamic content, social media integration, and interactive experiences to amplify brand awareness and drive consumer engagement.',
    tags: ['Digital Marketing', 'Social Media Marketing', 'Campaign Development', 'Content Creation'],
    className: '',
  },
  {
    src: '/img/projects/project-8.png',
    name: 'Dyson',
    logo: '/spalding-logo.png',
    description: 'Dyson & Maximum Electronics: A Collaborative Journey in Product Storytelling',
    details: 'Partnered with Dyson and Maximum Electronics to create compelling product reviews and storytelling content, showcasing the innovation and performance of their latest products.',
    tags: ['Product Review', 'Content Creation', 'Collaboration', 'Digital Marketing'],
    className: '',
  },
  {
    src: '/img/projects/project-9.jpg',
    name: 'Visa',
    logo: '/visa-logo.png',
    description: 'Integrated Visa payment gateway',
    details: 'Successfully integrated the Visa payment gateway, providing secure and reliable transaction processing for online customers, improving the efficiency of the checkout process.',
    tags: ['Payment Integration', 'E-commerce', 'Web Development', 'API Integration'],
    className: '',
  },
  {
    src: '/img/projects/project-10.png',
    name: 'Maximum Riscani',
    logo: '/nord-logo.png',
    description: 'Designed Maximum\'s store opening ceremony',
    details: 'Redesigned the Nordstrom e-commerce website, focusing on a clean, modern aesthetic and improved navigation to enhance the online shopping experience and increase conversions.',
    tags: ['E-commerce Design', 'UI/UX Design', 'Web Design', 'User Experience'],
    className: '',
  },
];

const firstRow = projects.slice(0, projects.length);
const secondRow = projects.slice(3, projects.length);
const thirdRow = projects.slice(6, projects.length);

// Individual card component for project preview
// Displays project image with overlay containing name and description
const ReviewCard = ({
  src,
  name,
  description,
  onClick,
}: {
  src: string;
  name: string;
  description: string;
  onClick: () => void;
}) => {
  return (
    <motion.figure
      className='relative cursor-pointer overflow-hidden group'
      onClick={onClick}
    >
      <div className='relative'>
        <Image
          width={500}
          height={500}
          src={src}
          alt='projects'
          className='object-cover w-full'
        />
        <div className='absolute bottom-0 left-0 p-4 bg-gradient-to-t from-black/60 to-transparent w-full'>
          <h3 className='text-white text-xl font-semibold'>{name}</h3>
          <p className='text-white/80 text-sm'>{description}</p>
        </div>
      </div>
    </motion.figure>
  );
};

// Sliding panel component that shows detailed project information
// Appears when a project card is clicked
const ProjectDetailsSlider = ({
  project,
  onClose,
}: {
  project: (typeof projects)[0];
  onClose: () => void;
}) => {
  return (
    <motion.div
      initial={{ x: '100%' }}
      animate={{ x: 0 }}
      exit={{ x: '100%' }}
      transition={{ type: 'spring', damping: 25, stiffness: 200 }}
      className='fixed right-0 top-0 h-full md:w-2/5 bg-white shadow-lg p-6 z-50 cursor-pointer'
    >
      <button
        onClick={onClose}
        className='absolute top-4 right-4 text-gray-500 hover:text-gray-700'
      >
        ×
      </button>

      <div className='mt-8'>
        <h2 className='text-2xl font-bold mb-4'>{project.name}</h2>
        <Image
          src={project.src}
          alt={project.name}
          width={500}
          height={300}
          className='w-full rounded-lg mb-6 object-cover h-60'
        />
        <p className='text-gray-600 mb-4'>{project.description}</p>

        <div className='space-y-4'>
          <h3 className='font-semibold text-lg'>Project Details</h3>
          <p className='text-gray-600'>{project.details}</p>
          <div className='flex flex-wrap gap-2'>
            {project.tags?.map((tag, index) => (
              <span
                key={index}
                className='px-3 py-1 bg-gray-100 rounded-full text-sm'
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// Main Projects section component
// Features:
// - Vertical scrolling marquee with project cards
// - Interactive project cards that reveal detailed information
// - Responsive layout with 3 columns on desktop
// - Pause animation on hover or when details panel is open
const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<
    (typeof projects)[0] | null
  >(null);

  return (
    <section className='w-full bg-white py-16 md:mx-auto 2xl:w-4/5 md:px-16'>
      <div className='mx-auto mb-12 px-6 md:px-0'>
        <h2 className='text-4xl font-bold text-gray-900 mb-4'>
          Explore our projects
        </h2>
        <p className='text-[#7b7b7b] text-lg'>
          Our projects showcase the best visuals and storytelling techniques.
        </p>
      </div>

      <div className='w-full h-[800px] flex items-center justify-center overflow-hidden py-8'>
        
        <Marquee
          vertical
          pauseOnHover
          className='[--duration:60s]'
          paused={selectedProject !== null}
        >
          {firstRow.map((review, index) => (
            <ReviewCard
              key={index}
              {...review}
              onClick={() => setSelectedProject(review)}
            />
          ))}
        </Marquee>

        <Marquee
          vertical
          pauseOnHover
          className='[--duration:60s]'
          paused={selectedProject !== null}
        >
          {secondRow.map((review, index) => (
            <ReviewCard
              key={index}
              {...review}
              onClick={() => setSelectedProject(review)}
            />
          ))}
        </Marquee>

        <Marquee
          vertical
          pauseOnHover
          className='[--duration:60s] hidden md:flex'
          paused={selectedProject !== null}
        >
          {thirdRow.map((review, index) => (
            <ReviewCard
              key={index}
              {...review}
              onClick={() => setSelectedProject(review)}
            />
          ))}
        </Marquee>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              className='fixed inset-0 bg-black z-40'
              onClick={() => setSelectedProject(null)}
            />
            <ProjectDetailsSlider
              project={selectedProject}
              onClose={() => setSelectedProject(null)}
            />
          </>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
