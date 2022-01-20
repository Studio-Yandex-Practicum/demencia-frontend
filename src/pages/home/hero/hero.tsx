import React from "react";
import Test from "./test/test";
import Slider from "./slider/slider";
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
