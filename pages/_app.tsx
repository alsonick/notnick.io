import { SpeedInsights } from "@vercel/speed-insights/next";
import ParticleBackground from "../components/Particles";
import { useEffect, useRef } from "react";
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
    <main className={inter.className}>
      <Component {...pageProps} />
      {new Date().getMonth() + 1 !== 12 ? null : null}
      <SpeedInsights />
    </main>
  );
}

export default MyApp;
