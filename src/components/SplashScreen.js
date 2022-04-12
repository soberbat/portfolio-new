import styled from "styled-components";
import SvgBbLogo01 from "./Logo";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import Head from "next/head";

const Container = styled(motion.div)`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  z-index: 9999;
  background-color: white;
`;

const LoadingSimulator = styled.div`
  width: 20%;
  height: 7px;
  background-color: white;
  border-radius: 12px;
  border: 0.4px solid gainsboro;
  align-items: center;
  display: flex;
  span {
    background-color: #d7d8d9;
    height: 100%;
    display: inline-block;
    border-radius: inherit;
    animation: move 4.2s infinite;
    animation-delay: 1s;
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
  const [InnerHeight, setInnerHeight] = useState("");
  useEffect(() => {
    setInnerHeight(window.innerHeight);
  }, []);

  return (
    <Container
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.9, ease: "easeInOut" } }}
    >
      <Head>
        <title key="berat">Berat Genç</title>
      </Head>
      <SvgBbLogo01 width={InnerHeight > 768 ? "500" : "150"} />
      <LoadingSimulator>
        <span> </span>
      </LoadingSimulator>
    </Container>
  );
};
