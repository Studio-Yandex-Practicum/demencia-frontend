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
import { TwoColumnGrid } from "../../../../ui/controls/layout";

const ActionCell = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  top: 115px;

  @media (max-width: ${ScreenSize.Large}px) {
    top: 165px;
  }

  @media (max-width: ${ScreenSize.Medium}px) {
    justify-content: center;
    top: -15px;
  }
  @media (max-width: ${ScreenSize.Small}px) {
    top: 5px;
  }
  @media (max-width: ${ScreenSize.XSmall}px) {
    top: 0;
    margin-top: 80px;
    width: 290px;
    height: 50px;
    left: calc(100% / 2 - 290px / 2);
  }
`;

const Container = styled.div`
  margin-top: 200px;

  @media (max-width: ${ScreenSize.Medium}px) {
    margin-top: 165px;
  }
`;

const HomePage: React.FC = () => {
  return (
    <Container>
      <Box>
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
          <Button primary uppercase width={328} zIndex={310}>
            Пройти тест
          </Button>
          <HalfCircle />
        </ActionCell>
      </Box>
    </Container>
  );
};

export default HomePage;
