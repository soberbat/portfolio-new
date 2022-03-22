import styled from "styled-components";

export const Container = styled.div`
  padding: 10rem 0;
  color: #0d0d0d;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Inner = styled.div`
  max-width: 890px;
  padding: 0.5rem;
`;

export const Description = styled.section`
  width: 100%;
  text-align: left;
  h1 {
    font-size: 3.4rem;
    line-height: 4.7rem;
    margin: 0;
    font-weight: 700;
  }
  span {
    margin-top: 2.4rem;
    display: inline-block;
    line-height: 2.2rem;
    font-size: 1.1rem;
    color: ${({ theme }) => theme.grayDarker};

    span {
      font-style: italic;
      color: black;
      margin-top: 0;
      margin-right: 0.4rem;
    }
  }
`;

export const Featured = styled.section``;
