import styled from "styled-components";
import { ScreenSize } from "../ui/types/";

const StyledInput = styled.input`
  width: 100%;
  height: 60px;
  padding: 10px 20px;
  border-radius: 30px;
  border: 1px solid #000000;
  box-sizing: border-box;
  background-color: #ffffff;
  font-size: 30px;
  &::placeholder {
    font-size: 30px;
  }
  &:focus {
    outline: none;
    border: 2px solid #000000;
  }
  @media (max-width: ${ScreenSize.Medium}px) {
    font-size: 20px;
    &::placeholder {
      font-size: 20px;
    }
  }
  @media (max-width: ${ScreenSize.Small}px) {
    &::placeholder {
      font-size: 18px;
    }
  }
  @media (max-width: ${ScreenSize.XSmall}px) {
    &::placeholder {
      font-size: 16px;
    }
  }
  @media (max-width: ${ScreenSize.XXSmall}px) {
    &::placeholder {
      font-size: 14px;
    }
  }
`;

export default StyledInput;
