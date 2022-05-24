import styled from "styled-components";
import { Box } from "../../../../../ui/controls";
import { ScreenSize } from "../../../../../ui/types";
import StyledInput from "../../../../../components/input-field";

export const StyledBoxInput = styled(Box)`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 90px auto 40px;
  width: 100%;
  @media (max-width: ${ScreenSize.MediumSmall}px) {
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;
    vertical-align: baseline;
    margin: 50px auto 20px;
  }
`;

export const StyleInput = styled(StyledInput)`
  width: 100%;
  margin-right: 10px;
  @media (max-width: ${ScreenSize.MediumSmall}px) {
    width: 80%;
    margin-right: 0;
    align-self: center;
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
    margin-top: 20px;
    order: 2;
    margin-left: 0;
  }
`;

export const StyledBoxArrowLeft = styled(Box)`
  margin-right: 10px;
  @media (max-width: ${ScreenSize.MediumSmall}px) {
    margin-top: 20px;
    order: 1;
    margin-right: 0;
  }
`;

export const StyledBoxSelect = styled(Box)`
  gap: 70px;
  @media (max-width: ${ScreenSize.MediumSmall}px) {
    gap: 0;
    width: 100%;
    flex-direction: column;
  }
`;

export const StyleLabel = styled.label`
  width: max-content;
  margin: 0 0 0 10px;
  padding: 0;
  font-family: Roboto, sans-serif;
  font-size: 30px;
  font-weight: 700;
  color: #999;
  justify-content: center;
  align-self: center;
  @media (max-width: ${ScreenSize.MediumSmall}px) {
    width: max-content;
  }
`;

export const InputBox = styled.div`
  display: flex;
  @media (max-width: ${ScreenSize.MediumSmall}px) {
    width: 100%;
    margin: 0 auto 20px;
  }
`;
