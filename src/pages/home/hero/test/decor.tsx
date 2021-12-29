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
  z-index: 301;
  margin-left: 40px;
`;

export const GreenPuzzle = styled.div`
  width: 120px;
  height: 120px;
  background: url(${greenPazzle});
  background-repeat: no-repeat;
  background-size: contain;
  position: relative;
  left: 65%;
  bottom: 40%;
  z-index: 300;
  grid-area: 1/2/2/3;
  animation: ${pazzleRotation} 15s linear infinite normal;
  @media screen and (max-width: 1024px) {
    width: 100px;
    height: 100px;
    left: 55%;
  }
  @media screen and (max-width: 800px) {
    width: 80px;
    height: 80px;
  }
`;

export const BigCircle = styled.div`
  display: flex;
  width: 50%;
  height: auto;
  background: url(${bigCircle});
  background-repeat: no-repeat;
  background-size: contain;
  z-index: 299;
  animation: ${circleSwing} 8s infinite linear;
  grid-area: 2/1/4/3;
  margin: 0 auto;
`;

export const MediumCircle = styled.div`
  width: 35%;
  height: 400px;
  background: url(${mediumCircle});
  background-repeat: no-repeat;
  background-size: contain;
  z-index: 298;
  animation: ${circleSwingReversed} 8s infinite linear;
  grid-area: 2/2/3/3;
  position: relative;
  bottom: 10%;
  left: 40%;
`;

export const SmallCircle = styled.div`
  width: 150px;
  height: 150px;
  background: url(${smallCircle});
  background-repeat: no-repeat;
  background-size: contain;
  position: relative;
  left: 35%;
  z-index: 297;
  grid-area: 2/2/3/3;
`;
