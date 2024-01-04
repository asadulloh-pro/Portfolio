import ZeroSection from "@/components/home/zero.section";
import Head from "next/head";
import ContactForm from "@/components/shared/contactform";

export default function Home() {
  return (
    <>
      <Head>
        <title>Asadulloh Pro</title>
      </Head>
      <div className="mb-[100px]">
        <ZeroSection />
        <ContactForm />
      </div>
    </>
  );
}

export function getStaticProps() {
  return { props: { title: "My Title", content: "..." } };
}
