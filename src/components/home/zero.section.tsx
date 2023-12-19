
import { GitHubIcon } from '@/assets/svg';
import Link from 'next/link';

const ZeroSection = () => {
  return (
    <div className="min-h-[50rem] flex items-center justify-center flex-col gap-[1rem] start_background">
      <div>
        <h1 className="text-[4rem] text-primary ">
          Become <span className="text-[transparent] bordertext">Pro</span> with
          me
        </h1>
        <div className="flex items-center justify-center gap-[1rem]">
          <Link
            href="https://www.youtube.com/@asadullohpro"
            target='_blank'
            className="py-[0.5rem] px-[1rem] text-main text-[1rem] font-[600] bg-addition rounded-[0.2rem] border border-[transparent] hover:shadow-hovered_primary"
          >
            Free Courses
          </Link>
          <Link
            href="https://github.com/asadulloh-pro"
            target='_blank'
            className="py-[0.5rem] px-[1rem] bg-main text-[1rem] font-[600] text-addition rounded-[0.2rem] border border-addition inline-flex justify-center items-center gap-[0.5rem] hover:shadow-hovered_default"
          >
            <GitHubIcon className="w-[1.5rem] h-[1.5rem]" />
            GitHub
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ZeroSection;
