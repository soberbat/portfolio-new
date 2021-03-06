import React from "react";
import Link from "next/link";
import Head from "next/head";
import {
  AboutThisPage,
  WhoAmI,
  WorkEducation,
  Item,
  Note,
} from "../styles/Me.styled";
import { Container, Inner, Divider } from "../styles/Index.styled";

export default function Me() {
  return (
    <Container>
      <Head>
        <title key="me">Me</title>
        <meta key="ogType" name="og:type" content="me" />
      </Head>
      <Inner>
        <WhoAmI>
          <h1>Who is Berat?</h1>
          <span>
            I am Berat Genç a self taught front end developer. I’ve been
            teaching myself to code for over a year. I was working as a full
            time graphic designer in an agency where we had couple of customers
            designing campaings, social media management. I have always dreamed
            of being a 3D Generalist but I end up being Front End Developer upon
            deciding between the two. I've been learning to code for over a year
            now. Along the way I learned something incredible and very valuable
            aspect of mine: I am a total learner and very stubborn. I started
            with Python then headed for Web Development path. I really love what
            I do and feel lucky, frankly, to find my passion.
          </span>

          <span>
            There are a lot to learn of course but now that I have the
            foundation to build things with the knowledge I have I will add more
            to my stack. Thinking of trying out react-three-fiber, back-end,
            machine learning....
          </span>
        </WhoAmI>
        <Divider />
        <WorkEducation>
          <h1>Work</h1>
          <Item>
            <span>HeyMyPet</span>
            <span>Intern </span>
          </Item>
          <Item>
            <span>SustSolutions</span>
            <span>Graphic Designer</span>
          </Item>
        </WorkEducation>

        <WorkEducation>
          <h1>Educational Background</h1>
          <Item>
            <span>Istanbul Bilgi University</span>
            <span>
              <span>Communication Design & Management</span>
              <span>2021-2023</span>
            </span>
          </Item>
          <Item>
            <span>Istanbul Bilgi University</span>
            <span>
              <span>Printing & Publishing Studies</span> <span>2019-2021</span>
            </span>
          </Item>
          <Item>
            <span>İstanbul University </span>
            <span>
              <span>American Culture and Literature</span>{" "}
              <span>2018-2019</span>{" "}
            </span>
          </Item>
          <Item>
            <span>Haliç University </span>
            <span>
              <span>Translation Studies</span> <span>2017-2018</span>{" "}
            </span>
          </Item>
          <Note>
            * Got accepted with full scholarship to all foundation
            universities...
          </Note>
        </WorkEducation>
        <Divider />

        <AboutThisPage>
          <h1>About this site</h1>
          <span>
            This site is made with <span>Next.js</span> and
            <span> Styled Components</span>
          </span>
          <span>
            Animated with <span> Framer-Motion</span>
          </span>
          <span>
            Deployed using <span> Vercel</span>
          </span>
          <span>
            Thanks for this beautiful palettes{" "}
            <Link href={"https://coolors.co/"}>
              <span>Colors.co</span>
            </Link>
          </span>
          <span>
            And this beautiful mono-spaced font
            <Link href={"https://fonts.google.com/specimen/Ubuntu+Mono"}>
              <span> Ubuntu </span>
            </Link>
          </span>
        </AboutThisPage>
      </Inner>
    </Container>
  );
}
