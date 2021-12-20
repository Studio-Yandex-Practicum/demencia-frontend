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
  white-space: nowrap;
  text-decoration: none;
  cursor: url("${cursorImage}"), pointer;
  color: ${(p) => p.theme.colors.textPrimary};

  &:hover {
    border-bottom: 2px solid ${(p) => p.theme.colors.accent}; // link hovered
  }
`;

export const A = styled.a<LinkProps>`
  ${linkMixin}
`;

export const Link: React.FunctionComponent<LinkProps> = (props) => {
  return <A>{props.children}</A>;
};
