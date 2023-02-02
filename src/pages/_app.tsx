import "../styles/globals.css";
import "../styles/nprogress.css";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import nProgress from "nprogress";
import type { AppProps } from "next/app";
import { Router } from "next/router";

function MyApp({ Component, pageProps }: AppProps) {
  Router.events.on("routeChangeStart", nProgress.start);
  Router.events.on("routeChangeError", nProgress.done);
  Router.events.on("routeChangeComplete", nProgress.done);
  return <Component {...pageProps} />;
}

export default MyApp;
