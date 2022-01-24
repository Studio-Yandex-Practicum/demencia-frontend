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
  height: auto;
  position: absolute;
  z-index: 300;
  top: -192px;
  right: 0;
  margin-right: 18%;

  @media screen and (max-width: 1600px) {
    width: 65px;
    top: -50px;
  }

  @media (max-width: ${ScreenSize.Medium}px) {
    width: 70px;
    right: -305px;
    top: -170px;
  }
  @media (max-width: ${ScreenSize.Small}px) {
    top: -106px;
    right: -240px;
    width: 55px;
  }
  @media (max-width: ${ScreenSize.XSmall}px) {
    width: 35px;
    top: -17px;
    right: -39vw;
  }
  @media (max-width: ${ScreenSize.XXSmall}px) {
    width: 40px;
    right: -50vw;
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
  margin-top: 30%;

  @media screen and (max-width: 1600px) {
    width: 100px;
    margin-top: 40%;
  }

  @media (max-width: ${ScreenSize.Medium}px) {
    top: 20px;
    left: calc(100% / 2 - 35px);
  }
  @media (max-width: ${ScreenSize.Small}px) {
    left: 0;
    top: 47px;
    width: 90px;
  }
  @media (max-width: ${ScreenSize.XSmall}px) {
    width: 61px;
    left: calc(100% - 280px / 2);
    top: 55px;
  }
  @media (max-width: ${ScreenSize.XXSmall}px) {
    top: 48px;
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

  @media screen and (max-width: 1800px) {
    width: 90px;
    right: 375px;
  }
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
    width: 70px;
    top: 26px;
    left: 191px;
  }
  @media (max-width: ${ScreenSize.XSmall}px) {
    width: 51px;
    top: 61px;
    left: calc(100% - 41px / 2);
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

  @media screen and (max-width: 1800px) {
    right: 140px;
  }
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
    width: 185px;
    top: -21px;
    left: 221px;
  }
  @media (max-width: ${ScreenSize.XSmall}px) {
    width: 133px;
    top: 36px;
    left: calc(100% - 18px / 2);
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

  @media screen and (max-width: 1800px) {
    width: 450px;
  }
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
    width: 330px;
    top: 10px;
    left: 107px;
  }
  @media (max-width: ${ScreenSize.XSmall}px) {
    width: 218px;
    top: 59px;
    left: calc(100% - 145px / 2);
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
