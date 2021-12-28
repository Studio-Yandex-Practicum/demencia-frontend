import styled, { css, DefaultTheme, ThemeProps } from "styled-components";
import { BoxProps, getBoxStyles } from "./box";
import { FontLevelProps, typographySizeMixIn } from "./typography";
import { cursorMixin } from "./cursor";
import {
  ButtonShape,
  ButtonStyle,
  ButtonType,
  TypographyLevel,
} from "../types";
import {
  TextUppercaseProps,
  textUppercaseMixIn,
  FontColorProps,
} from "./mixins";
import { ElementAnimationProps, zoomOnHoverMixIn } from "./animation";
import { PropsWithChildren, ReactNode } from "react";
import { BackgroundColorProps } from "./container";

interface ButtonProps
  extends BoxProps,
    FontColorProps,
    FontLevelProps,
    BackgroundColorProps,
    TextUppercaseProps,
    ElementAnimationProps {
  fullWidth?: boolean;
  type?: ButtonType;
  shape?: ButtonShape;
  ghost?: boolean;
  icon?: ReactNode;
}

const buildButtonStyleMixIn = (
  props: ThemeProps<DefaultTheme> & ButtonProps
): string => {
  const { buttons } = props.theme;
  const buttonStyleType = props.type || ButtonType.Primary;
  const buttonStyle = buttons[buttonStyleType];
  const borderColor = !props.ghost
    ? buttonStyle.borderColor || "transparent"
    : buttonStyle.backgroundColor;
  const borderValue =
    typeof buttonStyle.borderWidth === "undefined"
      ? "none"
      : `${buttonStyle.borderWidth}px solid ${borderColor || ""};`;

  let borderRadius = !!buttonStyle.borderRadius
    ? `border-radius: ${buttonStyle.borderRadius}px;`
    : "";

  if (props.shape === ButtonShape.Circle) {
    borderRadius = `border-radius: 50%;`;
  }

  return `
    ${borderRadius}
    border: ${borderValue};
    
    color: ${
      props.textColor || !props.ghost
        ? buttonStyle.color
        : buttonStyle.backgroundColor
    }};
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
  ${buildButtonStyleMixIn}
  ${cursorMixin}
  ${typographySizeMixIn}
  ${getBoxStyles}
  ${zoomOnHoverMixIn}
`;
export const Button = styled.button.attrs((props: ButtonProps) => ({
  pt: 1,
  pb: 1,
  pl: 4,
  pr: 4,
  type: ButtonType.Primary,
  zoomOnHover: true,
  uppercase: props.type === ButtonType.Primary,
  level:
    !props.type || props.type === ButtonType.Primary
      ? TypographyLevel.Subtitle3
      : TypographyLevel.Text1,
  ...props,
}))`
  ${buttonBaseMixin}
`;

export const LinkButton: React.FC<ButtonProps> = (
  props: PropsWithChildren<ButtonProps>
) => {
  return (
    <Button type={ButtonType.Link} level={TypographyLevel.Text1}>
      {props.children}
    </Button>
  );
};
