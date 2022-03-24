import styled from "styled-components";

export const Inner = styled.section`
  width: 100%;
  max-width: 880px;
  padding: 2rem;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const ImageContainer = styled.div`
  width: 100%;
  border-radius: 7px;
  overflow: hidden;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
  position: relative;
  border: 0.4px solid #bebebe;

  h1 {
    font-weight: 700;
  }

  div,
  span {
    position: unset !important;
  }

  .image {
    object-fit: contain;

    width: 100% !important;
    position: relative !important;
    height: unset !important;
  }
`;

export const ProjectContainer = styled.div`
  text-align: left;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 3rem;
`;

export const TextContainer = styled.div`
  max-width: 80%;
  text-align: left;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  h1 {
    font-weight: 700;
    font-size: 2rem;
    color: #0d0d0d;
  }
`;
