import React from "react";
import {
  ProjectContainer,
  TextContainer,
  ImageContainer,
} from "../../styles/Projects.styled";
import Image from "next/image";


export const Project = ({
  project,
  header,
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
    </ProjectContainer>
  );
};
