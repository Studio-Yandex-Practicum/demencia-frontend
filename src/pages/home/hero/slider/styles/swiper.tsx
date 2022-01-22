import styled from "styled-components";
import { Swiper } from "swiper/react";
import { ScreenSize } from "../../../../../ui/types";

const StyledSwiper = styled(Swiper)`
  height: auto;
  max-height: 900px;
  transform: translateY(-120px);
  margin-left: 0 !important;
  margin-right: 0 !important;
  margin-bottom: -120px;

  @media (max-width: ${ScreenSize.Medium}px) {
    margin-bottom: 0;
    transform: translateY(0);
  }
`;

export default StyledSwiper;
