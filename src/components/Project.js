import React from "react";
import Link from "next/link";
import {
  ProjectContainer,
  TextContainer,
  ImageContainer,
  CtaContainer,
} from "../../styles/Projects.styled";
import Image from "next/image";

export const Project = ({
  project,
  header,
  live,
  sourceCode,
  descriptionOne,
  descriptionTwo,
}) => {
  return (
    <ProjectContainer>
      <ImageContainer>
        <Image layout="fill" className="image" src={`/images/${project}.jpg`} />
      </ImageContainer>
      <TextContainer>
        <h1>{header} </h1>
        <span>{descriptionOne}</span>
        <span>{descriptionTwo}</span>
      </TextContainer>
      <CtaContainer>
        <a target="_blank" href={live}>
          <button>View Live</button>
        </a>
        <a target="_blank" href={sourceCode}>
          <button>Source Code</button>
        </a>
      </CtaContainer>
    </ProjectContainer>
  );
};
