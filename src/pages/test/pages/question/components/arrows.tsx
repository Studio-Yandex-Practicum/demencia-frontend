import styled from "styled-components";
import arrowLeft from "../../../../../images/arrow-left.svg";
import arrowRight from "../../../../../images/arrow-right.svg";
import arrowDown from "../../../../../images/arrow-down.svg";
import arrowTop from "../../../../../images/arrow-top.svg";
import { ScreenSize } from "../../../../../ui/types";
import { cursorMixin } from "../../../../../ui/controls";

export const ArrowLeft = styled.img.attrs((props) => ({
  src: props.src || arrowLeft,
  alt: props.alt || "",
}))`
  z-index: 309;
  width: 60px;
  position: relative;
  right: 0;
  margin-right: 20px;
  ${cursorMixin}

  @media (max-width: ${ScreenSize.XSmall}px) {
    width: 40px;
  }
`;

export const ArrowRight = styled.img.attrs((props) => ({
  src: props.src || arrowRight,
  alt: props.alt || "",
}))`
  z-index: 309;
  width: 60px;
  position: relative;
  right: 0;
  margin-left: 20px;
  ${cursorMixin}

  @media (max-width: ${ScreenSize.XSmall}px) {
    width: 40px;
  }
`;

export const ArrowTop = styled.img.attrs((props) => ({
  src: props.src || arrowDown,
  alt: props.alt || "",
}))`
  z-index: 309;
  width: 20px;
  position: relative;
  right: 0;
`;

export const ArrowDown = styled.img.attrs((props) => ({
  src: props.src || arrowTop,
  alt: props.alt || "",
}))`
  z-index: 309;
  width: 20px;
  position: relative;
  right: 0;
`;
