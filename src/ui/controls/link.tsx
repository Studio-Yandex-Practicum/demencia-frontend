import { ReactNode } from "react";
import styled, { css } from "styled-components";
import { ThemeProps } from "./layout";
import cursorImage from "../../images/cursor_pointer.svg";

interface LinkStyleProps extends ThemeProps {
  animated?: boolean;
}

interface LinkProps {
  animated?: boolean;
  children?: ReactNode;
}

export const linkMixin = css<LinkProps>`
  margin: 0;
  padding: 0;
  border: 0;
  vertical-align: baseline;
  font-family: ${(p) => p.theme.layout.fontFamily};
  font-size: ${(p) => p.theme.typography.default.fontSize}px;
  font-weight: ${(p) => p.theme.typography.default.fontWeight};
  line-height: ${(p) => p.theme.typography.default.lineHeight}em;
  white-space: nowrap;
  text-decoration: none;
  cursor: url("${cursorImage}"), pointer;
  color: ${(p) => p.theme.colors.textPrimary};
  transition: font-size 0.5s ease,
    border-bottom 0.5s cubic-bezier(0.2, -2, 0.8, 2);

  &:hover {
    font-size: ${(p) => p.theme.typography.normal.fontSize}px;
    border-bottom: ${(p) => p.theme.layout.borderSize}px solid
      ${(p) => p.theme.colors.accent}; // link hovered
  }
`;

export const A = styled.a<LinkProps>`
  ${linkMixin}
`;

export const Link: React.FunctionComponent<LinkProps> = (props) => {
  return <A>{props.children}</A>;
};
