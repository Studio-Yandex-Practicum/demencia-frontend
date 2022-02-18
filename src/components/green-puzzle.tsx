import styled, { css } from "styled-components";
import greenPazzle from "../images/test_green_puzzle.svg";
import { ScreenSize } from "../ui/types";

const GreenPuzzle = styled.img.attrs((props) => ({
  src: props.src || greenPazzle,
  alt: props.alt || "",
}))<{ animated?: boolean }>`
  width: 80px;
  height: auto;
  position: absolute;
  z-index: 300;
  top: -120px;
  right: 70px;

  ${(props) => {
    if (props.animated === undefined || props.animated) {
      return css`
        @keyframes rotate {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
        animation: rotate 10s linear infinite;
      `;
    }
  }}

  @media screen and (max-width: 1600px) {
    width: 65px;
    right: 30px;
  }

  @media (max-width: ${ScreenSize.Medium}px) {
    width: 55px;
    right: -220px;
    top: -135px;
  }
  @media (max-width: ${ScreenSize.Small}px) {
    top: -96px;
    right: -226px;
    width: 55px;
  }
  @media (max-width: ${ScreenSize.XSmall}px) {
    width: 35px;
    top: -17px;
    right: -150px;
  }
  @media (max-width: ${ScreenSize.XXSmall}px) {
    width: 30px;
    right: -87px;
    top: -37px;
  }
`;

export default GreenPuzzle;
