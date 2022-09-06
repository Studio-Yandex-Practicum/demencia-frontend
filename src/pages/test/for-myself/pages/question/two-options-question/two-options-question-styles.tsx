import styled from "styled-components";
import { Box } from "../../../../../../ui/controls";
import { ScreenSize } from "../../../../../../ui/types";
import StyledInput from "../../../../../../components/input-field";

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

export const InputBox = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  border-radius: 60px;
  border: 1px solid #000;
  padding: 10px 0 10px 15px;
  margin: 0 35px;
  @media (max-width: ${ScreenSize.MediumSmall}px) {
    margin: 0 auto 20px;
    width: 95%;
  }
`;

export const InputOne = styled(StyledInput)`
  margin: 0 35px;
  max-width: 850px;
  width: 100%;
  padding: 10px 15px;
  border: 1px solid #999;
  display: inline-block;
  text-align: start;
  @media (max-width: ${ScreenSize.MediumSmall}px) {
    margin: 0 auto 15px;
    width: 98%;
  }
  @media (max-width: 560px) {
    width: 98.2%;
  }
  @media (max-width: 510px) {
    width: 98.5%;
  }
  @media (max-width: ${ScreenSize.XSmall}px) {
    width: 99%;
  }
  @media (max-width: 410px) {
    width: 99.5%;
  }
  @media (max-width: ${ScreenSize.XXSmall}px) {
    width: 100%;
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

export const BoxInputOne = styled(Box)`
  justify-content: center;
  margin-bottom: 1rem;
  width: 100%;
  padding: 0;
  @media (max-width: ${ScreenSize.MediumSmall}px) {
    flex-direction: column;
  }
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
