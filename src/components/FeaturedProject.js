import React from "react";
import styled from "styled-components";
import Link from "next/link";
import { device } from "../../styles/GlobalStyle";

const Container = styled.div`
  background-color: #fdfdfd;
  border: 0.3px solid gainsboro;
  border-radius: 7px;
  padding: 2rem 2rem;
  margin-bottom: 1rem;
  display: flex;
  gap: 1.4rem;
  justify-content: center;
  align-items: center;
  transition: all ease-in-out 0.3s;
  cursor: pointer;

  span {
    color: #1b4353;
    font-size: 2.3rem;
  }

  div {
    h5 {
      margin-bottom: 0.2rem;
      font-size: 1.2rem;
    }

    span {
      color: ${({ theme }) => theme.grayDarker};
      font-size: 0.8rem;
      line-height: 1rem;
    }
  }

  @media ${device.tablet} {
    padding: 1rem 1rem;
    line-height: 0.3rem;
    span {
      font-size: 0.6rem;
    }
    div {
      span {
        font-size: 0.7rem;
      }
    }
  }
`;
const SectionDesc = styled.div`
  margin-bottom: 1rem;
  h3 {
    font-weight: 700;
    font-size: 1.9rem;
    margin-bottom: 0.7rem;
  }

  span {
    color: #bebebe;
    line-height: 2.2rem;
    font-size: 1.1rem;
    span {
      color: ${({ theme }) => theme.grayDarker};
    }
  }
`;

const SelectedProjects = [
  {
    header: "R-Resume",
    description:
      "Resume creating is a tool that you can preview your given data. Then download it as a PDF. Used Redux to store data globally and for easy retrieval of data to a component in the component tree. Animated using framer-motion. Styled with styled-components.",

    icon: "📄",
    link: "/projects/resume-app",
  },
  {
    header: "The Map",

    description:
      "An interactive map that shows neighboring countries of a selected country and gives information about population, currency, etc. My first react app where I utilized Framer-motion, React Hooks. Styled with Tailwindcss.  ",

    icon: "🌎",
    link: "/projects/the-map",
  },
];

export const FeaturedProject = ({}) => {
  return (
    <>
      <SectionDesc>
        <h3>Featured Projects</h3>
        <span>
          A collection of some projects that have shipped recently. The website
          you are viewing now is made with <span>Next.js</span>
        </span>
      </SectionDesc>

      {SelectedProjects.map((project, i) => {
        return (
          <Link key={i + "key"} href={project.link}>
            <Container>
              <span>{project.icon}</span>
              <div>
                <h5> {project.header} </h5>
                <span> {project.description} </span>
              </div>
            </Container>
          </Link>
        );
      })}
    </>
  );
};
