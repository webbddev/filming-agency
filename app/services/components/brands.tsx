import { cn } from '@/lib/utils';
import { Marquee } from '@/components/magicui/marquee';
import { projectsData } from '../data/services-data';

const VideoCard = ({
  videoSrc,
  className,
}: {
  videoSrc: string;
  width: number;
  height: number;
  className: string;
}) => {
  return (
    <div className={cn('relative cursor-pointer overflow-hidden mx-4')}>
      <div className='flex flex-row items-center'>
        <div className={cn('relative', className)}>
          <video
            src={videoSrc}
            autoPlay
            muted
            loop
            className='w-full h-full object-cover'
          />
        </div>
      </div>
    </div>
  );
};
//
const Brands = () => {
  return (
    <div className='relative flex w-full flex-col items-center justify-center overflow-hidden py-8'>
      <Marquee vertical={false} pauseOnHover className='[--duration:20s]'>
        {projectsData.map((project, index) => (
          <VideoCard key={index} {...project} />
        ))}
      </Marquee>
    </div>
  );
};

export default Brands;
