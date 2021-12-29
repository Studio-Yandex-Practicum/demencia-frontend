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

const MenuCell = styled.div`
  grid-area: 1/1/2/2;
`;
const ActionCell = styled.div`
  display: flex;
  box-sizing: border-box;
  align-items: center;
  grid-area: 3/1/4/3;
  margin-left: 40px;
`;
const Image = styled.img.attrs((props) => ({
  src: props.src || halfCircle,
  alt: props.alt || "",
}))`
  z-index: 300;
  transform: translate(-15px, 0);
`;

const HomePage: React.FC = () => {
  return (
    <>
      <MenuCell>
        <NavMenu />
      </MenuCell>
      <Box ml={5}>
        <GreenPuzzle />
      </Box>
      <Pazzles />
      <SmallCircle />
      <MediumCircle />
      <BigCircle />
      <ActionCell>
        <Button primary uppercase>
          Пройти тест
        </Button>
        <Image src={halfCircle} alt="" />
      </ActionCell>
    </>
  );
};

export default HomePage;
