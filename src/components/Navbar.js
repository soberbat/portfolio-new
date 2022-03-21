import styled from "styled-components";
import { Gradient } from "./GlobalStyle";
import Logo from "./Logo";

const Navigation = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.6rem 1rem;
  border-bottom: 0.3px solid ${({ theme }) => theme.gray};

  ul {
    display: flex;
    align-items: center;
    gap: 2.4rem;
    color: ${({ theme }) => theme.grayDarker};
    font-size: 1rem;
    font-family: "Ubuntu Mono", monospace;
    font-weight: 400;
    list-style: none;
  }
`;

const Navbar = () => {
  return (
    <>
      <Gradient></Gradient>
      <Navigation>
        <Logo width="75px" />
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Projects</li>
        </ul>
      </Navigation>
    </>
  );
};

export default Navbar;
