import React from "react";
import styled from "styled-components";
import { Link } from "../../../ui/controls";
import { ScreenSize } from "../../../ui/types";

const StyledSlide = styled.div`
  background-color: #fff;
  box-sizing: border-box;
  height: 183px;
  margin: 10px;

  @media (max-width: ${ScreenSize.Large}px) {
    height: 130px;
  }

  @media (max-width: ${ScreenSize.Medium}px) {
    height: 110px;
  }
`;

const StyledImage = styled.img`
  object-fit: contain;
  border: 1px solid #ddd;
  border-radius: 4px;
  width: 100%;
  height: 163px;
  padding: 5px;
  margin: 5px;

  &:hover {
    box-shadow: 0 0 2px 1px rgba(0, 140, 186, 0.5);
  }

  @media (max-width: ${ScreenSize.Large}px) {
    height: 110px;
  }

  @media (max-width: ${ScreenSize.Medium}px) {
    height: 90px;
  }

  @media (max-width: ${ScreenSize.MediumSmall}px) {
    width: 90%;
  }
`;

interface SlideProps {
  imageSource: string;
  name: string;
  url: string;
}

const Slide: React.FC<SlideProps> = ({ imageSource, name, url }) => {
  return (
    <StyledSlide>
      <Link to={url} borderBottomOnHover={false}>
        <StyledImage src={imageSource} alt={name} title={name} />
      </Link>
    </StyledSlide>
  );
};

export default Slide;
