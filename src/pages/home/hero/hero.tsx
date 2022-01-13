import React from "react";
import styled from "styled-components";
import Test from "./test/test";
import Slider from "./slider/sliderV2";
import { Box } from "../../../ui/controls";
import { TwoColumnGrid } from "../../../ui/controls/layout";

const OffsetY = styled.div`
  transform: translateY(-120px);
`;

const Hero: React.FC = () => {
  return (
    <OffsetY>
      <Box ml={1}>
        <TwoColumnGrid>
          <Test />
          <Slider />
        </TwoColumnGrid>
      </Box>
    </OffsetY>
  );
};

export default Hero;
