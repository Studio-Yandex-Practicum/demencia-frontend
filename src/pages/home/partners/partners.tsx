import React from "react";
import styled from "styled-components";
import { Section } from "../../../ui/controls/layout";
import { Container, Box } from "../../../ui/controls";
import { PaletteColor, ScreenSize, TextColor } from "../../../ui/types";
import { Title, Subtitle4 } from "../../../ui/controls/typography";
import Slider from "./slider";
import semiCircle from "../../../images/semicircle-purple.svg";

const StyledSection = styled(Section)<{
  minHeight?: string;
  height?: string;
}>`
  min-height: ${(props) => props.minHeight};
  height: ${(props) => props.height};
  @media (max-width: ${ScreenSize.Large}px) {
    height: 680px;
  }
  @media (max-width: ${ScreenSize.Medium}px) {
    height: 645px;
  }
  @media (max-width: ${ScreenSize.Small}px) {
    height: 575px;
  }
  @media (max-width: ${ScreenSize.XSmall}px) {
    height: 525px;
  }
  @media (max-width: ${ScreenSize.XXSmall}px) {
    height: 450px;
  }
`;

const StyledBox = styled(Box)`
  @media (max-width: ${ScreenSize.Medium}px) {
    padding-bottom: 48px;
  }
  @media (max-width: ${ScreenSize.Small}px) {
    padding: 16px 56px;
    width: 100%;
  }
`;

const StyledTitle = styled(Title)`
  @media (max-width: ${ScreenSize.XSmall}px) {
    font-size: 30px;
  }
`;

const StyledText = styled(Subtitle4)`
  font-size: 18px !important;
`;

const Partners: React.FC = () => {
  return (
    <StyledSection id="partners" flex centered height="800px">
      {semiCircle}
      <Container>
        <Box ml={8}>
          <StyledTitle textColor={TextColor.Accent1}>Кто с нами?</StyledTitle>
        </Box>
        <Box ml={8}>
          <StyledText textColor={TextColor.Shadow}>Партнёры</StyledText>
        </Box>
      </Container>

      <StyledBox
        width="100%"
        pl={12}
        pb={12}
        pr={12}
        backgroundColor={PaletteColor.Transparent}
        absolute
        bottom="0"
      >
        <Slider />
      </StyledBox>
    </StyledSection>
  );
};

export default Partners;
