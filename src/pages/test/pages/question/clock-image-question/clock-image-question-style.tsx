import styled from "styled-components";
import { Box, Text1 } from "../../../../../ui/controls";
import { ScreenSize } from "../../../../../ui/types";
import { ArrowLeft, ArrowRight } from "../components/arrows";
import { cursorMixin } from "../../../../../ui/controls";

export const StyledBox = styled(Box)`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 90px auto;
  width: 100%;
  @media (max-width: 790px) {
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;
    vertical-align: baseline;
    margin: 50px auto 30px;
  }
`;

export const StyleBoxInputs = styled(Box)`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
  @media (max-width: 790px) {
    flex-direction: column;
  }
`;

export const StyledBoxArrowRight = styled(Box)`
  margin-left: 10px;
  @media (max-width: 790px) {
    margin-top: 32px;
    order: 2;
    margin-left: 0;
  }
`;

export const StyledBoxArrowLeft = styled(Box)`
  margin-right: 10px;
  @media (max-width: 790px) {
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

export const ErrorText = styled(Text1)`
  text-align: center;
  color: red;
  margin: 20px auto;
  font-size: 30px;
  @media (max-width: ${ScreenSize.Small}px) {
    font-size: 20px;
  }
`;

export const StyledText1 = styled(Text1)`
  text-align: center;
  line-height: 1;
  margin: 0 auto;
  @media (max-width: ${ScreenSize.MediumSmall}px) {
    font-size: 18px;
    line-height: 20px;
  }
`;

export const StyledBoxInput = styled(Box)`
  margin: 0;
  width: 100%;
  align-items: center;

  @media (max-width: 790px) {
    flex-direction: row;
  }
`;

export const StyledInput = styled.input`
  display: none;
`;

export const StyledLabel = styled.label`
  font-family: "Roboto", sans-serif;
  font-weight: 900;
  text-transform: uppercase;
  border-radius: 60px;
  background-color: #5e0b77;
  color: #fff;
  padding: 30px 60px;
  text-align: center;
  font-size: 20px;
  border: 0;
  margin: 0 10px;
  width: 400px;
  transition: all 0.5s ease;
  transform: scale(0.95);
  ${cursorMixin}

  &:hover {
    transform: scale(1);
  }

  @media (max-width: ${ScreenSize.Large}px) {
    width: 250px;
  }

  @media (max-width: ${ScreenSize.Medium}px) {
    width: 150px;
  }

  @media (max-width: 790px) {
    width: 100%;
    margin: 30px 10px;
  }
`;
