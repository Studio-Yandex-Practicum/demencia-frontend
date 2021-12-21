import styled, { css } from "styled-components";
import { FontSize } from "../types/font-size.enum";
import { BoxProps, getBoxStyles } from "./box";
import { ThemeProps } from "./layout";
import { typographySizeMixIn } from "./typography";
import {
  shadowHoverButtonMixIn,
  shadowLargeButtonMixIn,
  shadowHoverLargeButtonMixIn,
} from "./shadows";
import { cursorMixin } from "./cursor";
import { ButtonType } from "../types";

interface ButtonProps extends ThemeProps, BoxProps {
  fullWidth: boolean;
  primary?: boolean;
  animated?: boolean;
  uppercase?: boolean;
}

export const buttonStyleMixIn = (props: ButtonProps): string => {
  const { buttons } = props.theme;
  const buttonStyleType = !props.primary
    ? ButtonType.Secondary
    : ButtonType.Primary;
  const buttonStyle = buttons[buttonStyleType];
  const border = !!buttonStyle.borderWidth
    ? `border: ${buttonStyle.borderWidth}px solid ${buttonStyle.borderColor};`
    : "";

  return `
    ${border}
    border-radius: ${buttonStyle.borderRadius}px;
    color: ${buttonStyle.color};
    background-color: ${buttonStyle.backgroundColor};
  `;
};

export const linkButtonStyleMixIn = (props: ButtonProps): string => {
  const { buttons } = props.theme;
  const buttonStyleType = ButtonType.Link;
  const buttonStyle = buttons[buttonStyleType];
  return `
    border: none;
    color: ${buttonStyle.color};
    background-color: ${buttonStyle.backgroundColor};
  `;
};

export const circleButtonStyleMixin = css<ButtonProps>``;
export const buttonSizeMixin = css<ButtonProps>``;

export const shadowMixin = (props: ButtonProps): string => {
  if (!props.primary) {
    return `
    &:hover {
      ${shadowHoverButtonMixIn};
    }`;
  }

  return `
  ${shadowLargeButtonMixIn}
    &:hover {
      ${shadowHoverLargeButtonMixIn};
    }`;
};

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
  font-family: ${(p) => p.theme.layout.fontFamily};
  text-align: center;
  text-decoration: none;
  ${cursorMixin}
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
  ${buttonStyleMixIn}
  width: ${(p) => (p.fullWidth ? "100%" : "auto")};
`;

export const LinkButton = styled.button.attrs((props: ButtonProps) => ({
  ...props,
}))`
  ${buttonBaseMixin}
  ${linkButtonStyleMixIn}
`;
