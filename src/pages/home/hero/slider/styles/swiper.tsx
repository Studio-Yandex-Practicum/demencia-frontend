import styled from "styled-components";
import { Swiper } from "swiper/react";
import { ScreenSize } from "../../../../../ui/types";
import { Container, Box } from "../../../../../ui/controls";
import whiteHalfCircle from "../../../../../images/test_halfcircle_white.svg";
import pinkHalfCircle from "../../../../../images/decor_halfcirlce_pink.svg";
import defaultImage from "../../../../../images/slider-default.svg";

const StyledSwiper = styled(Swiper)`
  height: auto;
  max-height: 100%;
  margin-left: 0 !important;
  margin-right: 0 !important;
  margin-bottom: -120px;
  max-width: 940px;

  @media (max-width: ${ScreenSize.Medium}px) {
    margin-bottom: 0;
    transform: translateY(0);
    max-height: 600px;
  }
  @media (max-width: ${ScreenSize.Small}px) {
    max-height: 500px;
  }
  @media (max-width: ${ScreenSize.XSmall}px) {
    max-height: 385px;
  }
`;

const StyledBgImage = styled.div<{
  url?: string;
}>`
  height: 100%;
  background: rgb(0, 0, 0);
  background-image: radial-gradient(
      circle,
      rgba(255, 255, 255, 0.4) 0%,
      rgba(0, 0, 0, 0.15) 0%
    ),
    url(${(props) => props.url || defaultImage});
  background-size: cover;
  background-position: top;
  @media (max-width: ${ScreenSize.Medium}px) {
    width: 100%;
    height: 85vh;
  }
  @media (max-width: ${ScreenSize.XSmall}px) {
    background-position-y: -100px;
  }
`;

const StyledBox = styled(Box)`
  @media (max-width: ${ScreenSize.Small}px) {
    margin-right: 16px;
  }
  @media (max-width: ${ScreenSize.XSmall}px) {
    margin: 4px 4px;
    top: 100px;
  }
`;

const StyledContainer = styled(Container)`
  position: relative;
`;

const Wrapper = styled.div`
  position: absolute;
  bottom: calc(100% / 2 - 160px / 0.65);
  z-index: 1;
  width: min(100% - 100px, 450px);
  left: 0;
  @media (max-width: ${ScreenSize.Medium}px) {
    width: min(100% - 100px, 520px);
  }
  @media (max-width: ${ScreenSize.Small}px) {
    left: 20px;
    bottom: 50px;
    height: min(140px, 50%);
  }
  @media (max-width: ${ScreenSize.XSmall}px) {
    bottom: 0;
    left: 0;
    width: 100%;
  }
`;

const Decor = styled.div`
  width: 135px;
  height: 266px;
  background-image: url(${pinkHalfCircle});
  background-size: cover;
  background-repeat: no-repeat;
  position: absolute;
  bottom: calc(100% / 2 - 266px / 2);
  right: 10px;

  @media (max-width: ${ScreenSize.Medium}px) {
    bottom: calc(100% / 2 - 240px / 2);
    width: 124px;
    height: 240px;
  }
  @media (max-width: ${ScreenSize.Small}px) {
    display: none;
  }
`;

export {
  StyledSwiper,
  StyledBgImage,
  StyledBox,
  StyledContainer,
  Decor,
  Wrapper,
};
