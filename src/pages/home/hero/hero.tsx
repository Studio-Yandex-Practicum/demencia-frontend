import React from "react";
import Test from "./test/test";
import Slider from "./slider/sliderV2";
import { TwoColumnGrid, Section } from "../../../ui/controls/layout";

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
