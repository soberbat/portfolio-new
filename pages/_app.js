import NextNProgress from "nextjs-progressbar";
import { SplashScreen } from "../src/components/SplashScreen";
import { ThemeProvider } from "styled-components";
import "../styles/globals.css";
import Layout from "../src/components/Layout";
import { AnimatePresence } from "framer-motion";

import { useEffect } from "react/cjs/react.development";
import { useState } from "react/cjs/react.development";

import {
  GlobalStyle,
  theme,
  PageTransitionMotionProps,
  ProjectPageMotionProps,
  NextNProgressProps,
  Container,
} from "../styles/GlobalStyle";

function MyApp({ Component, pageProps, router }) {
  // LOGİC TO SCROLL TO TOP OF THE PAGE WHEN ROUTE CHANGES && DİSPLAY LOGO AND REMOVE AFTER SOME TİME
  const [isVisible, setisVisible] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setisVisible(false);
    }, 5000);
  }, []);

  useEffect(() => {
    const handleRouteChange = (url, { shallow }) => {
      window.scrollTo(0, 0);
    };
    router.events.on("routeChangeStart", handleRouteChange);
    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
    };
  }, []);
  // LOGİC TO SCROLL TO TOP OF THE PAGE WHEN ROUTE CHANGES && DİSPLAY LOGO AND REMOVE AFTER SOME TİME

  return (
    <>
      {isVisible ? (
        <SplashScreen key={"arabalıBok"} />
      ) : (
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          {router.pathname.startsWith("/projects/") ? (
            <>
              <NextNProgress {...NextNProgressProps} />
              <Container key={router.route} {...ProjectPageMotionProps}>
                <Component {...pageProps} />
              </Container>
            </>
          ) : (
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
