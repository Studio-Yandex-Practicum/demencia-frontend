import styled from "styled-components";
import { Section, Box, Text1, Button } from "../../../../../ui/controls";
import { ScreenSize } from "../../../../../ui/types";

export const StyledBoxArrowRight = styled(Box)`
  @media (max-width: ${ScreenSize.MediumSmall}px) {
    order: 2;
    margin-left: 0;
  }
`;

export const StyledBoxArrowLeft = styled(Box)`
  @media (max-width: ${ScreenSize.MediumSmall}px) {
    order: 1;
    margin-right: 0;
  }
`;

export const StyledSection = styled(Section)`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 90px auto 50px;
  width: 100%;
  @media (max-width: ${ScreenSize.MediumSmall}px) {
    flex-wrap: wrap;
    justify-content: space-evenly;
    margin: 50px auto 30px;
  }
`;

export const StyledBox = styled(Box)`
  width: 50%;
  @media (max-width: ${ScreenSize.MediumSmall}px) {
    width: 90%;
    margin-bottom: 30px;
  }
`;

export const StyledButton = styled(Button)`
  width: 100%;
`;

export const ErrorText = styled(Text1)`
  text-align: center;
  color: red;
  margin: 20px auto;
  font-size: 30px;
  @media (max-width: ${ScreenSize.Small}px) {
    font-size: 20px;
  }
`;
