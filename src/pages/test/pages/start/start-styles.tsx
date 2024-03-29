import styled from "styled-components";
import {
  Box,
  Container,
  Section,
  Text1,
  Subtitle3,
} from "../../../../ui/controls";
import { ScreenSize } from "../../../../ui/types";
import Puzzles from "../../../../components/puzzles";
import GreenPuzzle from "../../../../components/green-puzzle";
import ButtonWithSemicircle from "../../../../components/button-with-semicircle";

export const Actions = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: ${ScreenSize.Medium}px) {
    position: relative;
    width: 90vw;
    justify-content: center;
  }
  @media (max-width: ${ScreenSize.XSmall}px) {
    transform: scale(0.7);
  }
`;

export const StyledInfoSection = styled(Section)`
  transform: translateY(-100px);
  margin-bottom: -120px;
  @media (max-width: 1300px) {
    margin-bottom: 0;
    transform: translateY(0);
    margin-top: 20px;
  }
`;

export const StyledTestSection = styled(Section)`
  @media (max-width: ${ScreenSize.Small}px) {
    padding-top: 40px;
  }
`;

export const StyledContainer = styled(Container)`
  align-self: flex-end;
  align-items: center;
  justify-content: center;
  @media (max-width: 1300px) {
    max-width: 100%;
  }
`;

export const StyledPuzzles = styled(Puzzles)`
  width: 230px;
  margin-top: 0;
  position: absolute;
  left: 0;
  margin-left: -300px;
  @media (max-width: ${ScreenSize.Large}px) {
    margin-left: -210px;
  }
  @media (max-width: ${ScreenSize.Medium}px) {
    display: none;
  }
`;

export const StyledGreenPuzzle = styled(GreenPuzzle)`
  width: 99px;
  height: auto;
  right: 0;
  top: 0;
  margin-right: -120px;
  @media (max-width: ${ScreenSize.Large}px) {
    margin-right: -80px;
  }
  @media (max-width: ${ScreenSize.Medium}px) {
    display: none;
  }
`;

export const StyledBox = styled(Box)`
  position: relative;
  flex-direction: row;
  text-align: center;
  justify-content: center;
`;

export const StyledTestBox = styled(Box)`
  text-align: center;
  align-items: center;
`;

export const StyledImg = styled.img`
  position: absolute;
  right: 0;
  height: calc(100% + 25px);
  @media (max-width: ${ScreenSize.MediumSmall}px) {
    display: none;
  }
`;

export const StyledButtonWithSemicircle = styled(ButtonWithSemicircle)`
  @media (max-width: ${ScreenSize.Medium}px) {
    max-width: 100%;
  }
`;

export const StyledText1Container = styled(Text1)`
  line-height: 1;
`;

export const StyledText1 = styled(Text1)`
  line-height: 1;
  @media (max-width: ${ScreenSize.Medium}px) {
    max-width: 100%;
  }
  @media (max-width: ${ScreenSize.XSmall}px) {
    margin-top: 30px;
  }
`;

export const StyledSubtitle3 = styled(Subtitle3)`
  @media (max-width: ${ScreenSize.XSmall}px) {
    margin-bottom: 30px;
  }
`;

export const StyledBoxContainer = styled(Box)`
  @media (max-width: ${ScreenSize.MediumSmall}px) {
    padding: 30px 20px;
  }
`;
