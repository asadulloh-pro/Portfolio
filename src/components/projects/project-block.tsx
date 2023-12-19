import Image from 'next/image';
import Tag from './tag';
import Link from 'next/link';

const ProjectBlock = () => {
  return (
    <Link href={`/projects/1`} className="grid grid-cols-2 gap-[1rem] mt-8 bg-gradient-to-b from-gray-800 to-gray-900 p-5 shadow-2xl shadow-black/20  rounded-[0.5rem] projectblock">
      <div className="">
        <Image
          src="https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2023/10/free-images.jpg"
          alt="image"
          height={100}
          width={100}
          className="w-full h-auto"
        />
      </div>
      <div>
        <h3 className="text-[2rem] text-primary">Mediapark</h3>
        <p className="text-[1rem] text-primary opacity-[0.5] mt-[0.2rem]">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta ad
          distinctio quam rerum quod error accusamus in expedita! Saepe libero
          molestiae deserunt quam quia vitae natus est fugiat sint tenetur.
          Magnam cupiditate veritatis vel fuga eius similique, quae sapiente,
          harum, minima esse praesentium? Reiciendis debitis dicta repellat
          sequi sed expedita laboriosam minus voluptas repellendus eum, ea
          officiis architecto aut iure corporis quibusdam, incidunt doloribus
        </p>
        <div className="flex items-center justify-start gap-[1rem] mt-[1rem] flex-wrap">
          <Tag text="Javascript" />
          <Tag text="React js" />
          <Tag text="Tailwind" />
          <Tag text="Next js" />
          <Tag text="Typescript" />
        </div>
      </div>
    </Link>
  );
};

export default ProjectBlock;
