import React from "react";
import styled from "styled-components";
import Link from "next/link";

const Container = styled.div`
  background-color: #fdfdfd;
  border: 0.3px solid gainsboro;
  border-radius: 7px;
  padding: 2rem 2rem;
  margin-bottom: 1rem;
  display: flex;
  gap: 1.4rem;
  align-items: flex-start;
  transition: all ease-in-out 0.3s;
  cursor: pointer;
  :hover {
    transform: translateY(-5px);
    border: 1px solid gainsboro;
  }

  svg {
    color: #1b4353;
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
`;
const SectionDesc = styled.div`
  margin-bottom: 3rem;
  h3 {
    font-weight: 700;
    font-size: 1.9rem;
    margin-bottom: 0.7rem;
  }

  span {
    color: #bebebe;
    font-size: 0.95rem;
    span {
      color: ${({ theme }) => theme.grayDarker};
    }
  }
`;

const SelectedProjects = [
  {
    header: "The Map",

    description:
      "An interactive map that shows neighbouring countries of a selected country and gives information about population,currency etc. My first react app where I utilized Framer-motion, React Hooks. ",

    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="50"
        height="50"
        fill="currentColor"
        class="bi bi-map-fill"
        viewBox="0 0 16 16"
      >
        <path
          fill-rule="evenodd"
          d="M16 .5a.5.5 0 0 0-.598-.49L10.5.99 5.598.01a.5.5 0 0 0-.196 0l-5 1A.5.5 0 0 0 0 1.5v14a.5.5 0 0 0 .598.49l4.902-.98 4.902.98a.502.502 0 0 0 .196 0l5-1A.5.5 0 0 0 16 14.5V.5zM5 14.09V1.11l.5-.1.5.1v12.98l-.402-.08a.498.498 0 0 0-.196 0L5 14.09zm5 .8V1.91l.402.08a.5.5 0 0 0 .196 0L11 1.91v12.98l-.5.1-.5-.1z"
        />
      </svg>
    ),
    link: "/projects/the-map",
  },

  {
    header: "R-Resume",
    description:
      "An interactive map that shows neighbouring countries of a selected country and gives information about population,currency etc. My first react app where I utilized Framer-motion, React Hooks. ",

    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="50"
        height="50"
        fill="currentColor"
        class="bi bi-file-person-fill"
        viewBox="0 0 16 16"
      >
        <path d="M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm-1 7a3 3 0 1 1-6 0 3 3 0 0 1 6 0zm-3 4c2.623 0 4.146.826 5 1.755V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-1.245C3.854 11.825 5.377 11 8 11z" />
      </svg>
    ),
    link: "/projects/resume-app",
  },
];

// const containerProps = {
//   onClick: e =>
// }

export const FeaturedProject = ({}) => {
  return (
    <>
      <SectionDesc>
        <h3>Featured Projects</h3>
        <span>
          A collection of some projects that have shipped recently. And of
          course this website made with <br /> <span>Next.js</span>
        </span>
      </SectionDesc>

      {SelectedProjects.map((project) => {
        return (
          <Link href={project.link}>
            <Container>
              {project.svg}
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
