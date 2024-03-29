import styled from "styled-components";
import { Section, Box, TwoColumnGrid } from "../../../ui/controls";
import { ScreenSize } from "../../../ui/types";
import { Subtitle1, Subtitle3, Text1, Button } from "../../../ui/controls";

export const StyledInfoSection = styled(Section)`
  .info__about {
    align-items: flex-end;
    padding: 85px 40px;
  }

  .about__tip {
    align-items: flex-start;
    padding: 85px 40px;
  }

  .about__title {
    display: -webkit-box;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
  }

  .tip__box {
    left: -65px;
    max-width: 100%;
    min-height: 170px;
    padding-right: 170px;
    z-index: 5;
  }

  .tip__i-pic {
    width: 25px;
    position: absolute;
    top: calc(50% - 45px);
    left: 85%;
  }

  .tip__pink-semicircle-pic {
    height: 240px;
    position: absolute;
    top: calc(50% - 120px);
    left: 80%;
  }

  .info__more-button-box {
    align-items: flex-start;
    padding: 0 40px;
  }

  .more-button-box__column {
    max-width: 520px;
    align-items: flex-start;
  }

  .info__more-button {
    width: 190px;
  }

  .about__column {
    max-width: 100%;
  }

  .info__help-grid {
    grid-template-areas:
      "info__help info__grandparents"
      "info__help info__test-button";
  }

  .info__puzzle-image {
    width: 80px;
    position: absolute;
    top: -100%;
    left: 10%;
  }

  .info__help {
    grid-area: info__help;
    align-items: flex-end;
    padding: 230px 40px 120px 40px;
  }

  .help__column {
    max-width: 235px;
  }

  .help__title {
    text-align: right;
    display: -webkit-box;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
  }

  .help__subtitle {
    text-align: right;
    display: -webkit-box;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
  }

  .help__puzzle-image {
    width: 520px;
    position: absolute;
    top: 10%;
  }

  .info__grandparents {
    grid-area: info__grandparents;
    padding: 0;
  }

  .grandparents__image {
    width: 600px;
    position: absolute;
    top: -20px;
    left: -20px;
  }

  .info__test-button {
    grid-area: info__test-button;
    padding-top: 390px;
  }

  .info__test-button-column {
    max-width: 516px;
    flex-direction: row;
    justify-content: space-between;
  }

  .test-button__side-semicircle {
    width: 60px;
    position: absolute;
    top: -32px;
    left: 270px;
  }

  .button-not-with-semicircle {
    max-width: 350px;
    margin-right: 15px;
    opacity: 1;
    transition: all 1s ease;
  }

  @media (max-width: ${ScreenSize.Large}px) {
    .tip__i-pic {
      left: 75%;
    }

    .tip__pink-semicircle-pic {
      left: 70%;
    }

    .info__test-button-column {
      max-width: 600px;
    }
  }

  @media (max-width: ${ScreenSize.Medium}px) {
    .info__about {
      grid-area: info__about;
      align-items: center;
      padding-top: 32px;
      padding-bottom: 40px;
      padding-left: 8px;
      padding-right: 8px;
    }

    .about__column {
      align-items: center;
      max-width: 100%;
    }

    .about__tip {
      grid-area: about__tip;
      align-items: center;
      padding: 40px 20px;
    }

    .tip__i-pic {
      left: 85%;
    }

    .tip__pink-semicircle-pic {
      left: 82%;
    }

    .info__more-button-box {
      grid-area: info__more-button-box;
      align-items: center;
      padding: 40px;
    }

    .more-button-box__column {
      max-width: 100%;
      align-items: center;
    }

    .info__puzzle {
      grid-area: info__puzzle;
    }

    .info__puzzle-image {
      top: -35px;
      left: 10%;
    }

    .info__about-grid {
      grid-template-areas:
        "info__about"
        "about__tip"
        "info__puzzle"
        "info__more-button-box";
    }

    .tip__box {
      left: 0;
      padding-right: 140px;
    }

    .info__help-grid {
      padding-bottom: 40px;
      grid-template-areas:
        "info__grandparents"
        "info__help"
        "info__test-button";
    }

    .grandparents__image {
      width: 100%;
      position: static;
    }

    .info__help {
      grid-area: info__help;
      align-items: center;
      padding: 20px;
    }

    .help__column {
      max-width: 100%;
      align-items: center;
    }

    .help__title {
      text-align: center;
    }

    .help__subtitle {
      text-align: center;
    }

    .help__puzzle-image {
      display: none;
    }

    .info__test-button {
      grid-area: info__test-button;
      padding-top: 20px;
    }

    .info__test-button-column {
      max-width: 100%;
      height: 130px;
      flex-direction: column;
      align-items: center;
    }

    .button-not-with-semicircle {
      margin-right: 0px;
    }
  }

  @media (max-width: ${ScreenSize.Small}px) {
    margin-top: 200px;

    .tip__i-pic {
      left: 79%;
    }

    .tip__pink-semicircle-pic {
      left: 75%;
    }
  }

  @media (max-width: ${ScreenSize.XSmall}px) {
    margin-top: 290px;

    .tip__i-pic {
      top: 40px;
      width: 15px;
    }

    .tip__pink-semicircle-pic {
      top: -50px;
      left: 78%;
      width: 58px;
    }

    .tip__box {
      padding-right: 85px;
    }

    .info__more-button {
      margin-top: 20px;
    }

    .info__test-button {
      grid-area: info__test-button;
      transform: scale(0.7);
    }
  }
`;

export const RelativeBox = styled(Box)<{
  alignItems?: string;
  animateLeft?: boolean;
}>`
  box-sizing: border-box;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: top;
  align-items: ${({ alignItems }) => alignItems};
  transition: all 1s ease;
  ${({ animate, animateLeft }) =>
    animate
      ? `opacity: 0; transform: translateX(${
          animateLeft ? "-200px" : "200px"
        });`
      : ""}
`;

export const TwoColumnGridInfo = styled(TwoColumnGrid)`
  grid-row-gap: 0;
`;

export const FlexColumn = styled.div<{
  maxWidth?: string;
  alignItems?: string;
}>`
  max-width: ${({ maxWidth }) => maxWidth};
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: ${({ alignItems }) => alignItems};
`;

export const StyledImg = styled.img<{
  animate?: boolean;
}>`
  object-fit: contain;
  object-position: center;
  transition: all 1s ease;
  ${({ animate }) =>
    animate ? "opacity: 0; transform: translateX(200px);" : ""}
`;

export const InfoSubtitle1 = styled(Subtitle1)`
  transition: all 1s ease;
  ${({ animate }) =>
    animate ? "opacity: 0; transform: translateX(-200px);" : ""}
`;

export const InfoSubtitle3 = styled(Subtitle3)`
  transition: all 1s ease;
  ${({ animate }) =>
    animate ? "opacity: 0; transform: translateX(-200px);" : ""}
`;

export const InfoText1 = styled(Text1)`
  transition: all 1s ease;
  ${({ animate }) =>
    animate ? "opacity: 0; transform: translateY(100px);" : ""}
`;

export const InfoButton = styled(Button)`
  transition: all 1s ease;
  ${({ animate }) =>
    animate ? "opacity: 0; transform: translateX(-100px);" : ""}
`;
