import React from "react";
import styled from "styled-components";
import Test from "./test/test";
import Slider from "./slider/sliderV2";
import { TwoColumnGrid, Section } from "../../../ui/controls/layout";

const OffsetY = styled.div`
  transform: translateY(-120px);
`;

const Hero: React.FC = () => {
  return (
    <Section>
      <TwoColumnGrid>
        <Test />
        <Slider />
      </TwoColumnGrid>
    </Section>
  );
};

export default Hero;
