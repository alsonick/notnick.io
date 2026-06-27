import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html className="dark">
      <Head />
      <body className="bg-white dark:bg-black transition-colors duration-150 ease-in-out">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
