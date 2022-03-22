import { Gradient } from "../../styles/GlobalStyle";
import Logo from "./Logo";
import { Container, Navigation } from "/styles/Navbar.styled.js";

const Navbar = () => {
  return (
    <Container>
      <Gradient></Gradient>
      <Navigation>
        <Logo width="75px" />
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Projects</li>
        </ul>
      </Navigation>
    </Container>
  );
};

export default Navbar;
