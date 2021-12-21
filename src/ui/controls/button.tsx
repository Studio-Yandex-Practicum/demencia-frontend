import styled, { css } from "styled-components";
import { FontSize } from "../types/font-size.enum";
import { BoxProps, getBoxStyles } from "./box";
import { ThemeProps } from "./layout";
import { P, typographySizeMixIn } from "./typography";
import cursorImage from "../../images/cursor_pointer.svg";
import { PaletteColor } from "../types";

interface ButtonProps extends ThemeProps, BoxProps {
  fullWidth: boolean;
  animated?: boolean;
  primary?: boolean;
  link?: boolean;
}

export const buttonStyleMixin = css<ButtonProps>``;
export const linkButtonStyleMixin = css<ButtonProps>``;
export const circleButtonStyleMixin = css<ButtonProps>``;
export const buttonSizeMixin = css<ButtonProps>``;

export const buttonAnimationMixin = (props: ButtonProps): string => {
  if (!props.animated) {
    return "";
  }
  return `
  transition: all 1s ease;

  &:hover {
    transform: scale(1.1);
  }`;
};

export const buttonBaseMixin = css`
  display: inline-block;
  box-sizing: border-box;
  border: 0;
  font-family: ${(p) => p.theme.layout.fontFamily};
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  ${buttonAnimationMixin}
  ${(p) => typographySizeMixIn({ theme: p.theme, size: FontSize.Medium })};
  ${getBoxStyles}
`;

export const Button = styled.button.attrs((props: ButtonProps) => ({
  pt: 1,
  pb: 1,
  pl: 4,
  pr: 4,
  animated: true,
  ...props,
}))`
  ${buttonBaseMixin}
  cursor: url("${cursorImage}"), pointer;
  width: ${(p) => (p.fullWidth ? "100%" : "auto")};
  border-radius: ${(p) => p.theme.layout.borderRadius}px;
  color: ${(p) => p.theme.button.color};
  background-color: ${(p) => p.theme.button.backgroundColor};

  &:hover {
    box-shadow: 5px 5px 20px 2px ${PaletteColor.Grey};
  }
`;

export const LinkButton = styled.button.attrs((props: ButtonProps) => ({
  pt: 1,
  pb: 1,
  pl: 4,
  pr: 4,
  animated: true,
  ...props,
}))`
  ${buttonBaseMixin}
`;
