import NProgress from "nprogress";
import "nprogress/nprogress.css";
import "tippy.js/dist/tippy.css";
import "../styles/globals.css";
// Next.js
import type { AppProps } from "next/app";
import { Router } from "next/router";

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
