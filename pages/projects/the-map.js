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
} from "../../styles/FeaturedProject.styled";
import { LeftArrow, UpRightArrow } from "../../styles/GlobalStyle";
import { TechStack } from "../../src/components/TechStack";

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
          This project is my first React app. İt is made to showcase data
          fetching skills and manipulating that data according to the desired
          result. There's an SVG map which you can explore selected countries'
          particular attributes like population, neighbouring countries,
          currency and so on. Got the help of
          <span> SVGR</span> and
          <span> Particle.JS</span> so big thanks to the developers of these
          libraries.
        </AboutText>

        <KeyAchievements>
          <h1>Key Achievements</h1>
          <span>
            This project was particularly important in that I gained valuable
            knowledge about core concepts of React. These includes:
          </span>
          <List>
            <li>React Hooks</li>
            <li>State&Props</li>

            <li>Data Fetching</li>
            <li>SVG</li>
            <li>ES6</li>
          </List>
        </KeyAchievements>

        <Obstacles>
          <h1>Obstacles on the way!</h1>

          <span>
            The app was initially made with the thought of displaying illegal
            animal trafficing & hunting there were APİ's that provide
            information about endangered animals but even getting APİ key was a
            problem. I've sent couple of mails but got 0 respond. So I gave up
            and choose something relatively simple.
          </span>

          <span>
            Another issue was manipulating SVG elements and some other issues
            related to viewbox property.
          </span>

          <span>
            Finally what challenged me the most was maintaining code. Using
            tailwind in HTML was really really hideous. So I thought I could
            give another shot using it with React. Of course it was not the same
            as using it with HTML but still with the state of mind I have now
            every letter matters. Template literals, questions marks in
            className attribute to conditionally use classes and extra
            framer-motion related attributes made it super hard to read. And
            focus on code.
          </span>
        </Obstacles>
        <TechStack />
      </Projectİnfos>
    </Container>
  );
}

{
  /* This project is my first React App where I obtained valuable knowledge
          around matters like
          <span>
            {" "}
            React Hooks, state and props, animating, data fetching, SVG, ES6
            Syntax{" "}
          </span>
          and of course problem solving in general. */
}
