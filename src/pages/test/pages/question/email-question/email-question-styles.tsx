import styled from "styled-components";
import { Box, Text1 } from "../../../../../ui/controls";
import { ScreenSize } from "../../../../../ui/types";

export const ErrorText = styled(Text1)`
  text-align: center;
  color: red;
  margin: 20px auto;
  font-size: 30px;
  @media (max-width: ${ScreenSize.Small}px) {
    font-size: 20px;
  }
`;

export const StyledBoxInput = styled(Box)`
  align-items: start;
  margin: 90px auto 50px;
  width: 100%;
  @media (max-width: ${ScreenSize.MediumSmall}px) {
    flex-wrap: wrap;
    justify-content: space-evenly;
    margin: 50px auto 30px;
  }
`;

export const Link = styled.a`
  text-decoration: underline;
`;

export const StyledBoxArrowRight = styled(Box)`
  @media (max-width: ${ScreenSize.MediumSmall}px) {
    order: 2;
    margin-left: 0;
  }
`;

export const StyledBoxArrowLeft = styled(Box)`
  @media (max-width: ${ScreenSize.MediumSmall}px) {
    order: 1;
  }
`;

export const EmailInputBox = styled(Box)`
  margin-top: 0.5em;
`;

export const EmailCheckboxBox = styled(Box)`
  align-items: baseline;
  @media (max-width: ${ScreenSize.MediumSmall}px) {
    margin-bottom: 32px;
  }
`;
