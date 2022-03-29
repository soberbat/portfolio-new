import React from "react";
import Link from "next/link";

import {
  Container,
  Projectİnfos,
  ProjectHeadlineSection,
  Headline,
  Cta,
  ContProps,
  ItemProps,
} from "../../styles/FeaturedProject.styled";
import { LeftArrow, UpRightArrow } from "../../styles/GlobalStyle";

export default function theMap() {
  return (
    <Container>
      <ProjectHeadlineSection resume>
        <Link href={"/"}>
          <span>{LeftArrow}</span>
        </Link>
        <Cta>
          <h1>Resume Creating Tool</h1>
          <Link href={"https://r-resume00.netlify.app/"}>
            <span>Go Live {UpRightArrow}</span>
          </Link>
        </Cta>
        <span>2022</span>
      </ProjectHeadlineSection>

      <Projectİnfos variants={ContProps} initial="initial" animate="animate">
        <Headline variants={ItemProps}> About The Project</Headline>
        <Headline variants={ItemProps}> About Theett</Headline>
        <Headline variants={ItemProps}> About The P3523255322roject</Headline>
        <Headline variants={ItemProps}> About Thedgadgasgaga Project</Headline>
      </Projectİnfos>
    </Container>
  );
}
