import styled, { DefaultTheme } from "styled-components";
import { FontSize } from "../types/font-size.enum";
import { BoxProps, getBoxStyles } from "./box";
import { ThemeProps } from "./layout";
import { typographySizeMixIn } from "./typography";
import cursorImage from "../../images/cursor_pointer.svg";

interface ButtonProps extends ThemeProps, BoxProps {
  fullWidth: boolean;
}

export const Button = styled.button.attrs((props: ButtonProps) => ({
  pt: 1,
  pb: 1,
  pl: 3,
  pr: 3,
  ...props,
}))`
  display: inline-block;
  margin: auto;
  border: none;
  text-align: center;
  text-decoration: none;
  cursor: url("${cursorImage}"), pointer;
  font-family: ${(p) => p.theme.layout.fontFamily};
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${(p) => (p.fullWidth ? "100%" : "auto")};
  gap: ${(p) => p.theme.layout.defaultSpacing * 2}px;
  border-radius: ${(p) => p.theme.layout.borderRadius}px;
  color: ${(p) => p.theme.button.color};
  background-color: ${(p) => p.theme.button.backgroundColor};
  ${(p) => typographySizeMixIn({ theme: p.theme, size: FontSize.Medium })}
  ${getBoxStyles};
`;
