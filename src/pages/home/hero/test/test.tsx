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
import { Text3 } from "../../../../ui/controls/typography";
import NavMenu from "./nav-menu";
import { StringValueNode } from "graphql";
import { useQuery } from "@apollo/client";
import { toast } from "react-hot-toast";
import { SettingsData } from "../../../../types/settings";
import { GET_SETTINGS } from "../../../../gql/query/settings";

const Actions = styled.div`
  width: 100vw;
  display: flex;
  align-items: center;
  margin-top: 170px;
  margin-left: 8px;
  @media (max-width: ${ScreenSize.Large}px) {
    margin-top: 185px;
  }
  @media (max-width: ${ScreenSize.Medium}px) {
    justify-content: center;
    margin-top: 105px;
    margin-left: -25px;
  }
  @media (max-width: ${ScreenSize.Small}px) {
    margin-top: 155px;
    margin-left: 0;
  }
  @media (max-width: ${ScreenSize.XSmall}px) {
    margin-top: 125px;
  }
`;

const StyledBox = styled(Box)`
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

const DefaultCaption: React.FC<{ title: string }> = ({ title }) => <>{title}</>;

const Test: React.FC = () => {
  const { data, loading, error } = useQuery<SettingsData>(GET_SETTINGS);

  if (error) {
    toast.error(`Не удалось загрузить данные с сервера`, { id: "error" });
    return <DefaultCaption title="Пройти тест" />;
  }

  if (loading) return <DefaultCaption title="Загрузка..." />;

  if (!data || !data.settings) return <DefaultCaption title="Пройти тест" />;

  const buttonCaption = data.settings.mainSectionButtonLabel;

  if (!buttonCaption.length) return <DefaultCaption title="Пройти тест" />;

  return (
    <StyledBox>
      <GreenPuzzle />
      <Box width="fit-content">
        <NavMenu />
      </Box>
      <Pazzles />
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
