import styled, { css, DefaultTheme } from "styled-components";
interface LayoutProps {
  theme: DefaultTheme;
}

export const Layout = styled.div<LayoutProps>`
  max-width: ${(props) => props.theme.layout.maxWidth}px;
  min-width: ${(props) => props.theme.layout.minWidth}px;
  margin: auto;
  box-sizing: border-box;
  overflow: hidden;
`;
