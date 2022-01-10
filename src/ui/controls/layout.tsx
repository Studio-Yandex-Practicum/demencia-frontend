import styled, { DefaultTheme } from "styled-components";
import { PaletteColor, ScreenSize } from "../types";
import { BoxProps } from "./box";

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
  position: relative;
`;

export const Section = styled.section<SectionProps>`
  width: 100%;
  margin: 0;
  padding: 0;
`;

export const TwoColumnSection = styled(Section)<SectionProps>`
  display: grid;
  grid-template-columns: repeat(
    auto-fit,
    minmax(${ScreenSize.Medium / 2}px, 1fr)
  );
  grid-gap: 0;
`;

export const SeparatedColumn = styled.div`
  margin: 0;
  padding: 25px;
  border-right: 2px solid ${PaletteColor.DarkPurple};
  border-top: none;
  &:nth-child(3) {
    border-right: none;
  }

  @media screen and (max-width: ${ScreenSize.Medium}px) {
    &:first-child {
      border-top: none;
    }

    border-right: none;
    border-top: 2px solid ${PaletteColor.DarkPurple};
  }
`;

export const ThreeColumnSection = styled(Section)<SectionProps>`
  display: grid;
  justify-content: center;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 0;

  @media screen and (max-width: ${ScreenSize.Medium}px) {
    grid-template-columns: 1fr;
  }
`;
