import { createGlobalStyle } from "styled-components";
import styled from "styled-components";
export const GlobalStyle = createGlobalStyle`
  html,
  body {
    padding: 0;
    margin: 0;
    background-color: ${({ theme }) => theme.background};
  }
  * {
    box-sizing: border-box;
  }
`;
const size = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  tablet: "768px",
  laptop: "1024px",
  laptopL: "1440px",
  desktop: "2560px",
};
export const device = {
  mobileS: `(min-width: ${size.mobileS})`,
  mobileM: `(min-width: ${size.mobileM})`,
  mobileL: `(min-width: ${size.mobileL})`,
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
  laptopL: `(min-width: ${size.laptopL})`,
  desktop: `(min-width: ${size.desktop})`,
  desktopL: `(min-width: ${size.desktop})`,
};

export const Gradient = styled.div`
  height: 5px;
  background: rgb(252, 176, 69);
  background: linear-gradient(
    90deg,
    rgba(252, 176, 69, 1) 3%,
    rgba(131, 58, 180, 1) 53%,
    rgba(29, 116, 253, 1) 100%
  );
`;
