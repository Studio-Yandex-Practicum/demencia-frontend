import React from "react";
import styled from "styled-components";
import { Section } from "../../../../ui/controls/layout";
import { Button } from "../../../../ui/controls";
import NavMenu from "./nav-menu";
import Decor from "./decor";
import halfCircle from "../../../../images/halfcirclegreen.png";

const ActionArea = styled.div`
  display: flex;
  box-sizing: border-box;
  align-items: center;
  margin-left: 40px;
`;
const Image = styled.img.attrs((props) => ({
  src: props.src || halfCircle,
  alt: props.alt || "",
}))`
  z-index: 300;
`;

const HomePage: React.FC = () => {
  return (
    <Section>
      <NavMenu />
      <Decor />
      <ActionArea>
        <Button primary uppercase>
          Пройти тест
        </Button>
        <Image src={halfCircle} alt="" />
      </ActionArea>
    </Section>
  );
};

export default HomePage;
