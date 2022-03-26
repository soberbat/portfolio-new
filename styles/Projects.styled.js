import styled from "styled-components";

export const Inner = styled.section`
  width: 100%;
  max-width: 880px;
  padding: 2rem;
  display: flex;
  gap: 10rem;
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
  border: 0.5px solid #bebebe;
  z-index: 0;

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
  gap: 5rem;
`;

export const TextContainer = styled.div`
  max-width: 75%;
  text-align: left;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  h1 {
    font-weight: 700;
    font-size: 1.8rem;

    color: #0d0d0d;
    letter-spacing: 0.4rem;
  }

  span {
    font-weight: 100;
    line-height: 1.5rem;
    font-size: 0.9rem;
    color: ${({ theme }) => theme.grayDarker};

    span {
      color: #0d0d0d;
      font-style: italic;
    }
  }
`;
