import React from "react";
import styled, { keyframes } from "styled-components";
import { Box } from "../../../../ui/controls";
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
  width: 150px;
  height: 150px;
  background: url(${pazzles});
  background-repeat: no-repeat;
  background-size: contain;
  margin: 15% 0 0 40px;

  @media screen and (max-width: 940px) {
    width: 85px;
    height: 140px;
  }
`;

const GreenPuzzle = styled.div`
  width: 100px;
  height: 100px;
  background: url(${greenPazzle});
  background-repeat: no-repeat;
  background-size: contain;
  position: absolute;
  top: 0;
  left: 45%;
  z-index: 300;
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
`;

const BigCircle = styled.div`
  width: 500px;
  height: 500px;
  background: url(${bigCircle});
  background-repeat: no-repeat;
  background-size: contain;
  position: absolute;
  left: 15%;
  bottom: 35%;
  z-index: 299;
  animation: ${circleSwing} 8s infinite linear;
  @media screen and (max-width: 1440px) {
    width: 450px;
    height: 450px;
  }
  @media screen and (max-width: 1200px) {
    width: 300px;
    height: 300px;
    bottom: 46%;
    left: 17%;
  }

  @media screen and (max-width: 940px) {
    width: 250px;
    height: 250px;
    bottom: 40%;
    left: 20%;
  }
`;

const MediumCircle = styled.div`
width: 300px;
height: 300px;
background: url(${mediumCircle});
background-repeat: no-repeat;
background-size: contain;
position: absolute;
left: 27%;
bottom: 60%;
z-index: 298;
animation: ${circleSwingReversed} 8s infinite linear;
}

@media screen and (max-width:1440px) {
  width: 270px;
  height: 270px;
}

@media screen and (max-width:1200px) {
  width: 120px;
  height: 120px;
  left: 30%;
  bottom: 70%;
}

@media screen and (max-width:1150px) {
  bottom: 73%;
}

@media screen and (max-width:940px) {
  left: 32%;
  bottom: 65%;
  }
`;

const SmallCircle = styled.div`
width: 100px;
height: 100px;
background: url(${smallCircle});
background-repeat: no-repeat;
background-size: contain;
position: absolute;
left: 25%;
bottom: 73%;
z-index: 297;

@media screen and (max-width:1440px) {
  width: 90px;
  height: 90px;
  left: 26%;  
  bottom: 76%;
}

@media screen and (max-width:1200px) {
  width: 50px;
  height: 50px;
  left: 28%;  
  bottom: 79%;
}

@media screen and (max-width:940px) {
  width: 35px;
  height: 35px;
  left: 31%;
  bottom: 72%;
  }
}
`;

const Decor: React.FC = () => {
  return (
    <Box>
      <Pazzles />
      <GreenPuzzle />
      <BigCircle />
      <MediumCircle />
      <SmallCircle />
    </Box>
  );
};

export default Decor;
