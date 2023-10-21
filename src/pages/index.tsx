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
          <picture className="absolute top-[20%] right-[-30%] opacity-[0.4] z-[-1]">
            <img src="/logo.png" alt="imagelogo" width={1000} height={1000} />
          </picture>
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
              <div className="sticky top-[100px] flex flex-col h-max gap-[1rem] rotate-[6deg]">
                <picture className="shadow-hovered_default p-[1rem] rounded-[1rem] w-max h-max">
                  <img
                    src="/mediapark.svg"
                    alt="image"
                    width={200}
                    height={180}
                  />
                </picture>
                <p className="text-addition text-center">
                  July 2023 - Present
                </p>
              </div>
            </div>
            <div className="col-span-2 min-h-[400px]">
              <p className="text-primary text-[3rem]">Frontend Team Lead</p>
              <p className="text-background text-[1.5rem] opacity-[0.7]">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum
                voluptatem enim nam. Quas beatae voluptatum, recusandae
                veritatis possimus a est perferendis. Molestias, nulla voluptas
                commodi sapiente earum eligendi. Veniam, aspernatur?
              </p>
            </div>
          </div>
          <div className="grid grid-cols-3">
            <div className="col-span-2 min-h-[400px]">
              <p className="text-primary text-[3rem]">Frontend Team Lead</p>
              <p className="text-primary text-[1.5rem] opacity-[0.7]">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum
                voluptatem enim nam. Quas beatae voluptatum, recusandae
                veritatis possimus a est perferendis. Molestias, nulla voluptas
                commodi sapiente earum eligendi. Veniam, aspernatur?
              </p>
            </div>
            <div className="col-span-1 flex justify-end gap-[1rem]">
              <div className="sticky top-[100px] h-max flex flex-col gap-[1rem] rotate-[-6deg]">
                <picture className="shadow-hovered_default p-[1rem] rounded-[1rem] w-max h-max">
                  <img src="/natija.svg" alt="image" width={200} height={180} />
                </picture>
                <p className="text-addition text-center">
                  September 2022 - October 2023
                </p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-3 ">
            <div className="col-span-1 flex gap-[1rem]">
              <div className="sticky top-[100px] h-max flex flex-col gap-[1rem] rotate-[6deg]">
                <picture className="shadow-hovered_default p-[1rem] rounded-[1rem] w-max h-max">
                  <img src="/exadot.svg" alt="image" width={200} height={180} />
                </picture>
                <p className="text-addition text-center">
                  March 2022 - September 2022
                </p>
              </div>
            </div>
            <div className="col-span-2 min-h-[400px]">
              <p className="text-primary text-[3rem]">Frontend Engineer</p>
              <p className="text-primary text-[1.5rem] opacity-[0.7]">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum
                voluptatem enim nam. Quas beatae voluptatum, recusandae
                veritatis possimus a est perferendis. Molestias, nulla voluptas
                commodi sapiente earum eligendi. Veniam, aspernatur?
              </p>
            </div>
          </div>
          <div className="grid grid-cols-3">
            <div className="col-span-2 min-h-[400px]">
              <p className="text-primary text-[3rem]">Frontend Engineer</p>
              <p className="text-primary text-[1.5rem] opacity-[0.7]">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum
                voluptatem enim nam. Quas beatae voluptatum, recusandae
                veritatis possimus a est perferendis. Molestias, nulla voluptas
                commodi sapiente earum eligendi. Veniam, aspernatur?
              </p>
            </div>
            <div className="col-span-1 flex justify-end gap-[1rem]">
              <div className="sticky top-[100px] h-max flex flex-col gap-[1rem] rotate-[-6deg]">
                <picture className="shadow-hovered_default p-[1rem] rounded-[1rem] w-max h-max">
                  <img src="/soffit.svg" alt="image" width={200} height={180} />
                </picture>
                <p className="text-addition text-center">
                  July 2021 - March 2022
                </p>
              </div>
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
