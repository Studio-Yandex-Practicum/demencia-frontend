import React from "react";
import styled from "styled-components";
import Test from "./test/test";
import Slider from "./slider/sliderV2";
import { Section, TwoColumnGrid } from "../../../ui/controls/layout";
import { ScreenSize } from "../../../ui/types";

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  max-width: 100%;

  @media (min-width: ${ScreenSize.Large}px) {
    grid-template-columns: 280px repeat(2, minmax(${ScreenSize.XXSmall}px, 1fr));
  }
`;

const Hero: React.FC = () => {
  return (
    // <Section flex direction="row">
    //   <TwoColumnGrid>
    //     <Test />
    //     <Slider />
    //   </TwoColumnGrid>
    // </Section>
    <Grid>
      <Test />
      <Slider />
    </Grid>
  );
};

export default Hero;
