import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html className="dark">
      <Head />
      <body className="dark:bg-black">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
