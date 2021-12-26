import React from "react";
import { Section } from "../../../../ui/controls/layout";
import { Box, Button } from "../../../../ui/controls";
import NavMenu from "./nav-menu";
import Decor from "./decor";
import halfCircle from "../../../../images/halfcirclegreen.png";

const HomePage: React.FC = () => {
  return (
    <Section>
      <NavMenu />
      <Decor />
      <Box>
        <Button primary uppercase>
          Пройти тест
        </Button>
        <img src={halfCircle} alt="" />
      </Box>
    </Section>
  );
};

export default HomePage;
