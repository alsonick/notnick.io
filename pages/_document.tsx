import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html className="dark">
      <Head />
      <body className="bg-white dark:bg-black transition-colors duration-300 dark:duration-200">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
