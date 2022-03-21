import styled, { DefaultTheme } from "styled-components";
import { PaletteColor } from "../types";
import { ElementAnimationProps, zoomOnHoverMixIn } from "./animation";

export interface BoxProps {
  m?: number;
  mt?: number;
  mb?: number;
  ml?: number;
  mr?: number;
  p?: number;
  pt?: number;
  pb?: number;
  pl?: number;
  pr?: number;
}

export interface BoxStyleProps extends BoxProps {
  theme: DefaultTheme;
  backgroundColor?: PaletteColor;
  maxWidth?: number;
  maxWidthPercent?: number;
  width?: string;
  height?: string;
  flex?: boolean;
  column?: boolean;
  between?: boolean;
  marginTopAuto?: boolean;
  margin?: string;
  absolute?: boolean;
  relative?: boolean;
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
  zIndex?: number;
  animate?: boolean;
  gap?: string;
}

const getShift = (val: number, defaultSpacing: number): number => {
  return [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
  ].indexOf(val) > -1
    ? val * defaultSpacing
    : 0;
};

// "m", "mt", "ml", "mb", "mr", "p", "pt", "pl", "pb", "pr"
export const getBoxStyles = (p: BoxStyleProps): string => {
  const shiftStyles = [];
  const { defaultSpacing } = p.theme.layout;

  // margin
  if (typeof p.m !== "undefined") {
    shiftStyles.push(`margin: ${getShift(p.m, defaultSpacing)}px;`);
  }
  if (typeof p.mt !== "undefined") {
    shiftStyles.push(`margin-top: ${getShift(p.mt, defaultSpacing)}px;`);
  }
  if (typeof p.mb !== "undefined") {
    shiftStyles.push(`margin-bottom: ${getShift(p.mb, defaultSpacing)}px;`);
  }
  if (typeof p.ml !== "undefined") {
    shiftStyles.push(`margin-left: ${getShift(p.ml, defaultSpacing)}px;`);
  }
  if (typeof p.mr !== "undefined") {
    shiftStyles.push(`margin-right: ${getShift(p.mr, defaultSpacing)}px;`);
  }
  // padding
  if (typeof p.p !== "undefined") {
    shiftStyles.push(`padding: ${getShift(p.p, defaultSpacing)}px;`);
  }
  if (typeof p.pt !== "undefined") {
    shiftStyles.push(`padding-top: ${getShift(p.pt, defaultSpacing)}px;`);
  }
  if (typeof p.pb !== "undefined") {
    shiftStyles.push(`padding-bottom: ${getShift(p.pb, defaultSpacing)}px;`);
  }
  if (typeof p.pl !== "undefined") {
    shiftStyles.push(`padding-left: ${getShift(p.pl, defaultSpacing)}px;`);
  }
  if (typeof p.pr !== "undefined") {
    shiftStyles.push(`padding-right: ${getShift(p.pr, defaultSpacing)}px;`);
  }

  return shiftStyles.join(" ");
};

export const Box = styled.div<BoxStyleProps & ElementAnimationProps>`
  display: ${(p) => (p.flex ? "flex" : "block")};
  flex-direction: ${(p) => (p.column ? "column" : "")};
  justify-content: ${(p) => (p.between ? "space-between" : "")};
  box-sizing: border-box;
  max-width: ${(p) =>
    p.maxWidth !== undefined ? `${p.maxWidth}px` : undefined};
  max-width: ${(p) =>
    p.maxWidthPercent !== undefined ? `${p.maxWidthPercent}%` : undefined};
  width: ${(p) => (p.width !== undefined ? `${p.width}` : undefined)};
  height: ${(p) => (p.height !== undefined ? `${p.height}` : undefined)};
  margin: ${(p) => p.margin};
  margin-top: ${(p) => (p.marginTopAuto ? "auto" : "")};
  position: ${(p) => (p.relative ? "relative" : "")};
  position: ${(p) => (p.absolute ? "absolute" : "")};
  top: ${(p) => (p.top !== undefined ? `${p.top}` : undefined)};
  left: ${(p) => (p.left !== undefined ? `${p.left}` : undefined)};
  right: ${(p) => (p.right !== undefined ? `${p.right}` : undefined)};
  bottom: ${(p) => (p.bottom !== undefined ? `${p.bottom}` : undefined)};
  z-index: ${(p) => (p.zIndex ? p.zIndex : 0)};
  gap: ${(p) => (p.gap ? p.gap : "")};
  ${getBoxStyles}
  ${zoomOnHoverMixIn}
  ${(p) =>
    "background-color:" + p.backgroundColor || p.theme.colors.background};
  transition: all 2s ease;
  ${({ animate }) => {
    if (animate) {
      return `
        transform: translateY(200px);
      `;
    }
  }}
`;
