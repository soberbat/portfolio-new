import styled from "styled-components";
import { device } from "./GlobalStyle";

export const WhoAmI = styled.div`
  text-align: center;
  margin-bottom: 4rem;
  h1 {
    font-size: 5rem;
    font-weight: 700;
    margin-bottom: 4rem;
  }

  span {
    color: ${({ theme }) => theme.grayDarker};
    line-height: 1.6rem;
  }
`;

export const WorkEducation = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  font-size: 10px;
  padding: 1rem 3rem;
  margin: 4rem 0;
  h1 {
    margin: 0 0;
    font-size: 2rem;
    margin-bottom: 1.4rem;
  }
`;

export const Note = styled.span`
  color: ${({ theme }) => theme.grayDarker};
  display: inline-block;
  align-self: flex-end;
  margin-top: 1rem;
`;

export const Item = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1rem;
  margin-bottom: 1rem;

  span:nth-of-type(1) {
    font-weight: 700;
  }

  span:nth-of-type(2) {
    font-weight: 300;
    color: ${({ theme }) => theme.grayDarker};

    display: flex;
    align-items: center;
    gap: 3rem;
    justify-content: space-between;

    span {
      font-weight: 100;
    }
  }
`;

export const AboutThisPage = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 1rem 3rem;
  width: 100%;
  margin-bottom: 4rem;
  margin-top: 4rem;
  h1 {
    margin: 0 0;
    font-size: 2rem;
    margin-bottom: 1rem;
  }
  span {
    display: inline-block;
    color: ${({ theme }) => theme.grayDarker};
    margin-bottom: 0.4rem;
    span {
      margin-left: 0.1rem;
      color: black;
      padding: 0.1rem 0.6rem;
      border-radius: 5px;
    }
  }
`;

export const Contact = styled.div`
  background-color: #272932;
  color: aliceblue;
  gap: 3rem;
  width: 100%;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;
