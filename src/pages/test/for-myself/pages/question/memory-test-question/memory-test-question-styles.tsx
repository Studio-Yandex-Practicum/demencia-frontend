import styled from "styled-components";
import { Section, Box, Button } from "../../../../../../ui/controls";
import { ScreenSize } from "../../../../../../ui/types";

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
  margin: 90px auto 40px;
  width: 100%;
  @media (max-width: ${ScreenSize.MediumSmall}px) {
    flex-wrap: wrap;
    justify-content: space-evenly;
    margin: 50px auto 20px;
  }
`;

export const StyledBox = styled(Box)`
  width: 50%;
  @media (max-width: ${ScreenSize.MediumSmall}px) {
    width: 90%;
    margin-bottom: 40px;
  }
`;

export const StyledButton = styled(Button)`
  width: 100%;
`;
