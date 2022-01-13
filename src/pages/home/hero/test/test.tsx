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
import { TwoColumnGrid } from "../../../../ui/controls/layout";

const ActionCell = styled.div`
  display: flex;
  box-sizing: border-box;
  align-items: center;
  margin-left: 16px;
`;
const Image = styled.img.attrs((props) => ({
  src: props.src || halfCircle,
  alt: props.alt || "",
}))`
  z-index: 300;
  width: 70px;
  transform: translate(-20px, 0);
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
        <Container pos="relative"></Container>
        <NavMenu />
      </Box>
      <Box>
        <TwoColumnGrid>
          <Box>
            <Pazzles />
          </Box>
          <Box>
            <GreenPuzzle />
            <SmallCircle />
            <BigCircle />
            <MediumCircle />
          </Box>
        </TwoColumnGrid>
        <ActionCell>
          <Button primary uppercase>
            Пройти тест
          </Button>
          <Image src={halfCircle} alt="" />
        </ActionCell>
      </Box>
    </Container>
  );
};

export default HomePage;
