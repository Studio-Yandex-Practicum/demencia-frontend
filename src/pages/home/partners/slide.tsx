import React from "react";
import styled from "styled-components";
import { Link } from "../../../ui/controls";

const StyledSlide = styled.div`
  background-color: #fff;
  box-sizing: border-box;
  transition: all 1s ease;
  height: 100px;
  &:hover {
    transform: scale(1.1);
  }
`;

const StyledImage = styled.img`
  object-fit: contain;
  transition: all 1s ease;
  width: 100%;
  height: 100%;
`;

interface SlideProps {
  imageSource: string;
  name: string;
  url: string;
}

const Slide: React.FC<SlideProps> = ({ imageSource, name, url }) => {
  return (
    <StyledSlide>
      <Link to={url}>
        <StyledImage src={imageSource} alt={name} title={name} />
      </Link>
    </StyledSlide>
  );
};

export default Slide;
