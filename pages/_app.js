import Layout from "../src/components/Layout";
import { ThemeProvider } from "styled-components";
import "../styles/globals.css";
import { motion, AnimatePresence } from "framer-motion";
import NextNProgress from "nextjs-progressbar";
import {
  GlobalStyle,
  theme,
  PageTransitionVariants,
  ProjectPageVariants,
} from "../styles/GlobalStyle";

function MyApp({ Component, pageProps, router }) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />

        {router.pathname.startsWith("/projects/") ? (
          <AnimatePresence>
            <motion.div
              key={router.route}
              variants={ProjectPageVariants}
              animate="animate"
              initial="initial"
              exit="exit"
            >
              <Component {...pageProps} />
            </motion.div>
          </AnimatePresence>
        ) : (
          <Layout>
            <AnimatePresence>
              <NextNProgress
                color="radial-gradient(circle, rgba(193,34,195,1) 0%, rgba(253,187,45,1) 100%)"
                height={3}
              />
              <motion.div
                key={router.route}
                variants={PageTransitionVariants}
                animate="animate"
                initial="initial"
                exit="exit"
              >
                <Component {...pageProps} />
              </motion.div>
            </AnimatePresence>
          </Layout>
        )}
      </ThemeProvider>
    </>
  );
}

export default MyApp;
