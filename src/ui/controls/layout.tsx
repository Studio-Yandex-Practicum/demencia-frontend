import styled, { DefaultTheme } from "styled-components";
import { BoxProps, getBoxStyles } from "./box";
import { ScreenSize } from "../types";

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
}

interface GridProps extends ThemeProps, BoxProps {
  zIndex?: number;
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
`;

export const Section = styled.section<SectionProps>`
  width: 100%;
  position: relative;
  ${getBoxStyles};
  display: ${(p) => (p.flex ? "flex" : "block")};
  flex-direction: ${(p) => (p.flex ? "column" : undefined)};
  align-items: ${(p) => (p.centered ? "center" : "start")};
  z-index: ${(p) => (p.zIndex ? p.zIndex : 0)};
`;

export const TwoColumnGrid = styled.div<GridProps>`
  ${getBoxStyles};
  z-index: ${(p) => (p.zIndex ? p.zIndex : 0)};
  display: grid;
  grid-row-gap: 32px;
  grid-template-columns: minmax(${ScreenSize.XXSmall}, 1fr);

  @media screen and (min-width: ${ScreenSize.Medium}px) {
    grid-column-gap: 0;
    grid-template-columns: 1fr 1fr;
  }
`;
