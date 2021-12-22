import styled, { DefaultTheme } from "styled-components";
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
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  grid-gap: 0;
`;
