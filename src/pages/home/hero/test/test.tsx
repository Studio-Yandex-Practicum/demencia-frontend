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
import { TwoColumnGrid, Section } from "../../../../ui/controls/layout";

const ActionCell = styled.div`
  width: 100vw;
  display: flex;
  align-items: center;
  margin-top: 260px;
  margin-left: 8px;
  @media (max-width: ${ScreenSize.Medium}px) {
    justify-content: center;
  }
`;

const Offset = styled.div`
  margin-top: 150px;
  max-width: 50vw;

  @media (max-width: ${ScreenSize.Medium}px) {
    margin-top: 100px;
  }
`;

const Decoration = styled.div`
  margin-top: 75px;
  max-width: 50vw;
  position: relative;
  display: flex;
`;

const Spacer = styled.div`
  width: 650px;
`;

const StyledButton = styled(Button)`
  @media (max-width: ${ScreenSize.XSmall}px) {
    width: 230px;
    height: 45px;
    font-size: 16px;
  }
`;

const HomePage: React.FC = () => {
  return (
    <Decoration>
      <TwoColumnGrid>
        <Box>
          <NavMenu />
          <Pazzles />
        </Box>
        <Box>
          <GreenPuzzle />
          <SmallCircle />
          <MediumCircle />
          <BigCircle />
          <Spacer />
        </Box>
      </TwoColumnGrid>
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
