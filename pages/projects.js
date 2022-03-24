import React from "react";
import { Container } from "../styles/Index.styled";
import Image from "next/image";
import { Inner } from "../styles/Projects.styled";
import { Project } from "../src/components/Project";

const projectsİnfo = [
  {
    header: "Avalanche",
    project: "avalanche",
    descriptionOne:
      "This project is a made with SCSS after using Tailwindcss for a while I figured the library is great for quick-short projects that you do for only once and NEVER touch the code again. İt gets really challenging to keep code clean even if you use frameworks like React,Vue,Svelte.",
    descriptionTwo: "",
  },
  { header: "", project: "", descriptionOne: "", descriptionTwo: "" },
  { header: "", project: "", descriptionOne: "", descriptionTwo: "" },
  { header: "", project: "", descriptionOne: "", descriptionTwo: "" },
  { header: "", project: "", descriptionOne: "", descriptionTwo: "" },
];

export default function projects() {
  return (
    <Container>
      <Inner>
        {projectsİnfo.map((project) => (
          <Project {...project} />
        ))}
      </Inner>
    </Container>
  );
}
