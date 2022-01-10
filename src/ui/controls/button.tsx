import styled, { css, DefaultTheme, ThemeProps } from "styled-components";
import { FontLevelProps, typographySizeMixIn } from "./typography";
import { cursorMixin } from "./cursor";
import { ButtonShape, ButtonSize, ButtonType, TypographyLevel } from "../types";
import {
  TextUppercaseProps,
  textUppercaseMixIn,
  FontColorProps,
  getTextSelectedColor,
} from "./mixins";
import { ElementAnimationProps, zoomOutOnHoverMixIn } from "./animation";
import { PropsWithChildren, ReactNode } from "react";
import { BackgroundColorProps } from "./container";

export interface ButtonProps
  extends FontColorProps,
    FontLevelProps,
    BackgroundColorProps,
    TextUppercaseProps,
    ElementAnimationProps {
  fullWidth?: boolean;
  type?: ButtonType;
  size?: ButtonSize;
  shape?: ButtonShape;
  ghost?: boolean;
  icon?: ReactNode;
}

const buildLinkButtonStyleMixIn = (
  props: ThemeProps<DefaultTheme> & ButtonProps
): string => {
  if (!props.type || props.type !== ButtonType.Link) {
    return "";
  }

  const { buttons } = props.theme;
  const buttonStyleType = props.type || ButtonType.Primary;
  const buttonStyle = !!buttons && buttons.types[buttonStyleType];
  const buttonSizeType = props.size || ButtonSize.Default;
  const buttonSize = buttons.sizes[buttonSizeType];
  const color =
    (!!props.textColor && getTextSelectedColor(props)) || buttonStyle.color;

  const fontStyles = !props.level
    ? `font-size: ${buttonSize.fontSize}px; font-weight: ${buttonSize.fontWeight};`
    : "";

  return `
    border: none;
    ${fontStyles}
    color: ${color};
    background-color: transparent;
  `;
};

const buildCircleButtonStyleMixIn = (
  props: ThemeProps<DefaultTheme> & ButtonProps
): string => {
  if (!props?.shape || props.shape !== ButtonShape.Circle) {
    return "";
  }

  const { buttons } = props.theme;
  const buttonStyleType = props.type || ButtonType.Primary;
  const buttonStyle = !!buttons && buttons.types[buttonStyleType];
  const buttonSizeType = props.size || ButtonSize.Default;
  const buttonSize =
    buttons.sizes[`${buttonSizeType}Circle`] || buttons.sizes.defaultCircle;
  const color =
    (!!props.textColor && getTextSelectedColor(props)) ||
    (!props.ghost ? buttonStyle.color : buttonStyle.backgroundColor);

  const fontStyles = !props.level
    ? `font-size: ${buttonSize.fontSize}px; font-weight: ${buttonSize.fontWeight};`
    : "";

  return `
    padding: 0;
    border: 0;
    border-radius: 50%;
    height: ${buttonSize.height}px;
    width: ${buttonSize.height}px;
    ${fontStyles}
    color: ${color};
    background-color: ${
      !props.ghost
        ? props.bgColor || buttonStyle.backgroundColor || "transparent"
        : "transparent"
    };
  `;
};

const buildButtonStyleMixIn = (
  props: ThemeProps<DefaultTheme> & ButtonProps
): string => {
  const { buttons } = props.theme;
  const buttonStyleType = props.type || ButtonType.Primary;
  if (buttonStyleType === ButtonType.Link) {
    return buildLinkButtonStyleMixIn(props);
  }

  if (!!props?.shape && props.shape === ButtonShape.Circle) {
    return buildCircleButtonStyleMixIn(props);
  }

  const buttonStyle = !!buttons && buttons.types[buttonStyleType];
  const buttonSizeType = props.size || ButtonSize.Default;
  const buttonSize = buttons.sizes[buttonSizeType];
  const borderColor = !props.ghost
    ? buttonStyle.borderColor || "transparent"
    : buttonStyle.backgroundColor;
  const borderValue =
    typeof buttonSize.borderWidth === "undefined"
      ? "none"
      : `${buttonSize.borderWidth}px solid ${borderColor || ""};`;

  let borderRadius = !!buttonSize.borderRadius
    ? `border-radius: ${buttonSize.borderRadius}px;`
    : "";

  if (props.shape === ButtonShape.Circle) {
    borderRadius = `border-radius: 50%;`;
  }

  // todo:
  const minWidthStyle =
    props.shape === ButtonShape.Circle ? "min-width: 50px;" : "";

  const color =
    (!!props.textColor && getTextSelectedColor(props)) ||
    (!props.ghost ? buttonStyle.color : buttonStyle.backgroundColor);

  const fontStyles = !props.level
    ? `font-size: ${buttonSize.fontSize}px; font-weight: ${buttonSize.fontWeight}; line-height: 0;`
    : "";

  return `
    height: ${buttonSize.height}px;
    padding: ${buttonSize.paddingVertical}px ${buttonSize.paddingHorizontal}px;
    ${minWidthStyle}
    ${borderRadius}
    border: ${borderValue};
    ${fontStyles}
    color: ${color};
    background-color: ${
      !props.ghost
        ? props.bgColor || buttonStyle.backgroundColor || "transparent"
        : "transparent"
    };
  `;
};

export const buttonBaseMixin = css<ButtonProps>`
  display: inline-block;
  width: ${(p) => (!p.fullWidth ? "auto" : "100%")};
  box-sizing: border-box;
  font-family: ${(p) => p.theme.layout.fontFamily};
  text-align: center;
  text-decoration: none;
  ${textUppercaseMixIn}
  ${typographySizeMixIn}
  ${buildButtonStyleMixIn}
  ${cursorMixin}
  ${zoomOutOnHoverMixIn}
  line-height: 0;
`;

export const Button = styled.button.attrs((props: ButtonProps) => ({
  zoomOutOnHover: true,
  uppercase: props.type === ButtonType.Primary,
  ...props,
}))`
  ${buttonBaseMixin}
`;

export const LinkButton = styled.button.attrs((props: ButtonProps) => ({
  type: ButtonType.Link,
  zoomOnHover: true,
  uppercase: true,
  ...props,
}))`
  ${buttonBaseMixin};
  padding: 0;
`;

export const CircleButton: React.FC<ButtonProps> = (
  props: PropsWithChildren<ButtonProps>
) => {
  return (
    <Button type={ButtonType.Secondary} shape={ButtonShape.Circle}>
      {props.children}
    </Button>
  );
};
