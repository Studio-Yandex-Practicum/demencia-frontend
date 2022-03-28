import styled from "styled-components";
import { Section, Text1 } from "../../../../../ui/controls";
import { ScreenSize } from "../../../../../ui/types";
import { ArrowLeft, ArrowRight } from "../components/arrows";

export const StyledSection = styled(Section)`
  justify-content: center;
  margin: 90px 0 60px;
  @media (max-width: ${ScreenSize.MediumSmall}px) {
    flex-wrap: wrap;
    margin-bottom: 20px;
    justify-content: space-evenly;
  }
`;

export const StyledArrowLeft = styled(ArrowLeft)`
  @media (max-width: ${ScreenSize.MediumSmall}px) {
    order: 1;
    margin: 0;
  }
`;

export const StyledArrowRight = styled(ArrowRight)`
  @media (max-width: ${ScreenSize.MediumSmall}px) {
    order: 2;
    margin: 0;
  }
`;

export const StyledBoxInput = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-content: center;
  gap: 20px 26px;
  @media (max-width: ${ScreenSize.Medium}px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: ${ScreenSize.MediumSmall}px) {
    grid-template-columns: repeat(1, 1fr);
    margin-bottom: 50px;
    gap: 50px;
  }
`;

export const ErrorText = styled(Text1)`
  text-align: center;
  color: red;
  margin: 20px auto;
  font-size: 30px;
  @media (max-width: ${ScreenSize.MediumSmall}px) {
    font-size: 20px;
  }
`;