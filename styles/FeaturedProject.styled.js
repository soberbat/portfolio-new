import styled from "styled-components";
import { device } from "./GlobalStyle";

export const Container = styled.div`
  display: flex;
  position: relative;
  overflow: hidden;
  height: 100vh;

  @media ${device.tablet} {
    overflow: scroll;
    height: auto;
    flex-direction: column;

    div:nth-child(1) {
      position: static;
      height: auto;
      width: auto;
      h1 {
        font-size: 3rem;
      }
      span {
        font-size: 1rem;
      }
    }

    div:nth-child(2) {
      position: static;
      height: auto;
      width: auto;
    }
  }
`;

export const ProjectHeadlineSection = styled.div`
  padding: 2rem;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 50vw;
  color: white;
  background-color: #2032f8;

  h1 {
    font-size: 5rem;
    font-weight: 700;
  }

  span {
    cursor: pointer;
    font-size: 1.6rem;
    font-weight: 100;
    display: flex;
    gap: 1.2rem;
    :hover {
      text-decoration: underline;
    }
  }
`;

export const Cta = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  padding: 3rem;
`;

export const Projectİnfos = styled.div`
  display: flex;
  overflow-y: scroll;
  width: 50vw;
  height: 100vh;
  position: absolute;
  right: 0;
  padding: 5rem;
`;
