import React from "react";
import styled from "styled-components";
import SvgBbLogo01 from "./Logo";
import { motion } from "framer-motion";

const Container = styled(motion.div)`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  z-index: 9999;
  background-color: #f9fafa;
`;

const LoadingSimulator = styled.div`
  width: 20%;
  height: 7px;
  background-color: #ebebeb;
  border-radius: 12px;
  border: 1px solid #d7d8d9;
  align-items: center;
  display: flex;
  span {
    background-color: #d7d8d9;
    height: 100%;
    display: inline-block;
    border-radius: inherit;
    animation: move 5s infinite;
  }

  @keyframes move {
    0% {
      width: 0%;
    }
    100% {
      width: 100%;
    }
  }
`;

export const SplashScreen = () => {
  return (
    <Container
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 1.2 } }}
    >
      <SvgBbLogo01 width="700" />
      <LoadingSimulator>
        <span> </span>
      </LoadingSimulator>
    </Container>
  );
};
