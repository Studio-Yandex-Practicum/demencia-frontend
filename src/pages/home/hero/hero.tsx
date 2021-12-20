import React from "react";
import styled from "styled-components";
import Test from "./test/test";
import Slider from "./slider/slider";

const Section = styled.section`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  grid-gap: 0;
`;

const Hero: React.FC = () => {
  return (
    <Section>
      <Test />
      <Slider />
    </Section>
  );
};

export default Hero;
