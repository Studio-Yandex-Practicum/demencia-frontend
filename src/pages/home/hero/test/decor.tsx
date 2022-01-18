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
  bottom: 185px;
  right: 0;
  margin-right: 13%;
  @media (max-width: ${ScreenSize.Large}px) {
    width: 65px;
    height: 65px;
    bottom: 150px;
  }
  @media (max-width: ${ScreenSize.Medium}px) {
    width: 70px;
    height: 70px;
    right: 235px;
    top: -230px;
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
  width: 140px;
  height: 140px;
  z-index: 301;
  position: absolute;
  top: 100px;

  @media (max-width: ${ScreenSize.Large}px) {
    width: 100px;
    height: 100px;
  }
  @media (max-width: ${ScreenSize.Medium}px) {
    width: 100px;
    height: 100px;
    right: 38rem;
    top: 35px;
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
  width: 90px;
  height: 90px;
  position: absolute;
  top: 270px;
  z-index: 297;
  @media screen and (max-width: 1350px) {
    width: 50px;
    height: 50px;
  }
  @media screen and (max-width: 1100px) {
    top: 300px;
  }
  @media (max-width: ${ScreenSize.Medium}px) {
    width: 80px;
    height: 80px;
    top: -90px;
    right: 420px;
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
  height: 300px;
  z-index: 298;
  position: absolute;
  top: 190px;
  @media screen and (max-width: 1350px) {
    width: 200px;
    height: 200px;
    top: 220px;
  }
  @media screen and (max-width: 1100px) {
    top: 250px;
  }
  @media (max-width: ${ScreenSize.Medium}px) {
    width: 220px;
    height: 220px;
    top: -140px;
    right: 250px;
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
  display: flex;
  width: 450px;
  height: 450px;
  z-index: 299;
  position: absolute;
  top: 265px;
  @media screen and (max-width: 1350px) {
    width: 300px;
    height: 300px;
  }
  @media screen and (max-width: 1100px) {
    width: 250px;
    height: 250px;
    top: 285px;
  }
  @media (max-width: ${ScreenSize.Medium}px) {
    width: 365px;
    height: 365px;
    top: -100px;
    right: 230px;
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
