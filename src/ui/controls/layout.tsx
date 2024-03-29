import styled, { DefaultTheme } from "styled-components";
import { BoxProps, getBoxStyles } from "./box";
import { PaletteColor, ScreenSize } from "../types";

export interface ThemeProps {
  theme: DefaultTheme;
}
interface LayoutProps extends ThemeProps {
  // todo: add own props
  screenWidth?: number;
}
interface SectionProps extends ThemeProps, BoxProps {
  // todo: add own props
  col?: number;
  flex?: boolean;
  centered?: boolean;
  zIndex?: number;
  direction?: string;
  backgroundColor?: PaletteColor;
  borderBox?: boolean;
}

interface GridProps extends ThemeProps, BoxProps {
  zIndex?: number;
  width?: string;
}

export const Layout = styled.div<LayoutProps>`
  max-width: ${(props) => props.theme.layout.maxWidth}px;
  min-width: ${(props) => props.theme.layout.minWidth}px;
  margin: auto;
  box-sizing: border-box;
  overflow: hidden;
  background-color: ${(props) => props.theme.colors.background};
`;

export const Main = styled.main`
  //position: relative;
  display: flex;
  flex-direction: column;
  //justify-content: center;
  align-items: stretch;
  margin-left: 32px;
  margin-right: 32px;

  @media screen and (max-width: ${ScreenSize.Small}px) {
    margin-left: 16px;
    margin-right: 16px;
  }
`;

export const Section = styled.section<SectionProps>`
  width: 100%;
  position: relative;
  box-sizing: ${(p) => (p.borderBox ? "border-box" : "content-box")};
  ${getBoxStyles};
  display: ${(p) => (p.flex ? "flex" : "block")};
  flex-direction: ${(p) =>
    p.flex ? (p.direction ? p.direction : "column") : undefined};
  align-items: ${(p) => (p.centered ? "center" : "start")};
  z-index: ${(p) => (p.zIndex ? p.zIndex : 0)};
  ${(p) =>
    "background-color:" + p.backgroundColor || p.theme.colors.background};
`;

export const TwoColumnGrid = styled.div<GridProps>`
  ${getBoxStyles};
  z-index: ${(p) => (p.zIndex ? p.zIndex : 0)};
  width: ${(p) => (p.width !== undefined ? `${p.width}` : undefined)};
  display: grid;
  grid-row-gap: 32px;
  grid-template-columns: minmax(${ScreenSize.XXSmall}, 1fr);

  @media screen and (min-width: ${ScreenSize.Medium}px) {
    grid-column-gap: 0;
    grid-template-columns: 1fr 1fr;
  }
`;

export const SeparatedColumn = styled.div<SectionProps>`
  margin: 0;
  padding: 25px;
  display: ${(p) => (p.flex ? "flex" : "block")};
  flex-direction: ${(p) => (p.flex ? "column" : undefined)};
  align-items: ${(p) => (p.centered ? "center" : "start")};
  border-right: 2px solid ${PaletteColor.DarkPurple};
  border-top: none;
  &:nth-child(3) {
    border-right: none;
  }

  @media screen and (max-width: ${ScreenSize.Medium}px) {
    &:first-child {
      border-top: none;
    }

    &:first-child {
      padding-top: 0;
    }

    border-right: none;
    border-top: 2px solid ${PaletteColor.DarkPurple};
  }
`;

export const ThreeColumnGrid = styled.div<GridProps>`
  ${getBoxStyles};
  z-index: ${(p) => (p.zIndex ? p.zIndex : 0)};
  display: grid;
  justify-content: center;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 0;

  @media screen and (max-width: ${ScreenSize.Medium}px) {
    grid-template-columns: 1fr;
  }
`;
