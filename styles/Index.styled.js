import styled from "styled-components";

export const Container = styled.div`
  padding: 8rem 0;
  color: #0d0d0d;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Inner = styled.section`
  max-width: 850px;
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

export const İconWrap = styled.div`
  display: flex;
  gap: 0.4rem;
  margin-top: 2rem;
  margin-bottom: 4rem;
  a {
    padding: 0.3rem 0.3rem;
    border-radius: 3px;
    :hover {
      background-color: #fafafa;
      text-decoration: none;
      color: black;
    }

    svg {
      color: #bebebe;
      :hover {
        color: #242424;
      }
    }
  }
`;

export const Divider = styled.span`
  height: 0px;
  width: 100%;
  border-radius: 3px;
  border-top: 1px solid ${({ theme }) => theme.gray};
`;

export const Featured = styled.section`
  max-width: 850px;
  margin-top: 3rem;
`;
