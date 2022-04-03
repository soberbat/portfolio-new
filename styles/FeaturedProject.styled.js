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

      padding: 1.3rem;
    }
  }
`;

export const ProjectHeadlineSection = styled.div`
  color: ${(props) => (props.resume ? "white" : colors.headline)};
  background-color: ${(props) => (props.resume ? "blue" : colors.background)};
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  position: fixed;
  padding: 2rem;
  top: 0;
  left: 0;
  height: 100vh;
  width: 50vw;

  h1 {
    font-size: 5rem;
    font-weight: 700;
  }

  span {
    cursor: pointer;
    display: flex;
    font-size: 1.6rem;
    font-weight: 100;
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
  flex-direction: column;
  overflow-y: scroll;
  position: absolute;
  background-color: white;
  height: 100vh;
  width: 50vw;
  right: 0;
  padding: 5rem;
  line-height: 2rem;
`;

export const AboutContainer = styled(motion.div)``;

export const Headline = styled(motion.h1)`
  color: ${({ theme }) => theme.black};
  font-weight: 700;
  font-size: 3rem;
  text-align: left;
`;

export const AboutText = styled(motion.span)`
  color: ${({ theme }) => theme.grayDarker};
  display: inline-block;
  text-align: left;
  margin-bottom: 5rem;

  span {
    color: ${({ theme }) => theme.black};
  }
`;

export const KeyAchievements = styled(motion.div)`
  h1 {
    color: ${({ theme }) => theme.black};
    text-align: left;
    font-weight: 700;
    font-size: 1.5rem;
  }

  span {
    color: ${({ theme }) => theme.grayDarker};
  }
`;

export const List = styled.ul`
  color: ${({ theme }) => theme.grayDarker};
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
  gap: 0.4rem;
  margin-left: -26px;

  li {
    list-style: none;
    background-color: #fdfdfd;
    border-radius: 5px;
    padding: 0.2rem 1rem;

    :hover {
      background-color: ${({ theme }) => theme.gray};
      color: #fdfdfd;
    }
  }
`;

export const Obstacles = styled(motion.div)`
  display: flex;
  flex-direction: column;
  margin: 5rem 0rem;

  h1 {
    color: ${({ theme }) => theme.black};
    text-align: left;
    font-weight: 700;
    font-size: 1.5rem;
  }

  span {
    margin-bottom: 1rem;
    font-size: 1rem;
    color: ${({ theme }) => theme.grayDarker};

    ul {
      color: ${({ theme }) => theme.text};
    }
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
      staggerChildren: 0.4,
      delay: 0.6,
      duration: 0.3,
      when: "beforeChildren",
    },
  },
};

export const ChildProps = {
  initial: {
    opacity: 0,
    x: 50,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.7,
    },
  },
};

export const ItemProps = {
  variants: ChildProps,
};

//FRAMER MOTTİON PROPS
