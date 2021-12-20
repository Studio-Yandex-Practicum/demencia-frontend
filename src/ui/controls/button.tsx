import styled from "styled-components";
import { FontSize } from "../types/font-size.enum";
import { BoxProps, getBoxStyles } from "./box";
import { ThemeProps } from "./layout";
import { typographySizeMixIn } from "./typography";
import cursorImage from "../../images/cursor_pointer.svg";
import { PaletteColor } from "../types";

interface ButtonProps extends ThemeProps, BoxProps {
  fullWidth: boolean;
}

export const Button = styled.button.attrs((props: ButtonProps) => ({
  pt: 1,
  pb: 1,
  pl: 4,
  pr: 4,
  ...props,
}))`
  display: inline-block;
  margin: auto;
  border: none;
  box-sizing: border-box;
  transition: all 1s ease;
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
  ${(p) => typographySizeMixIn({ theme: p.theme, size: FontSize.Medium })};
  ${getBoxStyles}

  &:hover {
    transform: scale(1.1);
    box-shadow: 5px 5px 20px 2px ${PaletteColor.Grey};
  }
`;
