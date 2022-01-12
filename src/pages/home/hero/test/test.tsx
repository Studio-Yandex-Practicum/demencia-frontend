import React from "react";
import styled from "styled-components";
import {
  Pazzles,
  GreenPuzzle,
  BigCircle,
  MediumCircle,
  SmallCircle,
} from "./decor";
import { Button, Box } from "../../../../ui/controls";
import NavMenu from "./nav-menu";
import halfCircle from "../../../../images/halfcirclegreen.png";
import { StringValueNode } from "graphql";

const ActionCell = styled.div`
  display: flex;
  box-sizing: border-box;
  align-items: center;
  margin-left: 40px;
  z-index: 350;
`;
const Image = styled.img.attrs((props) => ({
  src: props.src || halfCircle,
  alt: props.alt || "",
}))`
  z-index: 300;
  transform: translate(-15px, 0);
`;

const Container = styled.div<{
  margin?: string;
  grid?: string;
  pos?: string;
}>`
  display: block;
  box-sizing: border-box;
  margin: ${({ margin }) => margin};
  position: ${({ pos }) => pos};
  grid-area: ${({ grid }) => grid};
`;

const HomePage: React.FC = () => {
  return (
    <Container grid="1/1/2/3" margin="200px 5vw 0 0">
      <Box>
        <Container pos="relative">
          <GreenPuzzle />
        </Container>
        <NavMenu />
      </Box>
      <Container>
        <Pazzles />
        <BigCircle>
          <SmallCircle />
        </BigCircle>
      </Container>
      {/* <MediumCircle />
      <ActionCell>
        <Button primary uppercase>
          Пройти тест
        </Button>
        <Image src={halfCircle} alt="" />
      </ActionCell> */}
    </Container>
  );
};

export default HomePage;
