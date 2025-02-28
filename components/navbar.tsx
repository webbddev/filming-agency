'use client';

import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from 'framer-motion';

const links = [
  { href: '/services', label: 'Services' },
  { href: '/projects', label: 'Projects' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

const Navbar = () => {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isHomePage = pathname === '/';
  const [hasScrolled, setHasScrolled] = useState(false);
  const { scrollY } = useScroll();
  const [prevScrollY, setPrevScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsActive(true);
      } else {
        setIsActive(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useMotionValueEvent(scrollY, 'change', (latest) => {
    if (!mobileMenuOpen) {
      const scrollingUp = latest < prevScrollY;
      const shouldShow = scrollingUp || latest < 50;
      setIsVisible(shouldShow);

      if (latest > 50 && !hasScrolled) {
        setHasScrolled(true);
      } else if (latest < 50) {
        setHasScrolled(false);
      }
    }
    setPrevScrollY(latest);
  });

  const menuVariants = {
    open: {
      opacity: 1,
      height: 'auto',
    },
    closed: {
      opacity: 0,
      height: 0,
    },
  };

  const navbarVariants = {
    initial: isHomePage
      ? {
          y: -100,
          opacity: 0,
        }
      : {
          y: 0,
          opacity: 1,
        },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        duration: 0.8,
        delay: isHomePage && !hasScrolled ? 1.8 : 0,
      },
    },
    hidden: {
      y: -100,
      opacity: 0,
      transition: {
        duration: 0.3,
        ease: 'easeInOut',
      },
    },
  };

  return (
    <AnimatePresence>
      <motion.nav
        key='navbar'
        className={`${
          isActive ? 'h-[60px] lg:h-[80px]' : 'h-[80px] lg:h-[100px]'
        } fixed top-0 left-0 right-0 bg-white z-50 transition-all duration-500  border-b-blue-100 border-neutral-300 shadow-md`}
        initial='initial'
        animate={isVisible ? 'visible' : 'hidden'}
        variants={navbarVariants}
      >
        <div className='mx-auto flex justify-between items-center h-full px-6 md:px-10'>
          <Link href={'/'} className='flex items-center space-x-1'>
            <div className='rounded-full bg-black w-6 h-6 ' />
            <span className='text-xl font-bold'>Awesome Studio</span>
          </Link>

          {/* desktop menu */}
          <div className='hidden md:flex space-x-8'>
            {links.map((link) => (
              <Link
                href={link.href}
                key={link.href}
                className={`${
                  pathname === link.href ? 'text-black' : 'text-neutral-400'
                } hover:text-black transition-colors duration-200`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* mobile menu button */}
          <button
            className='md:hidden'
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className='w-6 h-6 text-neutral-500' />
            ) : (
              <Menu className='w-6 h-6 text-neutral-500' />
            )}
          </button>
        </div>

        {/* mobile menu */}
        <motion.div
          className='fixed bg-white w-full left-0 -z-10 transition-all duration-300 overflow-hidden'
          // className={`${mobileMenuOpen ? 'max-h-screen' : 'max-h-0'} ${
          //   isActive ? 'top-[60px] lg:top-[90px]' : 'top-[80px] lg:top-[120px]'
          // } fixed bg-white w-full left-0 -z-10 transition-all duration-300 overflow-hidden`}
          initial='closed'
          animate={mobileMenuOpen ? 'open' : 'closed'}
          variants={menuVariants}
        >
          <div className='flex flex-col space-y-4 p-4'>
            {links.map((link) => (
              <Link
                href={link.href}
                key={link.href}
                className={`${
                  pathname === link.href ? 'text-black' : 'text-neutral-400'
                } hover:text-black`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </motion.div>
      </motion.nav>

      {/*overlay for mobile menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className='fixed inset-0 bg-blue-800 bg-opacity-30 z-40 md:hidden'
          onClick={() => setMobileMenuOpen(false)}
        />
      )}
    </AnimatePresence>
  );
};

export default Navbar;

// THE CODE BELOW IS REFACTORED CODE FROM THE CODE ABOVE BUT HAS TO BE REFACTORED FURTHER TO ADJUST THE COLOR WHEN MOBILE MENU IS OPEN
// 'use client';

// import { Menu, X } from 'lucide-react';
// import Link from 'next/link';
// import { usePathname } from 'next/navigation';
// import { useState, useEffect } from 'react';
// import { AnimatePresence, motion } from 'framer-motion';

// const links = [
//   { href: '/services', label: 'Services' },
//   { href: '/projects', label: 'Projects' },
//   { href: '/about', label: 'About' },
//   { href: '/contact', label: 'Contact' },
// ];

// const Navbar = () => {
//   const pathname = usePathname();
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const [isActive, setIsActive] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 50) {
//         setIsActive(true);
//       } else {
//         setIsActive(false);
//       }
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const menuVariants = {
//     open: {
//       opacity: 1,
//       height: 'auto',
//     },
//     closed: {
//       opacity: 0,
//       height: 0,
//     },
//   };

//   const navbarVariants = {
//     visible: {
//       y: 0,
//       opacity: 1,
//       transition: {
//         type: 'spring',
//         duration: 0.8,
//       },
//     },
//     hidden: {
//       y: -100,
//       opacity: 0,
//       transition: {
//         duration: 0.3,
//         ease: 'easeInOut',
//       },
//     },
//   };

//   return (
//     <AnimatePresence>
//       <motion.nav
//         key='navbar'
//         className={`${
//           isActive
//             ? 'h-[60px] lg:h-[80px] shadow-[0_8px_30px_rgb(0,0,0,0.12)]'
//             : 'h-[80px] lg:h-[100px]'
//         } fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-sm z-50 transition-all duration-500 border-b border-neutral-100`}
//         initial='visible'
//         animate='visible'
//         variants={navbarVariants}
//       >
//         <div className='mx-auto flex justify-between items-center h-full px-6 md:px-10'>
//           <Link href={'/'} className='flex items-center space-x-1'>
//             <div className='rounded-full bg-black w-6 h-6 ' />
//             <span className='text-xl font-bold'>Awesome Studio</span>
//           </Link>

//           {/* desktop menu */}
//           <div className='hidden md:flex space-x-8'>
//             {links.map((link) => (
//               <Link
//                 href={link.href}
//                 key={link.href}
//                 className={`${
//                   pathname === link.href ? 'text-black' : 'text-neutral-400'
//                 } hover:text-black transition-colors duration-200`}
//               >
//                 {link.label}
//               </Link>
//             ))}
//           </div>

//           {/* mobile menu button */}
//           <button
//             className='md:hidden'
//             onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//           >
//             {mobileMenuOpen ? (
//               <X className='w-6 h-6 text-neutral-500' />
//             ) : (
//               <Menu className='w-6 h-6 text-neutral-500' />
//             )}
//           </button>
//         </div>

//         {/* mobile menu */}
//         <motion.div
//           className='fixed bg-white w-full left-0 -z-10 transition-all duration-300 overflow-hidden'
//           initial='closed'
//           animate={mobileMenuOpen ? 'open' : 'closed'}
//           variants={menuVariants}
//         >
//           <div className='flex flex-col space-y-4 p-4'>
//             {links.map((link) => (
//               <Link
//                 href={link.href}
//                 key={link.href}
//                 className={`${
//                   pathname === link.href ? 'text-black' : 'text-neutral-400'
//                 } hover:text-black`}
//               >
//                 {link.label}
//               </Link>
//             ))}
//           </div>
//         </motion.div>
//       </motion.nav>

//       {/*overlay for mobile menu */}
//       {mobileMenuOpen && (
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//           className='fixed inset-0 bg-blue-800 bg-opacity-30 z-40 md:hidden'
//           onClick={() => setMobileMenuOpen(false)}
//         />
//       )}
//     </AnimatePresence>
//   );
// };

// export default Navbar;
