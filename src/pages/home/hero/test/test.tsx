import React from "react";
import styled from "styled-components";
import {
  Pazzles,
  GreenPuzzle,
  BigCircle,
  MediumCircle,
  SmallCircle,
  HalfCircle,
} from "./decor";
import { ScreenSize } from "../../../../ui/types";
import { Button, Box } from "../../../../ui/controls";
import NavMenu from "./nav-menu";
import { StringValueNode } from "graphql";

const ActionCell = styled.div`
  width: 100vw;
  display: flex;
  align-items: center;
  margin-top: 115px;
  margin-left: 8px;
  @media (max-width: ${ScreenSize.Large}px) {
    margin-top: 170px;
  }
  @media (max-width: ${ScreenSize.Medium}px) {
    justify-content: center;
    margin-top: 90px;
    margin-left: -25px;
  }
`;

const Decoration = styled.div`
  margin-top: 75px;
  max-width: 45vw;
  nim-height: 1050px;
  position: relative;
`;

const StyledButton = styled(Button)`
  @media (max-width: ${ScreenSize.Medium}px) {
    height: 63px;
  }
  @media (max-width: ${ScreenSize.XSmall}px) {
    width: 230px;
    height: 45px;
    font-size: 16px;
  }
`;

const StyledBox = styled(Box)`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100px;
`;

const HomePage: React.FC = () => {
  return (
    <Decoration>
      <GreenPuzzle />
      <NavMenu />
      <Pazzles />
      <StyledBox>
        <SmallCircle />
        <MediumCircle />
        <BigCircle />
      </StyledBox>
      <ActionCell>
        <StyledButton primary uppercase width={300} zIndex={310}>
          Пройти тест
        </StyledButton>
        <HalfCircle />
      </ActionCell>
    </Decoration>
  );
};

export default HomePage;
