import Link from "next/link";

const Header = () => {
  return (
    <div className="w-full min-h-[2.5rem] bg-dark py-[0.75rem] absolute top-0">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/" className="text-primary text-[1.5rem]">
          Asadulloh Pro
        </Link>
        <div className="flex items-center justify-end gap-[2rem]">
          {/* <Link href="/blog" className="text-primary hover:text-addition">
            Blog
          </Link>
          <Link href="/courses" className="text-primary hover:text-addition">
            Courses
          </Link> */}
          <Link href="/about" className="text-primary hover:text-addition">
            About
          </Link>
          <Link href="/projects" className="text-primary hover:text-addition">
            Projects
          </Link>
          {/* <Link href="/experience" className="text-primary hover:text-addition">
            Experience
          </Link> */}
        </div>
      </div>
    </div>
  );
};

export default Header;
