import React, { ReactNode } from "react";
import styled, { css, DefaultTheme, ThemeProps } from "styled-components";
import { PaletteColor, TextColor, TypographyLevel } from "../types";
import {
  TextUppercaseProps,
  textUppercaseMixIn,
  FontColorProps,
  getTextSelectedColor,
  colorChangeOnHoverMixIn,
  ColorChangeOnHoverProps,
} from "./mixins";
import { TextSizeAnimationProps } from "./animation";
import { BoxProps, getBoxStyles } from "./box";

interface TextUnderlinedProps {
  underlined?: boolean;
}
export interface FontLevelProps {
  level?: TypographyLevel;
}
export interface TextBlockProps
  extends BoxProps,
    FontColorProps,
    TextUppercaseProps,
    TextUnderlinedProps,
    ColorChangeOnHoverProps,
    TextSizeAnimationProps {}

export const textUnderlinedMixin = (props: TextUnderlinedProps): string => {
  if (!props.underlined) {
    return "";
  }

  return `
  text-decoration-line: underline;
`;
};

export const typographySizeMixIn = (
  props: ThemeProps<DefaultTheme> & FontLevelProps
): string => {
  const { typography } = props.theme;
  const selectedSize = typography[props.level || TypographyLevel.Text1];
  return `
        font-weight: ${selectedSize.fontWeight};
        font-size: ${selectedSize.fontSize}px;
        line-height: ${selectedSize.lineHeight};
    `;
};

export const typographyColorMixIn = (
  props: ThemeProps<DefaultTheme> & FontColorProps
): string => {
  const colorToApply = getTextSelectedColor(props);
  if (!colorToApply) {
    return "";
  }

  return `color: ${colorToApply}; fill: ${colorToApply}`;
};

export const typographyMixin = css<
  BoxProps &
    FontLevelProps &
    FontColorProps &
    TextUppercaseProps &
    TextUnderlinedProps &
    ColorChangeOnHoverProps
>`
  margin: 0;
  padding: 0;
  border: 0;
  vertical-align: baseline;
  font-family: ${(props) => props.theme.layout.fontFamily};
  word-break: break-word;
  ${typographySizeMixIn};
  ${typographyColorMixIn};
  ${getBoxStyles};
  ${textUppercaseMixIn};
  ${textUnderlinedMixin};
  ${colorChangeOnHoverMixIn}
`;

export const MainTitle = styled.h1.attrs(
  (props: ThemeProps<DefaultTheme> & TextBlockProps) => ({
    level: TypographyLevel.MainTitle,
    uppercase: true,
    textColor: TextColor.Accent1, // default values
    hoverColor: TextColor.Accent2,
    ...props,
  })
)`
  ${typographyMixin}
`;

export const Title = styled.h2.attrs(
  (props: ThemeProps<DefaultTheme> & TextBlockProps) => ({
    level: TypographyLevel.Title,
    uppercase: true,
    textColor: TextColor.Accent2, // default values
    hoverColor: TextColor.Accent1,
    ...props,
  })
)`
  ${typographyMixin}
`;

export const Subtitle1 = styled.h3.attrs(
  (props: ThemeProps<DefaultTheme> & TextBlockProps) => ({
    level: TypographyLevel.Subtitle1,
    uppercase: true,
    textColor: TextColor.Accent1, // default values
    hoverColor: TextColor.Accent2,
    ...props,
  })
)`
  ${typographyMixin}
`;

export const Subtitle2 = styled.h4.attrs(
  (props: ThemeProps<DefaultTheme> & TextBlockProps) => ({
    level: TypographyLevel.Subtitle2,
    uppercase: true,
    textColor: TextColor.Accent1, // default values
    hoverColor: TextColor.Accent2,
    ...props,
  })
)`
  ${typographyMixin}
`;

export const Subtitle3 = styled.h5.attrs(
  (props: ThemeProps<DefaultTheme> & TextBlockProps) => ({
    level: TypographyLevel.Subtitle3,
    uppercase: true,
    textColor: TextColor.Shadow,
    ...props,
  })
)`
  ${typographyMixin}
`;

export const Subtitle4 = styled.h6.attrs(
  (props: ThemeProps<DefaultTheme> & TextBlockProps) => ({
    level: TypographyLevel.Subtitle4,
    uppercase: true,
    ...props,
  })
)`
  ${typographyMixin}
`;

export const Text1 = styled.p.attrs(
  (props: ThemeProps<DefaultTheme> & TextBlockProps) => ({
    level: TypographyLevel.Text1,
    ...props,
  })
)`
  ${typographyMixin}
`;

export const Text2 = styled.p.attrs(
  (props: ThemeProps<DefaultTheme> & TextBlockProps) => ({
    level: TypographyLevel.Text2,
    ...props,
  })
)`
  ${typographyMixin}
`;

export const Text3 = styled.p.attrs(
  (props: ThemeProps<DefaultTheme> & TextBlockProps) => ({
    level: TypographyLevel.Text3,
    ...props,
  })
)`
  ${typographyMixin}
`;

export const Text4 = styled.p.attrs(
  (props: ThemeProps<DefaultTheme> & TextBlockProps) => ({
    level: TypographyLevel.Text4,
    ...props,
  })
)`
  ${typographyMixin}
`;

export const TextBlock = styled.div<
  ThemeProps<DefaultTheme> & FontLevelProps & TextBlockProps
>`
  ${typographyMixin}
`;
