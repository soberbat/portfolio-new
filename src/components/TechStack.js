import React from "react";
import styled from "styled-components";
import SvgReact from "../../src/components/SvgReact";
import SvgRedux from "../../src/components/SvgRedux";
import SvgFramerMotion from "../../src/components/SvgFramerMotion";
import SvgTailwind from "../../src/components/SvgTailwind";

const TechStackContainer = styled.div`
  width: 100%;

  h1 {
    font-weight: 700;
    text-align: left;
    margin-bottom: 1rem;
    font-size: 1.5rem;
    color: ${({ theme }) => theme.black};
    padding: 0 0 0 1rem;
  }
  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;
    span {
      width: 100px;
      display: flex;
      align-items: center;
      flex-direction: column;
      justify-content: center;
      display: inline-block;
    }
  }
`;

export const TechStack = ({ which }) => {
  return (
    <>
      <TechStackContainer>
        <h1>Tech Stack</h1>
        <div>
          <span>
            <SvgReact />
          </span>
          <span>
            <SvgFramerMotion />
          </span>

          {which === "tailwind" && (
            <span>
              <SvgTailwind />
            </span>
          )}

          {which === "redux" && (
            <span>
              <SvgRedux />
            </span>
          )}
        </div>
      </TechStackContainer>
    </>
  );
};
