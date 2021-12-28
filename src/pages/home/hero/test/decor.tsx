import styled, { keyframes } from "styled-components";
import pazzles from "../../../../images/test_puzzlesdecor.svg";
import greenPazzle from "../../../../images/test_green_puzzle.svg";
import bigCircle from "../../../../images/circlebg.png";
import mediumCircle from "../../../../images/circlesm.png";
import smallCircle from "../../../../images/smallcircle.png";

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

export const Pazzles = styled.div`
  width: 150px;
  height: 150px;
  background: url(${pazzles});
  background-repeat: no-repeat;
  background-size: contain;
  grid-area: 2/1/3/2;

  @media screen and (max-width: 940px) {
    width: 85px;
    height: 140px;
  }
  @media screen and (max-width: 640px) {
    width: 150px;
    height: 150px;
  }
  @media screen and (max-width: 450px) {
    width: 100px;
  }
`;

export const GreenPuzzle = styled.div`
  width: 100px;
  height: 100px;
  background: url(${greenPazzle});
  background-repeat: no-repeat;
  background-size: contain;
  position: relative;
  left: 50%;
  z-index: 300;
  grid-area: 1/2/2/3;
  animation: ${pazzleRotation} 15s linear infinite normal;
  @media screen and (max-width: 1440px) {
    width: 70px;
    height: 70px;
  }
  @media screen and (max-width: 1200px) {
    width: 50px;
    height: 50px;
    left: 43%;
  }
  @media screen and (max-width: 640px) {
    left: 86%;
  }
`;

export const BigCircle = styled.div`
  width: 500px;
  height: 500px;
  background: url(${bigCircle});
  background-repeat: no-repeat;
  background-size: contain;
  position: relative;
  z-index: 299;
  animation: ${circleSwing} 8s infinite linear;
  grid-area: 2/2/4/3;
`;

export const MediumCircle = styled.div`
  width: 300px;
  height: 300px;
  background: url(${mediumCircle});
  background-repeat: no-repeat;
  background-size: contain;
  z-index: 298;
  animation: ${circleSwingReversed} 8s infinite linear;
  grid-area: 2/2/4/3;
  position: relative;
  bottom: 65px;
  left: 200px;
`;

export const SmallCircle = styled.div`
  width: 100px;
  height: 100px;
  background: url(${smallCircle});
  background-repeat: no-repeat;
  background-size: contain;
  position: relative;
  left: 25%;
  z-index: 297;
  grid-area: 2/2/4/3;
`;
