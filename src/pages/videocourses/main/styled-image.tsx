import styled from "styled-components";
import { ScreenSize } from "../../../ui/types";

const StyledImage = styled.img<{
  puzzleType: string;
  animate?: boolean;
}>`
  z-index: 1;
  position: absolute;
  object-fit: contain;
  transition: all 2s ease;
  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  ${({ puzzleType, animate }) => {
    if (puzzleType.includes("video__half-green-puzzle")) {
      return `
        width: 118px;
        height: 100px;
        bottom: 200px;
        left: 30px;
        transform: scale(1, 1) rotate(180deg);

        ${animate ? "" : "bottom: 290px;"}

        @media (max-width: ${ScreenSize.Large}px) {
          & {
            display: none
          }
        }
        `;
    } else if (puzzleType.includes("video__bottom-purple-puzzle")) {
      return `
        width: 100px;
        height: 200px;
        bottom: 440px;
        right: 50px;
        opacity: .4;

        @media (max-width: ${ScreenSize.Large}px) {
          & {
            display: none
          }
        }
        `;
    } else if (puzzleType.includes("video__green-semicircle")) {
      return `
        width: 100px;
        height: 200px;
        top: 300px;
        left: 0;

        ${animate ? "" : "bottom: 250px;"}

        @media (max-width: ${ScreenSize.Large}px) {
          & {
            display: none
          }
        }
        `;
    } else if (puzzleType.includes("video__translucent-half-green-puzzle")) {
      return `
        width: 169px;
        height: 200px;
        bottom: 150px;
        right: -40px;
        transform: scale(-1, 1) rotate(90deg);
        opacity: .4;

        ${animate ? "" : "bottom: 250px;"}

        @media (max-width: ${ScreenSize.Large}px) {
          & {
            display: none
          }
        }
        `;
    } else {
      return ``;
    }
  }}
`;

export default StyledImage;
