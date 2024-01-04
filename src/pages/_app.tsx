import "@/styles/globals.css";
import type { AppProps } from "next/app";
import dynamic from "next/dynamic";
import { useMemo } from "react";

const layouts = {
  main: dynamic(() => import("@/components/layouts/main-layout")),
  user: dynamic(() => import("@/components/layouts/user-layout")),
};

export default function App({ Component, pageProps }: AppProps) {
  const Layout = useMemo(() => {
    return layouts["main"];
  }, []);

  return (
    <Layout>
      <Component {...pageProps} />;
    </Layout>
  );
}
