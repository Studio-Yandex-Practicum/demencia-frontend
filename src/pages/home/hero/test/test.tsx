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

  @media (max-width: ${ScreenSize.Medium}px) {
    justify-content: center;
    top: -5px;
  }
  @media (max-width: ${ScreenSize.Small}px) {
    top: 50px;
  }
  @media (max-width: ${ScreenSize.XSmall}px) {
    top: 0;
    margin-top: 75px;
    width: 272px;
    height: 45px;
    left: calc(100% / 2 - 240px / 2);
  }
`;

const Container = styled.div`
  margin-top: 200px;

  @media (max-width: ${ScreenSize.Medium}px) {
    margin-top: 165px;
  }
`;
const StyledButton = styled(Button)`
  @media (max-width: ${ScreenSize.XSmall}px) {
    height: 45px;
    font-size: 16px;
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
          <StyledButton primary uppercase width={328} zIndex={310}>
            Пройти тест
          </StyledButton>
          <HalfCircle />
        </ActionCell>
      </Box>
    </Container>
  );
};

export default HomePage;
