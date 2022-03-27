import styled from "styled-components";
import { Box, Text1 } from "../../../../../ui/controls";
import { ScreenSize } from "../../../../../ui/types";
import StyledInput from "../../../../../components/input-field";

export const StyledBoxInput = styled(Box)`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 90px auto 50px;
  width: 100%;
  @media (max-width: ${ScreenSize.MediumSmall}px) {
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;
    vertical-align: baseline;
    margin: 50px auto 30px;
  }
`;

export const StyleInput = styled(StyledInput)`
  width: 40%;
  margin-right: 10px;
  @media (max-width: ${ScreenSize.MediumSmall}px) {
    width: 100%;
    margin-right: 0;
    margin-bottom: 15px;
  }
`;

export const StyleBoxInputs = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`;

export const StyledBoxArrowRight = styled(Box)`
  margin-left: 10px;
  @media (max-width: ${ScreenSize.MediumSmall}px) {
    margin-top: 32px;
    order: 2;
    margin-left: 0;
  }
`;

export const StyledBoxArrowLeft = styled(Box)`
  margin-right: 10px;
  @media (max-width: ${ScreenSize.MediumSmall}px) {
    margin-top: 32px;
    order: 1;
    margin-right: 0;
  }
`;

export const StyledBoxSelect = styled(Box)`
  @media (max-width: ${ScreenSize.MediumSmall}px) {
    display: grid;
    grid-template-columns: 1fr auto;
  }
`;

export const StyleLabel = styled.label`
  width: 90%;
  margin: 0 0 0 10px;
  padding: 0;
  font-family: Roboto, sans-serif;
  font-size: 30px;
  font-weight: 700;
  color: #999;
  justify-content: center;
  align-self: center;
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
