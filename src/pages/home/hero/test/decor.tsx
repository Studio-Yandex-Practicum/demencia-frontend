import React from "react";
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

const Pazzles = styled.div`
  width: 76px;
  height: 61px;
  background: url(${pazzles});
  background-repeat: no-repeat;
  background-size: contain;
  position: absolute;
  bottom: 120px;
  left: 62px;

  @media screen and (max-width: 767px) {
    width: 54px;
    height: 40px;
    bottom: 95px;
    left: 36px;
  }

  @media screen and (max-width: 660px) {
    bottom: 105px;
    left: 38px;
  }
`;

const GreenPuzzle = styled.div`
  width: 48px;
  height: 56px;
  background: url(${greenPazzle});
  background-repeat: no-repeat;
  background-size: contain;
  position: absolute;
  top: 58px;
  right: 35px;
  animation: ${pazzleRotation} 15s linear infinite normal;
  @media screen and (max-width: 767px) {
    width: 40px;
    height: 41px;
  }
  @media screen and (max-width: 660px) {
    width: 44px;
    height: 40px;
    top: 50px;
    right: 40px;
  }
  @media screen and (max-width: 639px) {
    width: 25px;
    height: 25px;
    top: 40px;
    right: 90px;
  }
`;

const BigCircle = styled.div`
  width: 290px;
  height: 290px;
  background: url(${bigCircle});
  background-repeat: no-repeat;
  background-size: contain;
  position: absolute;
  right: 29px;
  bottom: 8px;
  z-index: 299;
  animation: ${circleSwing} 8s infinite linear;
  @media screen and (max-width: 930px) {
    width: 220px;
    height: 220px;
    bottom: 20px;
    right: 14px;
  }
  @media screen and (max-width: 660px) {
    bottom: 35px;
    right: 16px;
  }

  @media screen and (max-width: 639px) {
    bottom: 55px;
  }
`;

const MediumCircle = styled.div`
width: 180px;
height: 180px;
background: url(${mediumCircle});
background-repeat: no-repeat;
background-size: contain;
position: absolute;
right: 42px;
bottom: 155px;
z-index: 298;
animation: ${circleSwingReversed} 8s infinite linear;
}

@media screen and (max-width:930px) {
  width: 135px;
  height: 135px;
  bottom: 130px;
  right: 25px;
}

@media screen and (max-width:660px) {
  bottom: 140px;
  right: 23px;
}

@media screen and (max-width:639px) {
  bottom: 160px;
  }
`;

const SmallCircle = styled.div`
width: 64px;
height: 64px;
background: url(${smallCircle});
background-repeat: no-repeat;
background-size: contain;
position: absolute;
right: 178px;
bottom: 227px;
z-index: 297;

@media screen and (max-width:930px) {
    width: 48px;
    height: 48px;
    right: 125px;
    bottom: 185px;
}

@media screen and (max-width:660px) {
    right: 129px;
    bottom: 197px;
}

@media screen and (max-width:639px) {
  bottom: 217px;
  }
}
`;

const Decor: React.FC = () => {
  return (
    <>
      <Pazzles />
      <GreenPuzzle />
      <BigCircle />
      <MediumCircle />
      <SmallCircle />
    </>
  );
};

export default Decor;
