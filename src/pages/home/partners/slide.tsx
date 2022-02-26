import React from "react";
import styled from "styled-components";
import { Link } from "../../../ui/controls";

const StyledSlide = styled.div`
  background-color: #fff;
  box-sizing: border-box;
  height: 100px;
`;

const StyledImage = styled.img`
  object-fit: contain;
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
