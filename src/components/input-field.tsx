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
    font-size: 25px;
  }
  &:focus {
    outline: none;
    border: 2px solid #000000;
  }
  @media (max-width: ${ScreenSize.MediumSmall}px) {
    font-size: 20px;
  }
`;

export default StyledInput;
