import styled, { css } from "styled-components";
import { ThemeProps } from "./layout";

interface LinkStyleProps extends ThemeProps {
  animated?: boolean;
}

interface LinkProps {
  animated?: boolean;
  children?: string;
}

export const linkMixin = css<LinkProps>`
  margin: 0;
  padding: 0;
  border: 0;
  vertical-align: baseline;
  font-family: ${(p) => p.theme.layout.fontFamily};
  white-space: nowrap;
  text-decoration: none;
  cursor: url("../../images/cursor_pointer.svg"), pointer;
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
