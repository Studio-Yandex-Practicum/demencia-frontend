import React from "react";
import styled from "styled-components";
import { Section } from "../../../ui/controls/layout";
import { Container, Box } from "../../../ui/controls";
import { ContainerSize, PaletteColor, ScreenSize } from "../../../ui/types";
import { BackgroundColor } from "../../../ui/types/background-color.enum";
import { Title, Text3 } from "../../../ui/controls/typography";
import Slider from "./slider";

const StyledContainer = styled(Container)`
  align-items: flex-end;
  @media (max-width: ${ScreenSize.XSmall}px) {
    align-items: center;
  }
`;

const StyledSection = styled(Section)<{
  minHeight?: string;
  height?: string;
}>`
  min-height: ${(props) => props.minHeight};
  height: ${(props) => props.height};
  @media (max-width: ${ScreenSize.XSmall}px) {
    height: 640px;
  }
`;

const StyledSwiper = styled(Container)`
  position: absolute;
  bottom: 0;
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
    <StyledSection flex centered height="735px">
      <StyledSection
        flex
        centered
        pt={3}
        pr={3}
        backgroundColor={PaletteColor.LightGreen}
        borderBox
        minHeight="60%"
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
      <StyledSwiper size={ContainerSize.Large} bgColor={BackgroundColor.Alt1}>
        <Box pt={2} pl={2} pb={2} pr={2}>
          <Slider />
        </Box>
      </StyledSwiper>
    </StyledSection>
  );
};

export default News;
