import React from "react";
import styled from "styled-components";
import { ScreenSize } from "../../../ui/types";
import Test from "./test/test";
import Slider from "./slider/slider";
import { TwoColumnGrid, Section } from "../../../ui/controls/layout";

const StyledSection = styled(Section)`
  transform: translateY(-120px);
  margin-bottom: -120px;
  @media (max-width: ${ScreenSize.Medium}px) {
    margin-bottom: 0;
    transform: translateY(0);
  }
`;

const Hero: React.FC = () => {
  return (
    <StyledSection>
      <TwoColumnGrid>
        <Test />
        <Slider />
      </TwoColumnGrid>
    </StyledSection>
  );
};

export default Hero;
