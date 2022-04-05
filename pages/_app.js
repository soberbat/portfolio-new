import NextNProgress from "nextjs-progressbar";
import { SplashScreen } from "../src/components/SplashScreen";
import { ThemeProvider } from "styled-components";
import "../styles/globals.css";
import Layout from "../src/components/Layout";
import React, { useState, useEffect } from "react";

import {
  GlobalStyle,
  theme,
  PageTransitionMotionProps,
  ProjectPageMotionProps,
  NextNProgressProps,
  Container,
} from "../styles/GlobalStyle";

function MyApp({ Component, pageProps, router }) {
  // DİSPLAY LOGO AND REMOVE AFTER SOME TİME
  const [isVisible, setisVisible] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setisVisible(false);
    }, 5000);
  }, []);
  // DİSPLAY LOGO AND REMOVE AFTER SOME TİME

  // TO SCROLL TO TOP OF THE PAGE WHEN ROUTE CHANGES
  useEffect(() => {
    const handleRouteChange = (url, { shallow }) => {
      window.scrollTo(0, 0);
    };
    router.events.on("routeChangeStart", handleRouteChange);

    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
    };
  }, []);
  // TO SCROLL TO TOP OF THE PAGE WHEN ROUTE CHANGES

  return (
    <>
      {isVisible && <SplashScreen />}

      {!isVisible && (
        <ThemeProvider theme={theme}>
          <GlobalStyle />

          {router.pathname.startsWith("/projects/") && (
            <>
              <NextNProgress {...NextNProgressProps} />
              <Container key={router.route} {...ProjectPageMotionProps}>
                <Component {...pageProps} />
              </Container>
            </>
          )}

          {!router.pathname.startsWith("/projects/") && (
            <Layout>
              <NextNProgress {...NextNProgressProps} />
              <Container key={router.route} {...PageTransitionMotionProps}>
                <Component {...pageProps} />
              </Container>
            </Layout>
          )}
        </ThemeProvider>
      )}
    </>
  );
}

export default MyApp;
