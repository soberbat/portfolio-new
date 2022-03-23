import Layout from "../src/components/Layout";
import { ThemeProvider } from "styled-components";
import "../styles/globals.css";
import { motion, AnimatePresence } from "framer-motion";
import {
  GlobalStyle,
  theme,
  PageTransitionVariants,
} from "../styles/GlobalStyle";

function MyApp({ Component, pageProps, router }) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Layout>
          <AnimatePresence exitBeforeEnter>
            <motion.div
              key={router.route}
              variants={PageTransitionVariants}
              animate="animate"
              initial="initial"
            >
              <Component {...pageProps} />
            </motion.div>
          </AnimatePresence>
        </Layout>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
