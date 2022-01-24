import styled from "styled-components";
import { Swiper } from "swiper/react";
import { ScreenSize } from "../../../../../ui/types";

const StyledSwiper = styled(Swiper)`
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

export default StyledSwiper;
