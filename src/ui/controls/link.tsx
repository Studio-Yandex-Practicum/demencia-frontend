import React, { ReactNode } from "react";
import styled, { css } from "styled-components";
import { ThemeProps } from "./layout";
import { cursorMixin } from "./cursor";

interface LinkStyleProps extends ThemeProps {
  animated?: boolean;
}

interface LinkProps {
  animated?: boolean;
  uppercased?: boolean;
  children?: ReactNode;
}

const linkFontSize = 20;

export const linkMixin = css<LinkProps>`
  margin: 0;
  padding: 0;
  border: 0;
  vertical-align: baseline;
  font-family: ${(p) => p.theme.layout.fontFamily};
  font-size: ${linkFontSize}px;
  font-weight: ${(p) => p.theme.typography.subtitle2.fontWeight};
  line-height: ${(p) => p.theme.typography.subtitle2.lineHeight};
  white-space: nowrap;
  text-decoration: none;
  text-transform: uppercase;
  ${cursorMixin};
  color: ${(p) => p.theme.colors.textPrimary};
  transition: font-size 0.5s ease,
    border-bottom 0.5s cubic-bezier(0.2, -2, 0.8, 2);

  &:hover {
    font-size: ${() => Math.floor(linkFontSize * 1.1)}px;
    border-bottom: ${(p) => p.theme.layout.borderSize}px solid
      ${(p) => p.theme.colors.textAccent1}; // link hovered
  }
`;

export const A = styled.a<LinkProps>`
  ${linkMixin}
`;

export const Link: React.FC<LinkProps> = (props) => {
  return <A>{props.children}</A>;
};
