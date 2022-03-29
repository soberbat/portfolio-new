import Layout from "../src/components/Layout";
import { ThemeProvider } from "styled-components";
import "../styles/globals.css";
import { AnimatePresence } from "framer-motion";
import NextNProgress from "nextjs-progressbar";

import {
  GlobalStyle,
  theme,
  PageTransitionMotionProps,
  ProjectPageMotionProps,
  NextNProgressProps,
  Container,
  Switcher,
} from "../styles/GlobalStyle";

function MyApp({ Component, pageProps, router }) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        {router.pathname.startsWith("/projects/") ? (
          <Container key={router.route} {...ProjectPageMotionProps}>
            <Component {...pageProps} />
          </Container>
        ) : (
          <Layout>
            <NextNProgress {...NextNProgressProps} />
            <Container key={router.route} {...PageTransitionMotionProps}>
              <Component {...pageProps} />
            </Container>
          </Layout>
        )}
      </ThemeProvider>
    </>
  );
}

export default MyApp;
