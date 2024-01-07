import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>Course</title>
      </Head>
      <body className="min-h-screen max-w-3xl mx-auto bg-black flex justify-center items-center">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
