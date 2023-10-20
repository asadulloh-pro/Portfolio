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

        {/* ZERO SECTION */}
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
        <div className="min-h-[100dvh] container mx-auto grid gap-[4rem]">
          <div className="grid grid-cols-3">
            <div className="col-span-1 flex gap-[1rem] ">
              <picture className="rotate-[6deg] shadow-hovered_default p-[1rem] rounded-[1rem] w-max h-max sticky top-[100px]">
                <img src="/react.svg" alt="image" width={150} height={150} />
              </picture>
            </div>
            <div className="col-span-2 min-h-[400px]">
              <p className="text-primary text-[1.5rem]">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum
                voluptatem enim nam. Quas beatae voluptatum, recusandae
                veritatis possimus a est perferendis. Molestias, nulla voluptas
                commodi sapiente earum eligendi. Veniam, aspernatur?
              </p>
            </div>
          </div>
          <div className="grid grid-cols-3">
            <div className="col-span-2 min-h-[400px]">
              <p className="text-primary text-[1.5rem]">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum
                voluptatem enim nam. Quas beatae voluptatum, recusandae
                veritatis possimus a est perferendis. Molestias, nulla voluptas
                commodi sapiente earum eligendi. Veniam, aspernatur?
              </p>
            </div>
            <div className="col-span-1 flex justify-end gap-[1rem]">
              <picture className="rotate-[-6deg] shadow-hovered_default p-[1rem] rounded-[1rem] w-max h-max sticky top-[100px]">
                <img src="/next.svg" alt="image" width={150} height={150} />
              </picture>
            </div>
          </div>
          <div className="grid grid-cols-3 ">
            <div className="col-span-1 flex gap-[1rem]">
              <picture className="rotate-[-14deg] shadow-hovered_default rounded-[1rem] overflow-hidden  w-max h-max sticky top-[100px]">
                <img
                  src="/typescript.svg"
                  alt="image"
                  width={170}
                  height={170}
                  className=""
                />
              </picture>
            </div>
            <div className="col-span-2 min-h-[400px]">
              <p className="text-primary text-[1.5rem]">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum
                voluptatem enim nam. Quas beatae voluptatum, recusandae
                veritatis possimus a est perferendis. Molestias, nulla voluptas
                commodi sapiente earum eligendi. Veniam, aspernatur?
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export function getStaticProps() {
  return { props: { title: 'My Title', content: '...' } };
}
