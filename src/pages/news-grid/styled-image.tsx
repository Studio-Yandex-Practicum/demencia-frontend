import styled from "styled-components";
import { ScreenSize } from "../../ui/types";

const StyledImage = styled.img<{
  puzzleType: string;
  animate?: boolean;
}>`
  z-index: 1;
  position: absolute;
  object-fit: contain;
  transition: all 1s ease;

  ${({ puzzleType, animate }) => {
    if (puzzleType.includes("news-grid__green-puzzle")) {
      return `
        width: 90px;
        height: 90px;
        right: 180px;
        top: 0;
   
        @media (max-width: ${ScreenSize.Large}px) {
          & {
            right: 250px;
            top: 100px;
          }
        }

        @media (max-width: ${ScreenSize.Medium}px) {
          & {
            right: 200px;
            top: 110px;
          }
        }

        @media (max-width: ${ScreenSize.Small}px) {
          & {
            width: 70px;
            height: 70px;
            right: 100px;
            top: 70px;
          }
        }
        
        @media (max-width: ${ScreenSize.XSmall}px) {
          & {
            top: 60px;
            right: 100px;
          }
        }
      `;
    } else if (puzzleType.includes("news-grid__semicircle")) {
      return `
        top: 20px;
        right: 0;
        width: 140px;
        height: 280px;

        ${animate ? "opacity: 0; right: 50px;" : ""}

        @media (max-width: ${ScreenSize.Medium}px) {
          & {
            top: 60px;
            width: 100px;
            height: 200px;
          }
        }

        @media (max-width: ${ScreenSize.XSmall}px) {
          & {
            top: 100px;
            width: 60px;
            height: 120px;
          }
        }
        `;
    } else if (puzzleType.includes("news-grid__purple-puzzle")) {
      return `
        width: 100px;
        height: 100px;
        left: 130px;
        top: 115px;

        ${animate ? "transform: rotate(360deg); left: -50px; top: 250px;" : ""}

        @media (max-width: ${ScreenSize.Small}px) {
          & {
            width: 80px;
            height: 80px;
            left: 100px;
          }
        }
        @media (max-width: ${ScreenSize.XSmall}px) {
          & {
            width: 60px;
            height: 60px;
            left: 25px;
            top: 90px;
          }
        }
        `;
    } else if (puzzleType.includes("news-grid__half-green-puzzle")) {
      return `
        width: 150px;
        height: 300px;
        bottom: 200px;
        left: 0;

        ${animate ? "" : "bottom: 300px;"}

        @media (max-width: ${ScreenSize.XSmall}px) {
          & {
            width: 100px;
            height: 200px;
          }
        }
        `;
    } else if (puzzleType.includes("news-grid__bottom-purple-puzzle")) {
      return `
        width: 100px;
        height: 200px;
        bottom: 440px;
        right: 50px;
        `;
    } else if (
      puzzleType.includes("news-grid__translucent-half-green-puzzle")
    ) {
      return `
        width: 150px;
        height: 300px;
        bottom: 150px;
        right: 0;

        ${animate ? "" : "bottom: 50px;"}

        @media (max-width: ${ScreenSize.XSmall}px) {
          & {
            width: 100px;
            height: 200px;
          }
        }
        `;
    } else {
      return ``;
    }
  }}
`;

export default StyledImage;
