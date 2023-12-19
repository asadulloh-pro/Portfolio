import ProjectBlock from '@/components/projects/project-block';
import Image from 'next/image';

const Projects = () => {
  return (
    <div className="mt-[4rem] container mx-auto min-h-[100dvh]">
      <picture className='w-full h-auto z-[-1] fixed left-0 right-0 top-0 '>
        <img src="/bg-sea-of-red-lines@2x.png" alt="png" />
      </picture>
      <h1 className="mt-[4rem] text-primary text-[4rem] text-center">
        Projects
      </h1>

      <div className="mt-[2rem] grid gap-[2rem]">
        <ProjectBlock />
        <ProjectBlock />
        <ProjectBlock />
      </div>
    </div>
  );
};

export default Projects;
