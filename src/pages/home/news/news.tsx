import React from "react";
import styled from "styled-components";
import { Section } from "../../../ui/controls/layout";
import { Container, Box } from "../../../ui/controls";
import { ContainerSize, PaletteColor, ScreenSize } from "../../../ui/types";
import { Title, Text3 } from "../../../ui/controls/typography";
import Slider from "./slider";

const StyledContainer = styled(Container)`
  align-items: flex-end;
  align-self: end;
  margin-right: 6vw;
  @media (max-width: ${ScreenSize.Small}px) {
    align-items: center;
    margin-right: 0;
  }
`;

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

const StyledText3 = styled(Text3)`
  font-size: 18px !important;
`;

const News: React.FC = () => {
  return (
    <StyledSection id="news" flex centered height="735px">
      <StyledSection
        flex
        centered
        pt={3}
        pr={3}
        backgroundColor={PaletteColor.LightGreen}
        borderBox
        minHeight="90%"
      >
        <StyledContainer size={ContainerSize.Large}>
          <Box>
            <StyledTitle>Что нового?</StyledTitle>
          </Box>
          <Box mb={5}>
            <StyledText3>Перейти к ленте новостей</StyledText3>
          </Box>
        </StyledContainer>
      </StyledSection>
      <StyledBox
        width="calc(100% - 48px)"
        pt={6}
        pl={12}
        pb={12}
        pr={12}
        backgroundColor={PaletteColor.DarkPurple}
        absolute
        bottom="0"
      >
        <Slider />
      </StyledBox>
    </StyledSection>
  );
};

export default News;
