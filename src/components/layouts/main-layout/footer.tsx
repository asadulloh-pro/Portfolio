import { LinkedinIcon, TelegramIcon, YoutubeIcon } from "@/assets/svg";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full min-h-[2.5rem] bg-dark py-[0.75rem] top-0">
      <div className="container mx-auto grid grid-cols-4 gap-[4rem]">
        <div className="flex flex-col gap-[1rem]">
          <Link href="/" className="text-primary text-[1.5rem]">
            Asadulloh Pro
          </Link>
          <p className="text-primary">
            I am Asadulloh Sadirdinov, a driven 21-year-old software engineer.
          </p>
        </div>
        <div className="flex flex-col gap-[0.7rem]">
          <Link href="/blog" className="text-primary hover:text-addition">
            Blog
          </Link>
          <Link href="/courses" className="text-primary hover:text-addition">
            Courses
          </Link>
          <Link href="/projects" className="text-primary hover:text-addition">
            Projects
          </Link>
          <Link href="/experience" className="text-primary hover:text-addition">
            Experience
          </Link>
        </div>
        <div className="flex flex-col gap-[0.7rem]">
          <Link href="/blog" className="text-primary hover:text-addition">
            Mediapark
          </Link>
          <Link href="/courses" className="text-primary hover:text-addition">
            Natija
          </Link>
          <Link href="/projects" className="text-primary hover:text-addition">
            Exadot
          </Link>
          <Link href="/experience" className="text-primary hover:text-addition">
            SoffIT
          </Link>
        </div>
        <div className="flex items-end justify-end gap-[1rem]">
          <Link
            href="https://www.youtube.com/@asadullohpro"
            className="fill-addition flex items-center justify-center w-[2rem] h-[2rem]"
            aria-label="youtube link"
          >
            <YoutubeIcon />
          </Link>
          <Link
            href="https://t.me/asadullohpro"
            className="fill-addition flex items-center justify-center w-[2rem] h-[2rem]"
            aria-label="telegram link"
          >
            <TelegramIcon />
          </Link>
          <Link
            href="https://www.linkedin.com/in/asadulloh-sadirdinov-8252a3213/"
            className="fill-addition flex items-center justify-center w-[2rem] h-[2rem]"
            aria-label="linkedin link"
          >
            <LinkedinIcon />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
