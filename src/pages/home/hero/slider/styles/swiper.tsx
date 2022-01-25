import styled from "styled-components";
import { Swiper } from "swiper/react";
import { ScreenSize } from "../../../../../ui/types";
import defaultImage from "../../../../../images/slider-default-image.png";

export const StyledSwiper = styled(Swiper)`
  height: auto;
  max-height: 100%;
  margin-left: 0 !important;
  margin-right: 0 !important;
  margin-bottom: -120px;

  @media (max-width: ${ScreenSize.Medium}px) {
    margin-bottom: 0;
    transform: translateY(0);
  }
  @media (max-width: ${ScreenSize.Small}px) {
    max-height: 70%;
  }
  @media (max-width: ${ScreenSize.XSmall}px) {
    max-height: 55%;
  }
`;

export const StyledBgImage = styled.div<{
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
