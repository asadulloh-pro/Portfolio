import { GitHubIcon } from '@/assets/svg';
import MainLayout from '@/components/shared/main-layout';
import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Head>
        <title>Asadulloh Pro</title>
      </Head>
      <div>
        <MainLayout />
        <div className="min-h-[100dvh] flex items-center justify-center flex-col gap-[1rem]">
          <h1 className="text-[4rem] text-primary">
            Become <span className="text-[transparent] bordertext">Pro</span>{' '}
            with me
          </h1>
          <div className="flex items-center justify-center gap-[1rem]">
            <Link
              href="#"
              className="py-[0.5rem] px-[1rem] text-main text-[1rem] font-[600] bg-addition rounded-[0.2rem] border border-[transparent] hover:shadow-hovered_primary"
            >
              Free Courses
            </Link>
            <Link
              href="#"
              className="py-[0.5rem] px-[1rem] bg-main text-[1rem] font-[600] text-addition rounded-[0.2rem] border border-addition inline-flex justify-center items-center gap-[0.5rem] hover:shadow-hovered_default"
            >
              <GitHubIcon className="w-[1.5rem] h-[1.5rem]" />
              GitHub
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export function getStaticProps() {
  return { props: { title: 'My Title', content: '...' } };
}
