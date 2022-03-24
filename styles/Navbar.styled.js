import styled from "styled-components";

export const Gradient = styled.div`
  height: 4px;
  background-color: #d7d8d9;
`;

export const Container = styled.div`
  position: fixed;
  width: 100%;
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(9.5px);
`;
export const Navigation = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.3rem 2rem;
  border-bottom: 0.3px solid ${({ theme }) => theme.gray};
  ul {
    display: flex;
    align-items: center;
    margin-bottom: 0;
    gap: 4rem;
    color: ${({ theme }) => theme.grayDarker};
    font-size: 1rem;
    font-family: "Ubuntu Mono", monospace;
    font-weight: 400;
    list-style: none;
  }
`;
