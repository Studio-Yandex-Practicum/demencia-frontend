import styled from "styled-components";
import bigCircle from "../../../../images/circlebg.png";
import mediumCircle from "../../../../images/circlesm.png";
import smallCircle from "../../../../images/smallcircle.png";
import halfCircle from "../../../../images/halfcirclegreen.png";
import { ScreenSize } from "../../../../ui/types";

export const SmallCircle = styled.img.attrs((props) => ({
  src: props.src || smallCircle,
  alt: props.alt || "",
}))`
  width: 130px;
  height: auto;
  position: absolute;
  right: 405px;
  top: 20px;
  z-index: 297;

  @media screen and (max-width: 1800px) {
    width: 90px;
    right: 375px;
  }
  @media screen and (max-width: 1600px) {
    width: 90px;
    right: 255px;
    top: 85px;
  }
  @media screen and (max-width: 1100px) {
    right: 135px;
    top: 70px;
  }
  @media (max-width: ${ScreenSize.Medium}px) {
    width: 80px;
    top: 13px;
    right: -60px;
  }
  @media (max-width: ${ScreenSize.Small}px) {
    width: 70px;
    top: 26px;
    right: -75px;
  }
  @media (max-width: ${ScreenSize.XSmall}px) {
    width: 51px;
    top: 61px;
    right: -50px;
  }
`;

export const MediumCircle = styled.img.attrs((props) => ({
  src: props.src || mediumCircle,
  alt: props.alt || "",
}))`
  width: 300px;
  height: auto;
  z-index: 298;
  position: absolute;
  top: -51px;
  right: 180px;

  // @keyframes rotateMediumCircle {
  //   0% {
  //     transform: rotate(0deg);
  //   }

  //   25% {
  //     transform: rotate(-10deg);
  //   }

  //   50% {
  //     transform: rotate(0deg);
  //   }

  //   75% {
  //     transform: rotate(10deg);
  //   }

  //   100% {
  //     transform: rotate(0deg);
  //   }
  // }
  // animation: rotateMediumCircle 10s linear infinite;

  @media screen and (max-width: 1800px) {
    right: 140px;
  }
  @media screen and (max-width: 1600px) {
    width: 200px;
    top: 35px;
    right: 110px;
  }
  @media screen and (max-width: 1100px) {
    right: 0;
  }
  @media (max-width: ${ScreenSize.Medium}px) {
    width: 220px;
    top: -34px;
    right: -220px;
  }
  @media (max-width: ${ScreenSize.Small}px) {
    width: 185px;
    top: -21px;
  }
  @media (max-width: ${ScreenSize.XSmall}px) {
    width: 133px;
    top: 36px;
    right: -140px;
  }
`;

export const BigCircle = styled.img.attrs((props) => ({
  src: props.src || bigCircle,
  alt: props.alt || "",
}))`
  width: 550px;
  height: auto;
  z-index: 299;
  position: absolute;
  top: 0;
  right: 15%;

  // @keyframes rotateBigCircle {
  //   0% {
  //     transform: rotate(0deg);
  //   }

  //   25% {
  //     transform: rotate(10deg);
  //   }

  //   50% {
  //     transform: rotate(0deg);
  //   }

  //   75% {
  //     transform: rotate(-10deg);
  //   }

  //   100% {
  //     transform: rotate(0deg);
  //   }
  // }
  // animation: rotateBigCircle 10s linear infinite;

  @media screen and (max-width: 1800px) {
    width: 450px;
  }
  @media screen and (max-width: 1600px) {
    width: 350px;
    top: 70px;
    right: 85px;
  }
  @media screen and (max-width: 1100px) {
    right: -15px;
  }
  @media (max-width: ${ScreenSize.Medium}px) {
    width: 365px;
    top: 0;
    right: -244px;
  }
  @media (max-width: ${ScreenSize.Small}px) {
    width: 330px;
    top: 10px;
  }
  @media (max-width: ${ScreenSize.XSmall}px) {
    width: 218px;
    top: 59px;
    left: calc(100% - 145px / 2);
  }
`;

export const HalfCircle = styled.img.attrs((props) => ({
  src: props.src || halfCircle,
  alt: props.alt || "",
}))<{ animate?: boolean }>`
  transition: all 1s ease;
  ${({ animate }) =>
    animate ? "opacity: 0; transform: translateX(100px);" : ""}
  z-index: 311;
  width: 70px;
  position: relative;
  right: 15px;

  @media (max-width: ${ScreenSize.XSmall}px) {
    width: 50px;
  }
`;
