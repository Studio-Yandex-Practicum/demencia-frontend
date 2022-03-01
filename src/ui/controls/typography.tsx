import styled, { css, DefaultTheme, ThemeProps } from "styled-components";
import { ScreenSize, TextColor, TypographyLevel } from "../types";
import {
  TextUppercaseProps,
  textUppercaseMixIn,
  FontColorProps,
  getTextSelectedColor,
  colorChangeOnHoverMixIn,
  ColorChangeOnHoverProps,
} from "./mixins";
import {
  borderBottomOnHoverMixIn,
  BorderBottomOnHoverProps,
  ElementAnimationProps,
  TextSizeAnimationProps,
  zoomOnHoverMixIn,
} from "./animation";
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
    TextSizeAnimationProps {
  maxWidth?: number;
  newsGrid?: boolean;
  animate?: boolean;
}

interface TextEllipsisProps {
  ellipsis?: boolean;
}

export const textEllipsisMixin = (prop: TextEllipsisProps): string => {
  if (!prop.ellipsis) {
    return "";
  }

  return `
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
};

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
    TextEllipsisProps &
    FontLevelProps &
    FontColorProps &
    TextUppercaseProps &
    TextUnderlinedProps &
    ColorChangeOnHoverProps & { maxWidth?: number }
>`
  margin: 0;
  padding: 0;
  border: 0;
  vertical-align: baseline;
  font-family: ${(props) => props.theme.layout.fontFamily};
  max-width: ${(p) =>
    p.maxWidth !== undefined ? `${p.maxWidth}px` : undefined};
  word-break: break-word;
  ${typographySizeMixIn};
  ${typographyColorMixIn};
  ${getBoxStyles};
  ${textUppercaseMixIn};
  ${textUnderlinedMixin};
  ${colorChangeOnHoverMixIn};
  ${textEllipsisMixin}
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
  ${typographyMixin};

  transition: all 1s ease;

  ${({ animate }) => {
    if (animate) {
      return `
        opacity: 0;
        transform: translateY(100px);
      `;
    }
  }}

  @media (max-width: ${ScreenSize.Medium}px) {
    font-size: 64px;
  }

  @media (max-width: ${ScreenSize.Small}px) {
    font-size: 56px;
  }

  @media (max-width: ${ScreenSize.XSmall}px) {
    font-size: 42px;
  }
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
  ${typographyMixin};

  @media (max-width: ${ScreenSize.Small}px) {
    font-size: 35px;
  }

  @media (max-width: ${ScreenSize.XSmall}px) {
    font-size: 30px;
  }
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
  ${typographyMixin};

  @media (max-width: ${ScreenSize.Medium}px) {
    font-size: 28px;
  }

  @media (max-width: ${ScreenSize.Small}px) {
    font-size: 24px;
  }

  @media (max-width: ${ScreenSize.XXSmall}px) {
    font-size: 16px;
  }
`;

export const Subtitle3 = styled.h5.attrs(
  (
    props: ThemeProps<DefaultTheme> & TextBlockProps & BorderBottomOnHoverProps
  ) => ({
    level: TypographyLevel.Subtitle3,
    uppercase: true,
    textColor: TextColor.Shadow,
    borderSize: props.theme.layout.borderSize,
    borderColor: props.theme.colors.backgroundAlt1,
    ...props,
  })
)`
  ${typographyMixin};
  ${borderBottomOnHoverMixIn}

  @media (max-width: ${ScreenSize.Small}px) {
    font-size: 19px;
  }

  @media (max-width: ${ScreenSize.XSmall}px) {
    font-size: 18px;
  }
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

export const Text1 = styled.div.attrs(
  (props: ThemeProps<DefaultTheme> & TextBlockProps) => ({
    level: TypographyLevel.Text1,
    ...props,
  })
)`
  ${typographyMixin};

  @media (max-width: ${ScreenSize.Small}px) {
    font-size: 18px;
  }

  @media (max-width: ${ScreenSize.XSmall}px) {
    font-size: 16px;
  }
`;

export const Text2 = styled.div.attrs(
  (props: ThemeProps<DefaultTheme> & TextBlockProps) => ({
    level: TypographyLevel.Text2,
    ...props,
  })
)`
  ${typographyMixin}
`;

export const Text3 = styled.div.attrs(
  (
    props: ThemeProps<DefaultTheme> & TextBlockProps & ElementAnimationProps
  ) => ({
    level: TypographyLevel.Text3,
    textColor: TextColor.Shadow,
    ...props,
  })
)`
  ${typographyMixin};
  ${zoomOnHoverMixIn};

  ${(p) =>
    p.newsGrid
      ? `
        display: -webkit-box;
        overflow: hidden;
        text-overflow: ellipsis;
        -webkit-line-clamp: 4;
        -webkit-box-orient: vertical;
      `
      : ""};

  @media (max-width: ${ScreenSize.Large}px) {
    line-height: 1.15;
  }

  @media (max-width: ${ScreenSize.Medium}px) {
    font-size: 16px;
  }

  @media (max-width: ${ScreenSize.Small}px) {
    font-size: 14px;
  }

  @media (max-width: ${ScreenSize.XSmall}px) {
    font-size: 12px;
  }
`;

export const Text4 = styled.div.attrs(
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
