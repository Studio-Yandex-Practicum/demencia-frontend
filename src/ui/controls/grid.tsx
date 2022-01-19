import styled from "styled-components";
import { ScreenSize } from "../types";
import { getBoxStyles } from "./box";

const Grid = styled.div`
  ${getBoxStyles};
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, 456px);
  justify-content: center;
  grid-gap: 40px;

  @media screen and (max-width: ${ScreenSize.Large}px) {
    grid-template-columns: repeat(auto-fit, 420px);
    gap: 40px 20px;
  }

  @media screen and (max-width: ${ScreenSize.Medium}px) {
    grid-template-columns: repeat(auto-fit, minmax(380px, 400px));
    gap: 40px;
  }

  @media screen and (max-width: ${ScreenSize.Small}px) {
    gap: 20px;
  }

  @media screen and (max-width: ${ScreenSize.XSmall}px) {
    grid-template-columns: repeat(auto-fit, minmax(300px, 380px));
    gap: 20px;
  }
`;

export default Grid;
