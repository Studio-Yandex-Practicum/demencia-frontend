import styled, { css, DefaultTheme } from "styled-components";
interface LayoutProps {
  theme: DefaultTheme;
}
interface SectionProps {
  theme: DefaultTheme;
}

export const Layout = styled.div<LayoutProps>`
  max-width: ${(props) => props.theme.layout.maxWidth}px;
  min-width: ${(props) => props.theme.layout.minWidth}px;
  margin: auto;
  box-sizing: border-box;
  overflow: hidden;
`;

export const Main = styled.main`
  position: relative;
`;

export const Section = styled.section<SectionProps>`
  width: 100%;
  padding: 0;
`;

export const TwoColumnSection = styled(Section)<SectionProps>`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  grid-gap: 0;
`;