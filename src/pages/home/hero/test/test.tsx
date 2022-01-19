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

const Actions = styled.div`
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
  @media (max-width: ${ScreenSize.Small}px) {
    margin-top: 155px;
    margin-left: 0;
  }
  @media (max-width: ${ScreenSize.XSmall}px) {
    margin-top: 105px;
  }
`;

const Decoration = styled.div`
  margin-top: 75px;
  max-width: 45vw;
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

const StyledBox = styled(Box)<{
  width?: string;
  position?: string;
}>`
  position: ${({ position }) => position};
  left: 0;
  top: 0;
  width: ${({ width }) => width};
  height: 100px;
`;

const HomePage: React.FC = () => {
  return (
    <Decoration>
      <GreenPuzzle />
      <StyledBox width="fit-content" position="relative">
        <NavMenu />
      </StyledBox>
      <Pazzles />
      <StyledBox width="100%" position="absolute">
        <SmallCircle />
        <MediumCircle />
        <BigCircle />
      </StyledBox>
      <Actions>
        <StyledButton primary uppercase width={300} zIndex={310}>
          Пройти тест
        </StyledButton>
        <HalfCircle />
      </Actions>
    </Decoration>
  );
};

export default HomePage;
