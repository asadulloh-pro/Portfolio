import ZeroSection from '@/components/home/zero.section';
import Head from 'next/head';
import WorkLine from '@/components/shared/workline';
import ContactForm from '@/components/shared/contactform';
import SkillCard from '@/components/shared/skill-card';
import Slider from '@/components/shared/slider';

const skils = [
  {
    icon: '/react.svg',
    title: 'React js',
    text: ` Lorem ipsum, dolor sit amet consectetur adipisicing elit.
    Voluptates laboriosam aperiam ipsum sint? Veniam voluptate rem
    itaque cum ratione, esse eius explicabo aspernatur dolor sequi
    similique eaque, culpa corporis temporibus.`,
  },
  {
    icon: '/next.svg',
    title: 'Next js',
    text: ` Lorem ipsum, dolor sit amet consectetur adipisicing elit.
    Voluptates laboriosam aperiam ipsum sint? Veniam voluptate rem
    itaque cum ratione, esse eius explicabo aspernatur dolor sequi
    similique eaque, culpa corporis temporibus.`,
  },
  {
    icon: '/typescript.svg',
    title: 'Typescript',
    text: ` Lorem ipsum, dolor sit amet consectetur adipisicing elit.
    Voluptates laboriosam aperiam ipsum sint? Veniam voluptate rem
    itaque cum ratione, esse eius explicabo aspernatur dolor sequi
    similique eaque, culpa corporis temporibus.`,
  },
  {
    icon: '/redux.svg',
    title: 'Redux',
    text: ` Lorem ipsum, dolor sit amet consectetur adipisicing elit.
    Voluptates laboriosam aperiam ipsum sint? Veniam voluptate rem
    itaque cum ratione, esse eius explicabo aspernatur dolor sequi
    similique eaque, culpa corporis temporibus.`,
  },
  {
    icon: '/nodejs.svg',
    title: 'Node js',
    text: ` Lorem ipsum, dolor sit amet consectetur adipisicing elit.
    Voluptates laboriosam aperiam ipsum sint? Veniam voluptate rem
    itaque cum ratione, esse eius explicabo aspernatur dolor sequi
    similique eaque, culpa corporis temporibus.`,
  },
  {
    icon: '/drizzle.svg',
    title: 'Drizzle ORM',
    text: ` Lorem ipsum, dolor sit amet consectetur adipisicing elit.
    Voluptates laboriosam aperiam ipsum sint? Veniam voluptate rem
    itaque cum ratione, esse eius explicabo aspernatur dolor sequi
    similique eaque, culpa corporis temporibus.`,
  },
];

export default function Home() {
  return (
    <>
      <Head>
        <title>Asadulloh Pro</title>
      </Head>
      <div className="mb-[100px]">
        
        <ZeroSection />
        <WorkLine />
        <div className="container mx-auto mt-[148px]">
          <Slider
            title="Skills"
            config={{
              breakpoints: {
                '(min-width: 400px)': {
                  slides: { perView: 3, spacing: 20 },
                },
                '(min-width: 1000px)': {
                  slides: { perView: 3, spacing: 20 },
                },
              },
              slides: { perView: 3, spacing: 20 },
              loop: true,
            }}
          >
            {skils.map((elem) => (
              <Slider.Item key={elem.icon}>
                <SkillCard
                  icon={elem.icon}
                  title={elem.title}
                  text={elem.text}
                />
              </Slider.Item>
            ))}
          </Slider>
        </div>

        <ContactForm />
      </div>
    </>
  );
}

export function getStaticProps() {
  return { props: { title: 'My Title', content: '...' } };
}
