import styled from "styled-components";
import { ScreenSize } from "../types";

const Grid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, 360px);
  justify-content: center;
  grid-gap: 40px;

  @media screen and (max-width: ${ScreenSize.Large}px) {
    grid-template-columns: repeat(auto-fit, 300px);
    gap: 40px 20px;
  }

  @media screen and (max-width: ${ScreenSize.Medium}px) {
    grid-template-columns: repeat(auto-fit, minmax(202px, 1fr));
    gap: 40px;
  }

  @media screen and (max-width: ${ScreenSize.Small}px) {
    gap: 20px;
  }
`;

export default Grid;
