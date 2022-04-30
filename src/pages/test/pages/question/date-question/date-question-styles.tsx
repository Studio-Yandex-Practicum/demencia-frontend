import styled from "styled-components";
import StyledInput from "../../../../../components/input-field";
import { Section, Box, Text1, Subtitle1 } from "../../../../../ui/controls";
import { ScreenSize } from "../../../../../ui/types";

export const StyleSelect = styled.select`
  width: 100%;
  text-transform: uppercase;
  background-color: transparent;
  height: 60px;
  padding: 10px 20px;
  border-radius: 30px;
  border: 1px solid #000000;
  font-size: 30px;
  appearance: none;
  outline-color: #000;
  @media (max-width: ${ScreenSize.MediumSmall}px) {
    font-size: 20px;
  }
`;

export const StyleInput = styled(StyledInput)`
  width: 40%;
  margin-right: 10px;
  -moz-appearance: textfield;
  ::-webkit-inner-spin-button,
  ::-webkit-outer-spin-button {
    -webkit-appearance: None;
  }
  @media (max-width: ${ScreenSize.MediumSmall}px) {
    width: 100%;
    margin-right: 0;
    margin-bottom: 15px;
  }
`;

export const StyleSubtitle1 = styled(Subtitle1)`
  @media (max-width: ${ScreenSize.Small}px) {
    margin: 0 auto;
    font-size: 60px;
  }
`;

export const StyleText1 = styled(Text1)`
  text-align: center;
  @media (max-width: ${ScreenSize.Small}px) {
    margin: 20px auto;
    font-size: 30px;
  }
`;

export const StyledSection = styled(Section)`
  justify-content: flex-start;
  flex-direction: row;
  @media (max-width: ${ScreenSize.Small}px) {
    flex-direction: column;
  }
`;

export const StyledBoxInput = styled(Box)`
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin: 90px auto 50px;
  width: 100%;
  @media (max-width: ${ScreenSize.MediumSmall}px) {
    flex-wrap: wrap;
    justify-content: space-evenly;
    margin: 50px auto 30px;
  }
`;

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

export const StyledBoxSelect = styled(Box)`
  @media (max-width: ${ScreenSize.MediumSmall}px) {
    flex-direction: column;
  }
`;

export const StyledBoxCurrentSelect = styled(Box)`
  position: relative;
  width: 100%;
  margin-right: 10px;
  margin-left: 10px;
  &:last-child {
    margin-right: 0;
  }
  @media (max-width: ${ScreenSize.MediumSmall}px) {
    margin-right: 0;
    margin-left: 0;
    margin-bottom: 15px;
    &:last-child {
      margin-bottom: 30px;
    }
  }
`;

export const StyledImg = styled.img`
  position: absolute;
  width: 12px;
  top: 50%;
  right: 1.5rem;
  transform: translateY(-50%);
  z-index: -1;
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
