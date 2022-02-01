import React from "react";
import styled from "styled-components";
import { ScreenSize } from "../../../ui/types";
import Test from "./test/test";
import Slider from "./slider/slider";
import { TwoColumnGrid, Section } from "../../../ui/controls";

const StyledSection = styled(Section)`
  transform: translateY(-120px);
  margin-bottom: -120px;
  @media (max-width: ${ScreenSize.Medium}px) {
    margin-bottom: 0;
    transform: translateY(0);
  }
  @media (max-width: ${ScreenSize.Small}px) {
    margin-bottom: -200px;
  }
  @media (max-width: ${ScreenSize.XSmall}px) {
    margin-bottom: -300px;
  }
`;

const Hero: React.FC = () => {
  return (
    <StyledSection mt={2}>
      <TwoColumnGrid>
        <Test />
        <Slider />
      </TwoColumnGrid>
    </StyledSection>
  );
};

export default Hero;
