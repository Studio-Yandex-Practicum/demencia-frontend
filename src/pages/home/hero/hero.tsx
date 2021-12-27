import React from "react";
import { TwoColumnSection } from "../../../ui/controls/layout";
import Test from "./test/test";
import Slider from "./slider/slider";

const HomePage: React.FC = () => {
  return (
    <TwoColumnSection>
      <Test />
      <Slider />
    </TwoColumnSection>
  );
};

export default HomePage;
