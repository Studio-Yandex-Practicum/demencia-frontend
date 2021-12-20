import React from "react";
import styled, { keyframes } from "styled-components";
import pazzles from "../../../../images/test_puzzlesdecor.svg";
import greenPazzle from "../../../../images/test_green_puzzle.svg";
import bigCircle from "../../../../images/circlebg.png";

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

const Decor: React.FC = () => {
  return (
    <>
      <Pazzles />
      <GreenPuzzle />
      <BigCircle />
      <div role="img" />
      <div role="img" />
    </>
  );
};

export default Decor;
