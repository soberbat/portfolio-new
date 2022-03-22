import Layout from "../src/components/Layout";
import { GlobalStyle } from "../styles/GlobalStyle";
import { ThemeProvider } from "styled-components";
import styled from "styled-components";
import "../styles/globals.css";
import { useState } from "react";

//THEME
const LightTheme = {
  background: "#fffffe",
  secondaryBackground: "#f9fafa",
  header: "#1B13F2",
  headerDarker: "#150FBF",
  headerDarkest: "#070540",
  text: "#0D0D0D",
  gray: "#D7D8D9",
  grayDarker: "#6e6e6d",
};
const DarkTheme = {
  background: "#0D0D0D",
  secondaryBackground: "ffff",
  header: "#1B13F2",
  headerDarker: "#150FBF",
  headerDarkest: "#070540",
  text: "#fffffe",
  gray: "#D7D8D9",
  grayDarker: "#6e6e6d",
};
//THEME

function MyApp({ Component, pageProps }) {
  const [theme, setTheme] = useState(true);
  return (
    <>
      <ThemeProvider theme={theme ? LightTheme : DarkTheme}>
        <GlobalStyle />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
