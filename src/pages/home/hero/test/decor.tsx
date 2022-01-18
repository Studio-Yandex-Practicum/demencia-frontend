import styled from "styled-components";
import pazzles from "../../../../images/test_puzzlesdecor.svg";
import greenPazzle from "../../../../images/test_green_puzzle.svg";
import bigCircle from "../../../../images/circlebg.png";
import mediumCircle from "../../../../images/circlesm.png";
import smallCircle from "../../../../images/smallcircle.png";
import halfCircle from "../../../../images/halfcirclegreen.png";
import { ScreenSize } from "../../../../ui/types";

export const GreenPuzzle = styled.img.attrs((props) => ({
  src: props.src || greenPazzle,
  alt: props.alt || "",
}))`
  width: 100px;
  height: 100px;
  position: absolute;
  z-index: 300;
  top: -192px;
  right: 0;
  margin-right: 18%;

  @media screen and (max-width: 1600px) {
    width: 65px;
    height: 65px;
    top: -50px;
  }

  @media (max-width: ${ScreenSize.Medium}px) {
    width: 70px;
    height: 70px;
    right: -305px;
    top: -170px;
  }
  @media (max-width: ${ScreenSize.Small}px) {
    top: -330px;
  }
  @media (max-width: ${ScreenSize.XSmall}px) {
    width: 65px;
    height: 65px;
    top: -295px;
  }
  @media (max-width: ${ScreenSize.XXSmall}px) {
    width: 40px;
    height: 40px;
    top: -175px;
  }
`;

export const Pazzles = styled.img.attrs((props) => ({
  src: props.src || pazzles,
  alt: props.alt || "",
}))`
  width: 145px;
  height: auto;
  z-index: 301;
  position: relative;
  left: 0;
  top: 100px;

  @media screen and (max-width: 1600px) {
    width: 100px;
  }

  @media (max-width: ${ScreenSize.Medium}px) {
    top: 20px;
    left: 180px;
  }
  @media (max-width: ${ScreenSize.Small}px) {
    left: 35px;
  }
  @media (max-width: ${ScreenSize.XSmall}px) {
    top: 60px;
    left: 0;
  }
  @media (max-width: ${ScreenSize.XXSmall}px) {
    width: 60px;
    height: 60px;
    top: 70px;
  }
`;

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
    top: -25px;
    right: -42px;
  }
  @media (max-width: ${ScreenSize.Small}px) {
    left: 265px;
  }
  @media (max-width: 550px) {
    width: 70px;
    height: 70px;
    top: 265px;
    left: 200px;
  }
  @media (max-width: 440px) {
    width: 50px;
    height: 50px;
    top: 270px;
    left: 145px;
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
    top: -77px;
    right: -210px;
  }
  @media (max-width: ${ScreenSize.Small}px) {
    left: 280px;
  }
  @media (max-width: 550px) {
    width: 185px;
    height: 185px;
    top: 225px;
  }
  @media (max-width: 440px) {
    width: 100px;
    height: 100px;
    top: 255px;
    left: 165px;
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

  @media screen and (max-width: 1600px) {
    width: 350px;
    top: 70px;
    right: 85px;
  }
  @media screen and (max-width: 1100px) {
    right: 18px;
  }
  @media (max-width: ${ScreenSize.Medium}px) {
    width: 365px;
    top: -35px;
    right: -234px;
  }
  @media (max-width: ${ScreenSize.Small}px) {
    left: 160px;
  }
  @media (max-width: 550px) {
    width: 300px;
    height: 300px;
    top: 250px;
  }
  @media (max-width: 440px) {
    width: 200px;
    height: 200px;
    top: 270px;
  }
`;

export const HalfCircle = styled.img.attrs((props) => ({
  src: props.src || halfCircle,
  alt: props.alt || "",
}))`
  z-index: 311;
  width: 70px;
  position: relative;
  right: 15px;

  @media (max-width: ${ScreenSize.XSmall}px) {
    width: 50px;
  }
`;
