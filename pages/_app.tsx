import NProgress from "nprogress";
import "nprogress/nprogress.css";
import "tippy.js/dist/tippy.css";
import "../styles/globals.css";

// Next.js
import { Inter } from "@next/font/google";
import type { AppProps } from "next/app";
import { Router } from "next/router";

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

const inter = Inter({ subsets: ["latin"] });

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main className={inter.className}>
      <Component {...pageProps} />
    </main>
  );
}

export default MyApp;
