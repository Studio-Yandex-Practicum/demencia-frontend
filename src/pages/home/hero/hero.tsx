import React from "react";
import { TwoColumnSection } from "../../../ui/controls/layout";
import Test from "./test/test";

const HomePage: React.FC = () => {
  return (
    <TwoColumnSection>
      <Test />
      <div>Slider</div>
    </TwoColumnSection>
  );
};

export default HomePage;
