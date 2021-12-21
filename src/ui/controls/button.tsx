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
import { ButtonStyle, ButtonType } from "../types";

interface ButtonProps extends ThemeProps, BoxProps {
  fullWidth: boolean;
  primary?: boolean;
  animated?: boolean;
  uppercase?: boolean;
  fontSize?: FontSize;
}

const buildButtonStyle = (buttonStyle: ButtonStyle): string => {
  const borderValue =
    typeof buttonStyle.borderWidth === "undefined"
      ? "none"
      : `${buttonStyle.borderWidth}px solid ${buttonStyle?.borderColor || ""};`;

  const borderRadius = !!buttonStyle.borderRadius
    ? `border-radius: ${buttonStyle.borderRadius}px;`
    : "";

  return `
    ${borderRadius}
    border: ${borderValue};
    
    color: ${buttonStyle.color};
    background-color: ${buttonStyle.backgroundColor};
  `;
};

export const buttonStyleMixIn = (props: ButtonProps): string => {
  const { buttons } = props.theme;
  const buttonStyleType = !props.primary
    ? ButtonType.Secondary
    : ButtonType.Primary;
  const buttonStyle = buttons[buttonStyleType];
  return buildButtonStyle(buttonStyle);
};

export const linkButtonStyleMixIn = (props: ButtonProps): string => {
  const { buttons } = props.theme;
  const buttonStyle = buttons[ButtonType.Link];
  return buildButtonStyle(buttonStyle);
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

export const buttonBaseMixin = css<ButtonProps>`
  display: inline-block;
  box-sizing: border-box;
  font-family: ${(p) => p.theme.layout.fontFamily};
  text-align: center;
  text-decoration: none;
  ${cursorMixin}
  ${(p) => typographySizeMixIn({ theme: p.theme, size: p.fontSize })};
  ${getBoxStyles}
`;
export const Button = styled.button.attrs((props: ButtonProps) => ({
  pt: 1,
  pb: 1,
  pl: 4,
  pr: 4,
  fontSize: FontSize.Medium,
  animated: true,
  ...props,
}))`
  ${buttonBaseMixin}
  ${buttonStyleMixIn}
  ${buttonAnimationMixin}
  width: ${(p) => (p.fullWidth ? "100%" : "auto")};
`;

export const LinkButton = styled.button.attrs((props: ButtonProps) => ({
  uppercase: true,
  ...props,
}))`
  ${buttonBaseMixin}
  ${linkButtonStyleMixIn}
`;
