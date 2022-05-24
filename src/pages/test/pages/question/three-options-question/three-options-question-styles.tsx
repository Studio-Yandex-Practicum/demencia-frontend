import styled from "styled-components";
import { Box } from "../../../../../ui/controls";
import { ScreenSize } from "../../../../../ui/types";
import StyledInput from "../../../../../components/input-field";
import { ArrowLeft, ArrowRight } from "../components/arrows";

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
    margin: 50px auto 30px;
  }
`;

export const InputBox = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  border-radius: 60px;
  border: 1px solid #000;
  padding: 10px 0 10px 15px;
  margin: 0 35px;
  @media (max-width: 890px) {
    margin: 0 10px;
  }
  @media (max-width: ${ScreenSize.MediumSmall}px) {
    margin: 0 auto 15px;
    width: 95%;
  }
`;

export const StyleBoxInputs = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`;

export const StyleQuestionInputs = styled(Box)`
  display: flex;
  align-items: center;
  margin: auto 0;
  @media (max-width: ${ScreenSize.MediumSmall}px) {
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;
    vertical-align: baseline;
    margin-bottom: 0;
  }
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

export const StyledArrowLeft = styled(ArrowLeft)`
  @media (max-width: 890px) {
    width: 45px;
  }
`;

export const StyledArrowRight = styled(ArrowRight)`
  @media (max-width: 890px) {
    width: 45px;
  }
`;

export const StyledInputList = styled(StyledInput)`
  margin: 0;
  padding: 0;
  width: 32px;
  height: 32px;
  flex-shrink: 0;
  background-color: transparent;
  background-clip: content-box;
  border: 1px solid #5e0b77;
  cursor: pointer;
  appearance: none;
  display: inline-block;
  &:checked {
    background-color: #5e0b77;
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
`;
