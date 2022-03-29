import styled from "styled-components";
import { device } from "./GlobalStyle";
import { motion } from "framer-motion";

const colors = {
  background: "#3F515C",
  headline: "#F2E30F",
};

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
  color: ${(props) => (props.resume ? "white" : colors.headline)};
  background-color: ${(props) => (props.resume ? "blue" : colors.background)};

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

export const Projectİnfos = styled(motion.div)`
  display: flex;
  align-items: center;
  flex-direction: column;
  overflow-y: scroll;
  width: 50vw;
  height: 100vh;
  position: absolute;
  right: 0;
  padding: 5rem;
  background-color: white;
  gap: 1.2rem;
`;

export const Headline = styled(motion.h1)`
  color: ${({ theme }) => theme.black};
  font-weight: 700;
  font-size: 3rem;
  text-align: center;
`;

export const AboutText = styled.span`
  display: inline-block;
  line-height: 1.6rem;
  text-align: center;
  color: ${({ theme }) => theme.grayDarker};
`;

export const TechStack = styled.div`
  display: flex;

  span {
    width: 75px;
  }
`;

//FRAMER MOTTİON PROPS

export const ContProps = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
      delay: 0.4,
      duration: 3,
    },
  },
};

export const ItemProps = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 3,
    },
  },
};

//FRAMER MOTTİON PROPS
