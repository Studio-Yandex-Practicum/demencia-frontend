import React from "react";
import styled from "styled-components";
import { Subtitle3, Text3 } from "../../../ui/controls/typography";
import { Box, Link, LinkButton } from "../../../ui/controls";
import { ScreenSize } from "../../../ui/types";

const StyledSlide = styled.div`
  background-color: #fff;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.25), 0 5px 5px rgba(0, 0, 0, 0.22);
  padding: 16px;
  height: 420px;
  @media (max-width: ${ScreenSize.Large}px) {
    height: 385px;
  }
  @media (max-width: ${ScreenSize.XSmall}px) {
    align-items: center;
  }
  @media (max-width: ${ScreenSize.XXSmall}px) {
    height: 300px;
  }
`;

const StyledImage = styled.img`
  object-fit: cover;
  width: 100%;
  height: 45%;
  flex-shrink: 0;
`;

const StyledBox = styled(Box)`
  align-self: self-end;
  @media (max-width: ${ScreenSize.XSmall}px) {
    margin-bottom: 0;
  }
`;

const StyledTitle = styled(Subtitle3)`
  @media (max-width: ${ScreenSize.XSmall}px) {
    font-size: 16px;
  }
`;

interface SlideProps {
  imageSource: string;
  slideTitle: string;
  slideText?: string;
  linkTitle?: string;
  linkTo: string;
}

const Slide: React.FC<SlideProps> = ({
  imageSource,
  slideTitle,
  slideText,
  linkTitle,
  linkTo,
}) => {
  return (
    <StyledSlide>
      <StyledImage src={imageSource} alt="илюстрация новости" />
      <Box height="100%">
        <StyledTitle mt={1}>{slideTitle}</StyledTitle>
        <Text3 mt={1}>{slideText}</Text3>
      </Box>
      <StyledBox mb={1}>
        <Link
          zoomTextOnHover={false}
          borderBottomOnHover={false}
          to={linkTo || "/"}
        >
          <LinkButton>{linkTitle || "Подробнее"}</LinkButton>
        </Link>
      </StyledBox>
    </StyledSlide>
  );
};

export default Slide;
