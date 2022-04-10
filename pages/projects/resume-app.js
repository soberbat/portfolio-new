import React from "react";
import Link from "next/link";

import {
  ContProps,
  ItemProps,
  Container,
  Projectİnfos,
  ProjectHeadlineSection,
  Headline,
  Cta,
  AboutText,
  KeyAchievements,
  List,
  Obstacles,
  AboutContainer,
} from "../../styles/FeaturedProject.styled";
import { LeftArrow, UpRightArrow } from "../../styles/GlobalStyle";
import { TechStack } from "../../src/components/TechStack";

export default function theMap() {
  return (
    <Container>
      <ProjectHeadlineSection resume>
        <Link href={"/"}>
          <span>{LeftArrow}</span>
        </Link>

        <Cta>
          <h1>A Resume Creating Tool</h1>
          <Link href={"https://r-resume00.netlify.app"}>
            <span> Go Live {UpRightArrow}</span>
          </Link>
        </Cta>

        <span>2022</span>
      </ProjectHeadlineSection>

      <Projectİnfos variants={ContProps} initial="initial" animate="animate">
        <AboutContainer {...ItemProps}>
          <Headline> About The Project</Headline>

          <AboutText>
            This app let's you create a resume and download it as a PDF. You can
            easily add your skills, education and internships to your resume.
            Also there are extras. There's also a logo that designed by me.
          </AboutText>
        </AboutContainer>

        <KeyAchievements {...ItemProps}>
          <h1>Key Achievements</h1>

          <span>
            I've sharpen my React skills and added more to my skill set these
            skills are:
          </span>

          <List>
            <li>Redux</li>
            <li>Styled Components</li>
          </List>
        </KeyAchievements>

        <Obstacles {...ItemProps}>
          <h1>Obstacles on the way!</h1>

          <span>
            Before getting into code I knew that I need to store form inputs
            somewhere and store the related ones in an object that can be used
            to display in preview. That wouldn't be the case without a state
            management tool. So I've got the help of Redux since the app was too
            complex to use regular state in react. Because with regular state:
            <ul>
              <li>
                I wouldn't be storing all the values in a preffered location.
              </li>

              <li>
                And also the desired UI output wouldn't be the same since any
                update to the state re-renders all the components in the
                component tree.
              </li>
            </ul>
          </span>

          <span>
            <Link href={"/projects/the-map"}>The map project </Link> was a
            frustration for me in that I saw Tailwindcss wasn't a fit for me
            even though there were work arounds to make your Tailwindcss code
            look clean. So I looked for solutions and came across with CSS in JS
            library Styled Components. It was super easy to get used to it and
            use its magical powers like nesting, dynamic styling, theming etc.
          </span>
        </Obstacles>
        <TechStack which={"redux"} />
      </Projectİnfos>
    </Container>
  );
}
