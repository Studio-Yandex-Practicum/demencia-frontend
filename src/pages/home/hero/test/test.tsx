import React from "react";
import styled from "styled-components";
import { BigCircle, MediumCircle, SmallCircle } from "./decor";
import { ScreenSize } from "../../../../ui/types";
import { Box } from "../../../../ui/controls";
import NavMenu from "./nav-menu";
import { useQuery } from "@apollo/client";
import { SettingsData } from "../../../../types/settings";
import { GET_SETTINGS } from "../../../../gql/query/settings";
import ButtonWithSemicircle from "../../../../components/button-with-semicircle";
import Puzzles from "../../../../components/puzzles";
import GreenPuzzle from "../../../../components/green-puzzle";
import { useNavigate } from "react-router-dom";

const Actions = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
  @media (max-width: ${ScreenSize.Medium}px) {
    position: relative;
    width: 100vw;
    justify-content: center;
    margin-top: 290px;
    margin-bottom: 15px;
  }
  @media (max-width: ${ScreenSize.Small}px) {
    margin-top: 280px;
  }
  @media (max-width: ${ScreenSize.XSmall}px) {
    transform: scale(0.8);
    margin-top: 230px;
  }
`;

const StyledBox = styled(Box)`
  margin-top: 126px;
  min-height: 520px;
  position: relative;
  @media (max-width: ${ScreenSize.Medium}px) {
    width: 45vw;
    margin-top: 50px;
    min-height: 0;
  }
  @media (max-width: ${ScreenSize.XSmall}px) {
    margin-top: 10px;
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
  const navigate = useNavigate();
  const { data } = useQuery<SettingsData>(GET_SETTINGS, {
    fetchPolicy: "cache-first",
  });

  if (!data || !data.settings.mainSectionButtonLabel)
    return <DefaultCaption title="Пройти тест" />;

  const buttonCaption = data.settings.mainSectionButtonLabel;

  if (!buttonCaption.length) return <DefaultCaption title="Пройти тест" />;

  function onClick() {
    navigate("/test");
  }

  return (
    <StyledBox>
      <GreenPuzzle />
      <StyledNavBox>
        <NavMenu />
        <Puzzles />
      </StyledNavBox>
      <Box width="100%" height="100px" absolute top="0" left="0">
        <SmallCircle />
        <MediumCircle />
        <BigCircle />
      </Box>
      <Actions>
        <ButtonWithSemicircle
          maxWidth={300}
          buttonText={buttonCaption}
          margin={"0 60px 0 0"}
          onClick={onClick}
          animate
        />
      </Actions>
    </StyledBox>
  );
};

export default Test;
