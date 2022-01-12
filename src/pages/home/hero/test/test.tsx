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
  align-self: flex-start;
  transform: translate(-83px, -122px);
  z-index: 302;
`;
const Image = styled.img.attrs((props) => ({
  src: props.src || halfCircle,
  alt: props.alt || "",
}))`
  z-index: 300;
  width: 70px;
  transform: translate(-15px, 0);
`;

const Container = styled.div<{
  margin?: string;
  grid?: string;
  pos?: string;
}>`
  display: block;
  box-sizing: border-box;
  outline: 1px solid red;
  width: 50%;
  margin: ${({ margin }) => margin};
  position: ${({ pos }) => pos};
  grid-area: ${({ grid }) => grid};
`;

const FlexColumn = styled.div<{
  align?: string;
  zIndex?: number;
  transform?: string;
}>`
  display: flex;
  box-sizing: border-box;
  outline: 1px solid red;
  position: relative;
  flex-direction: column;
  align-items: ${({ align }) => align};
  z-index: ${({ zIndex }) => zIndex};
  transform: ${({ transform }) => transform};
`;

const FlexRow = styled.div`
  display: flex;
  box-sizing: border-box;
  outline: 1px solid red;
  justify-content: flex-end;
`;

const HomePage: React.FC = () => {
  return (
    <Container margin="200px 0 0 0">
      <Box>
        <TwoColumnGrid>
          <FlexColumn zIndex={10}>
            <NavMenu />
            <Pazzles />
          </FlexColumn>
          <FlexColumn
            transform="translate(-255px, -18px)"
            align="center"
            zIndex={9}
          >
            <GreenPuzzle />
            <MediumCircle />
            <SmallCircle />
            <BigCircle />
            <ActionCell>
              <Button primary uppercase large>
                Пройти тест
              </Button>
              <Image src={halfCircle} alt="" />
            </ActionCell>
          </FlexColumn>
        </TwoColumnGrid>
      </Box>
      <Box>
        <TwoColumnGrid>
          <Box></Box>
        </TwoColumnGrid>
      </Box>
    </Container>
  );
};

export default HomePage;
