import styled from "styled-components";
import { ScreenSize } from "../../../../ui/types";
import pazzles from "../../../../images/test_puzzlesdecor.svg";
import greenPazzle from "../../../../images/test_green_puzzle.svg";
import bigCircle from "../../../../images/circlebg.png";
import mediumCircle from "../../../../images/circlesm.png";
import smallCircle from "../../../../images/smallcircle.png";
import halfCircle from "../../../../images/halfcirclegreen.png";

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
  @media (max-width: ${ScreenSize.Small}px) {
    left: 75px;
    top: 65px;
  }
  @media (max-width: 550px) {
    left: 10px;
  }
  @media (max-width: ${ScreenSize.XSmall}px) {
    width: 60px;
    height: 60px;
    top: 75px;
    left: 80px;
  }
  @media (max-width: 400px) {
    width: 60px;
    height: 60px;
    top: 70px;
    left: 0;
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
    top: -365px;
    left: 590px;
  }
  @media (max-width: 700px) {
    left: 535px;
  }
  @media (max-width: ${ScreenSize.Small}px) {
    top: -300px;
    left: 435px;
    width: 60px;
    height: 60px;
  }
  @media (max-width: 550px) {
    left: 405px;
  }
  @media (max-width: ${ScreenSize.XSmall}px) {
    width: 40px;
    height: 40px;
    top: -180px;
    left: 67vw;
  }
  @media (max-width: 365px) {
    width: 40px;
    height: 40px;
    top: -175px;
    left: 240px;
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
  @media (max-width: ${ScreenSize.Medium}px) {
    width: 350px;
    height: 350px;
    top: 165px;
    left: 310px;
  }
  @media (max-width: 700px) {
    left: 270px;
  }
  @media (max-width: ${ScreenSize.Small}px) {
    left: 190px;
    top: 215px;
    width: 310px;
    height: 310px;
  }
  @media (max-width: 550px) {
    width: 300px;
    height: 300px;
    top: 250px;
    left: 115px;
  }
  @media (max-width: ${ScreenSize.XSmall}px) {
    width: 210px;
    height: 210px;
    top: 260px;
    left: 160px;
  }
  @media (max-width: 400px) {
    top: 265px;
    left: 70px;
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
    top: 250px;
    left: 210px;
  }
  @media (max-width: ${ScreenSize.Medium}px) {
    top: 120px;
    left: 440px;
  }
  @media (max-width: 700px) {
    left: 400px;
  }
  @media (max-width: ${ScreenSize.Small}px) {
    left: 280px;
    top: 170px;
  }
  @media (max-width: 550px) {
    width: 185px;
    height: 185px;
    top: 225px;
    left: 210px;
  }
  @media (max-width: ${ScreenSize.XSmall}px) {
    width: 130px;
    height: 130px;
    top: 230px;
    left: 225px;
  }
  @media (max-width: 400px) {
    width: 120px;
    height: 120px;
    top: 240px;
    left: 160px;
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
    top: 300px;
    left: 205px;
  }
  @media (max-width: ${ScreenSize.Medium}px) {
    width: 90px;
    height: 90px;
    top: 170px;
    left: 400px;
  }
  @media (max-width: 700px) {
    left: 360px;
  }
  @media (max-width: ${ScreenSize.Small}px) {
    left: 265px;
    top: 210px;
  }
  @media (max-width: 550px) {
    width: 70px;
    height: 70px;
    top: 265px;
    left: 200px;
  }
  @media (max-width: ${ScreenSize.XSmall}px) {
    width: 50px;
    height: 50px;
    top: 260px;
    left: 205px;
  }
  @media (max-width: 400px) {
    width: 50px;
    height: 50px;
    top: 265px;
    left: 140px;
  }
`;

export const HalfCircle = styled.img.attrs((props) => ({
  src: props.src || halfCircle,
  alt: props.alt || "",
}))`
  z-index: 300;
  width: 70px;
  transform: translate(-20px, 0);

  @media (max-width: ${ScreenSize.XSmall}px) {
    width: 75px;
    height: 110px;
    transform: translate(-10px, 0);
  }
`;
