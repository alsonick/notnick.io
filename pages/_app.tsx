import { SpeedInsights } from "@vercel/speed-insights/next";
import { MAIN_CONTENT_ID } from "../lib/constants";
// Registers the router listeners GoBack relies on; must load on every page.
import "../lib/navigation-history";
import { useEffect, useRef } from "react";
import { IconContext } from "react-icons";
import "highlight.js/styles/github.css";
import "react-tippy/dist/tippy.css";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import "tippy.js/dist/tippy.css";
import "../styles/globals.css";

// Next.js
import { Inter } from "next/font/google";
import type { AppProps } from "next/app";
import { Router } from "next/router";

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

const inter = Inter({ subsets: ["latin"] });

function MyApp({ Component, pageProps }: AppProps) {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    audioRef.current = new Audio("/click.mp3");
    audioRef.current.volume = 0.5;

    const playClick = () => {
      if (!audioRef.current) return;
      audioRef.current.currentTime = 0;
      audioRef.current.play().catch(() => {});
    };

    Router.events.on("routeChangeStart", playClick);
    return () => {
      Router.events.off("routeChangeStart", playClick);
    };
  }, []);

  return (
    // Every react-icons icon is decorative unless it says otherwise, so hide
    // them from screen readers. Icon-only controls carry their own aria-label.
    <IconContext.Provider value={{ attr: { "aria-hidden": "true" } }}>
      <div className={inter.className}>
        <a
          href={`#${MAIN_CONTENT_ID}`}
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[10000]
          focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:font-semibold focus:text-black
          focus:outline-none focus:ring-4 focus:ring-primary dark:focus:bg-black dark:focus:text-white"
        >
          Skip to content
        </a>
        <Component {...pageProps} />
        {new Date().getMonth() + 1 !== 12 ? null : null}
        <SpeedInsights />
      </div>
    </IconContext.Provider>
  );
}

export default MyApp;
