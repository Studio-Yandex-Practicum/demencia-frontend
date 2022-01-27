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
import { useQuery } from "@apollo/client";
import { SettingsData } from "../../../../types/settings";
import { GET_SETTINGS } from "../../../../gql/query/settings";

const Actions = styled.div`
  display: flex;
  align-items: center;
  margin-top: -33px;
  margin-left: 8px;
  @media (max-width: ${ScreenSize.Large}px) {
    margin-top: 0;
  }
  @media (max-width: ${ScreenSize.Medium}px) {
    width: 100%;
    justify-content: center;
    margin-top: 220px;
    margin-left: 0;
  }
  @media (max-width: ${ScreenSize.Small}px) {
    margin-top: 240px;
  }
  @media (max-width: ${ScreenSize.XSmall}px) {
    margin-top: 180px;
  }
`;

const StyledBox = styled(Box)`
  margin-top: 126px;
  min-height: 520px;
  position: relative;
  @media (max-width: ${ScreenSize.Medium}px) {
    max-width: 45vw;
    margin-top: 50px;
    min-height: 0;
  }
  @media (max-width: ${ScreenSize.XSmall}px) {
    margin-top: 10px;
  }
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

const StyledNavBox = styled(Box)`
  min-height: 340px;
  width: fit-content;
  @media (max-width: ${ScreenSize.Medium}px) {
    min-height: 0;
  }
`;

const DefaultCaption: React.FC<{ title: string }> = ({ title }) => <>{title}</>;

const Test: React.FC = () => {
  const { data } = useQuery<SettingsData>(GET_SETTINGS, {
    fetchPolicy: "cache-first",
  });

  if (!data || !data.settings.mainSectionButtonLabel)
    return <DefaultCaption title="Пройти тест" />;

  const buttonCaption = data.settings.mainSectionButtonLabel;

  if (!buttonCaption.length) return <DefaultCaption title="Пройти тест" />;

  return (
    <StyledBox>
      <GreenPuzzle />
      <StyledNavBox>
        <NavMenu />
        <Pazzles />
      </StyledNavBox>
      <Box width="100%" height="100px" absolute top="0" left="0">
        <SmallCircle />
        <MediumCircle />
        <BigCircle />
      </Box>
      <Actions>
        <StyledButton primary uppercase width={300} zIndex={310}>
          {buttonCaption}
        </StyledButton>
        <HalfCircle />
      </Actions>
    </StyledBox>
  );
};

export default Test;
