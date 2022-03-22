import React from "react";
import styled from "styled-components";

const Container = styled.div`
  border: 1px solid ${({ theme }) => theme.gray};
  background-color: #fafafa;
  border-radius: 7px;
  padding: 2rem 2rem;
`;

export const FeaturedProject = ({ Header, Description }) => {
  return (
    <Container>
      <div>
        <h5> {Header} </h5>
        <span> {Description} </span>
      </div>
    </Container>
  );
};
