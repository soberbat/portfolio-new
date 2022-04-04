import { Gradient } from "../../styles/Navbar.styled";
import Logo from "./Logo";
import { Container, Navigation } from "/styles/Navbar.styled.js";
import Link from "next/link";

const Navbar = () => {
  return (
    <Container>
      <Gradient></Gradient>
      <Navigation>
        <Logo width="75px" />
        <ul>
          <li>
            <Link scroll={false} href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/projects">
              <a>Projects</a>
            </Link>
          </li>
          <li>
            <Link href="/me">
              <a>Me</a>
            </Link>
          </li>
        </ul>
      </Navigation>
    </Container>
  );
};

export default Navbar;
