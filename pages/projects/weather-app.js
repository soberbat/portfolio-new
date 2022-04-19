import React from "react";
import Link from "next/link";
import Head from "next/head";
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

export default function WeatherApp() {
  return (
    <Container>
      <Head>
        <title key="resume">Weather App</title>
        <meta key="ogType" name="og:type" content="resume" />
      </Head>
      <ProjectHeadlineSection weather>
        <Link href={"/"}>
          <span>{LeftArrow}</span>
        </Link>

        <Cta>
          <h1>Simple Weather App</h1>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://bg-weather-app.vercel.app/"
          >
            <span> Go Live {UpRightArrow}</span>
          </a>
        </Cta>

        <span>2022</span>
      </ProjectHeadlineSection>
      <Projectİnfos variants={ContProps} initial="initial" animate="animate">
        <AboutContainer {...ItemProps}>
          <Headline> About The Project</Headline>

          <AboutText>
            Weather app with which you can view your current location' current
            weather data. You can also search by city name. Fetched data with
            getServerSideProps in Next.js. Used this fetched data as parameters
            for creating a chart with Chart.js. Used Dynamic Routing
            capabilities of Next.js.
          </AboutText>
        </AboutContainer>

        <KeyAchievements {...ItemProps}>
          <h1>Key Achievements</h1>

          <span>I utilized some of these in this project:</span>

          <List>
            <li>Dynamic Routing in Next.js</li>
            <li>Chart.js</li>
            <li>Swiper.js</li>
            <li>Data Fetching</li>
          </List>
        </KeyAchievements>

        <Obstacles {...ItemProps}>
          <h1>Details...</h1>

          <span>
            I wanted to make a weather app but I also wanted to be challenging.
            The city route is inspired by a Dribble Shot. İt was designed by
            Matt Wojtaś, so big shout-out to him. I took the design and adapt it
            to web environment making it fully responsive, and interactive.
            <Link
              href={
                "https://dribbble.com/shots/6756055/attachments/1442812?mode=media"
              }
            >
              You can check the design here.
            </Link>
          </span>

          <span>
            The home page of the app was designed by me. I wanted to add a
            little bit of sugar and use Swiper.js in a react project to see how
            it functions by using a framework.
          </span>

          <span>
            I've used Next.js' benefits other than routing these are as I've
            mentioned dynamic routing and data fetching using
            getServerSideProps. The project was good training in that I've
            learned more complex concepts about Next.js and sharpen my
            design-to-code skills.
          </span>
        </Obstacles>
      </Projectİnfos>
    </Container>
  );
}
