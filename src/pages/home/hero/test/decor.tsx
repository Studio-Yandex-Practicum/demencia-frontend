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
  width: 140px;
  height: 140px;
  background: url(${pazzles});
  background-repeat: no-repeat;
  background-size: contain;
  z-index: 301;
  margin-top: 200px;
  @media screen and (max-width: 1200px) {
    width: 90px;
    height: 90px;
    margin-top: 80px;
  }
`;

export const GreenPuzzle = styled.div`
  width: 90px;
  height: 90px;
  background: url(${greenPazzle});
  background-repeat: no-repeat;
  background-size: contain;
  position: absolute;
  right: 0;
  z-index: 300;
  transform: translateY(-95px);
  @media screen and (max-width: 1200px) {
    width: 60px;
    height: 60px;
  }
`;

export const BigCircle = styled.div`
  display: flex;
  width: 500px;
  height: 500px;
  background: url(${bigCircle});
  background-repeat: no-repeat;
  background-size: contain;
  z-index: 299;
  position: absolute;
  top: 30vh;
  left: 10vw;
  @media screen and (max-width: 1200px) {
    width: 300px;
    height: 300px;
    top: 51vh;
    left: 10vw;
  }
`;

export const MediumCircle = styled.div`
  width: 35%;
  height: 400px;
  background: url(${mediumCircle});
  background-repeat: no-repeat;
  background-size: contain;
  z-index: 298;
  position: relative;
  bottom: 10%;
  left: 40%;
`;

export const SmallCircle = styled.div`
  width: 80px;
  height: 80px;
  background: url(${smallCircle});
  background-repeat: no-repeat;
  background-size: contain;
  position: relative;
  left: 50%;
  top: 50%;
  z-index: 297;
  transform: translate(-140%, -270%);
  @media screen and (max-width: 1200px) {
    width: 50px;
    height: 50px;
    transform: translate(-135%, -256%);
  }
`;
