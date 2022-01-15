import styled, { keyframes } from "styled-components";
import pazzles from "../../../../images/test_puzzlesdecor.svg";
import greenPazzle from "../../../../images/test_green_puzzle.svg";
import bigCircle from "../../../../images/circlebg.png";
import mediumCircle from "../../../../images/circlesm.png";
import smallCircle from "../../../../images/smallcircle.png";
import halfCircle from "../../../../images/halfcirclegreen.png";
import { ScreenSize } from "../../../../ui/types";

const pazzleRotation = keyframes`
0% {
  transform: rotate(0deg);
}
100% {
  transform: rotate(360deg);
}
`;

const circleSwing = keyframes`
0% {
  transform: rotate(0deg);
}
25% {
  transform: rotate(9deg);
}

50% {
transform: rotate(0deg);
}

75% {
transform: rotate(-9deg);
}

100% {
transform: rotate(0deg);
}
`;

const circleSwingReversed = keyframes`
0% {
  transform: rotate(0deg);
}
25% {
  transform: rotate(-9deg);
}

50% {
transform: rotate(0deg);
}

75% {
transform: rotate(9deg);
}

100% {
transform: rotate(0deg);
}
`;

export const Pazzles = styled.img.attrs((props) => ({
  src: props.src || pazzles,
  alt: props.alt || "",
}))`
  width: 140px;
  height: 140px;
  z-index: 301;
  position: relative;
  top: 100px;

  @media (max-width: ${ScreenSize.Large}px) {
    width: 100px;
    height: 100px;
  }
  @media (max-width: ${ScreenSize.Medium}px) {
    width: 100px;
    height: 100px;
    left: 180px;
    top: 35px;
  }
`;

export const GreenPuzzle = styled.img.attrs((props) => ({
  src: props.src || greenPazzle,
  alt: props.alt || "",
}))`
  width: 100px;
  height: 100px;
  position: relative;
  bottom: 300px;
  left: 160px;
  z-index: 300;
  @media (max-width: ${ScreenSize.Large}px) {
    width: 65px;
    height: 65px;
    bottom: 150px;
    left: 115px;
  }
  @media (max-width: ${ScreenSize.Medium}px) {
    width: 70px;
    height: 70px;
    left: 585px;
    top: -370px;
  }
`;

export const BigCircle = styled.img.attrs((props) => ({
  src: props.src || bigCircle,
  alt: props.alt || "",
}))`
  display: flex;
  width: 450px;
  height: 450px;
  z-index: 299;
  position: absolute;
  top: 265px;
  left: 175px;
  @media screen and (max-width: 1350px) {
    width: 300px;
    height: 300px;
  }
  @media screen and (max-width: 1100px) {
    width: 250px;
    height: 250px;
    top: 285px;
    left: 145px;
  }
`;

export const MediumCircle = styled.img.attrs((props) => ({
  src: props.src || mediumCircle,
  alt: props.alt || "",
}))`
  width: 300px;
  height: 300px;
  z-index: 298;
  position: absolute;
  top: 190px;
  left: 310px;
  @media screen and (max-width: 1350px) {
    width: 200px;
    height: 200px;
    top: 220px;
    left: 295px;
  }
  @media screen and (max-width: 1100px) {
    left: 210px;
    top: 250px;
  }
`;

export const SmallCircle = styled.img.attrs((props) => ({
  src: props.src || smallCircle,
  alt: props.alt || "",
}))`
  width: 90px;
  height: 90px;
  position: absolute;
  left: 285px;
  top: 270px;
  z-index: 297;
  @media screen and (max-width: 1350px) {
    width: 50px;
    height: 50px;
  }
  @media screen and (max-width: 1100px) {
    left: 205px;
    top: 300px;
  }
`;

export const HalfCircle = styled.img.attrs((props) => ({
  src: props.src || halfCircle,
  alt: props.alt || "",
}))`
  z-index: 300;
  width: 70px;
  transform: translate(-20px, 0);
`;
