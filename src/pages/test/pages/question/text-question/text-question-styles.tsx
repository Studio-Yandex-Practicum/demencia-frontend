import styled from "styled-components";
import { Box } from "../../../../../ui/controls";
import { ScreenSize } from "../../../../../ui/types";

export const StyledBoxArrowRight = styled(Box)`
  margin-left: 10px;
  @media (max-width: ${ScreenSize.MediumSmall}px) {
    order: 2;
    margin-left: 0;
  }
`;

export const StyledBoxArrowLeft = styled(Box)`
  margin-right: 10px;
  @media (max-width: ${ScreenSize.MediumSmall}px) {
    order: 1;
    margin-right: 0;
  }
`;

export const StyledBoxInput = styled(Box)`
  flex-direction: row;
  justify-content: space-around;
  margin: 90px auto 40px;
  width: 100%;
  @media (max-width: ${ScreenSize.MediumSmall}px) {
    flex-wrap: wrap;
    justify-content: space-evenly;
    margin: 50px auto 30px;
  }
`;

export const TextInputBox = styled(Box)`
  margin: auto 0;
  @media (max-width: ${ScreenSize.MediumSmall}px) {
    margin-bottom: 30px;
  }
`;
