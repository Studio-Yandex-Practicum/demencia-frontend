import React from "react";
import styled from "styled-components";
import Test from "./test/test";
import Slider from "./slider/sliderV2";
import { Box } from "../../../ui/controls";
import image from "../hero/slider/pechkin.png";
import { TwoColumnGrid } from "../../../ui/controls/layout";

const OffsetY = styled.div`
  transform: translateY(-120px);
`;

const Image = styled.img.attrs((props) => ({
  src: props.src || image,
}))`
  width: 100%;
  max-width: 50%;
  height: auto;
  object-fit: none;
  object-position: top;
`;

const Flex = styled.div`
  width: 100%;
  max-width: 1920px;
  display: flex;
  position: relative;
`;

const Hero: React.FC = () => {
  return (
    <OffsetY>
      <Box ml={1}>
        <Flex>
          <Test />
          <Image />
          {/* <Slider /> */}
        </Flex>
      </Box>
    </OffsetY>
  );
};

export default Hero;
