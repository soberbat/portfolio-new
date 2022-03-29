import React from "react";
import Link from "next/link";
import SvgReact from "../../src/components/SvgReact";
import {
  ContProps,
  ItemProps,
  Container,
  Projectİnfos,
  ProjectHeadlineSection,
  Headline,
  Cta,
  AboutText,
  TechStack,
} from "../../styles/FeaturedProject.styled";
import { LeftArrow, UpRightArrow } from "../../styles/GlobalStyle";

export default function theMap() {
  return (
    <Container>
      <ProjectHeadlineSection>
        <Link href={"/"}>
          <span>{LeftArrow}</span>
        </Link>
        <Cta>
          <h1>A Reactive Map</h1>
          <Link href={"https://bege-map.netlify.app/"}>
            <span> Go Live {UpRightArrow}</span>
          </Link>
        </Cta>
        <span>2022</span>
      </ProjectHeadlineSection>

      <Projectİnfos variants={ContProps} initial="initial" animate="animate">
        <Headline variants={ItemProps}> About The Project</Headline>
        <AboutText>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate hic
          ut numquam perspiciatis cumque! Perspiciatis architecto facere
          reprehenderit accusamus. Quis tempore nisi tempora sequi maxime qui
          vitae saepe et vel! Vel eos pariatur dolorem similique autem itaque
          expedita enim excepturi, nobis provident sint? Provident porro
          mollitia esse quae aperiam non expedita a natus ea! Exercitationem ea
          vel provident laudantium quibusdam!
        </AboutText>
        <TechStack>
          <span>
            <SvgReact />
          </span>
        </TechStack>
      </Projectİnfos>
    </Container>
  );
}
