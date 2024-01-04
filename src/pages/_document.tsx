import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" sizes="48x48" />
        <link rel="apple-touch-icon" href="/favicon.ico" sizes="48x48" />
        <link
          rel="apple-touch-icon-precomposed"
          href="/favicon.ico"
          sizes="48x48"
        />
        <link rel="shortcut icon" href="/favicon.ico" sizes="48x48" />
        <link rel="icon" href="/32x32.png" sizes="48x48" />
        <link rel="apple-touch-icon" href="/32x32.png" sizes="48x48" />
        <link
          rel="apple-touch-icon-precomposed"
          href="/32x32.png"
          sizes="48x48"
        />
        <link rel="shortcut icon" href="/32x32.png" sizes="48x48" />
        <link rel="icon" href="/144x144.png" sizes="96x96" />
        <link rel="apple-touch-icon" href="/96x96.png" sizes="96x96" />
        <link
          rel="apple-touch-icon-precomposed"
          href="/96x96.png"
          sizes="96x96"
        />
        <link rel="shortcut icon" href="/144x144.png" sizes="96x96" />
        <link rel="icon" href="/144x144.png" sizes="144x144" />
        <link rel="apple-touch-icon" href="/144x144.png" sizes="144x144" />
        <link
          rel="apple-touch-icon-precomposed"
          href="/144x144.png"
          sizes="144x144"
        />
        <link rel="shortcut icon" href="/144x144.png" sizes="144x144" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
