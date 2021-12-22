import React, { ReactNode } from "react";
import styled, { css } from "styled-components";
import { TextColor, TypographyLevel } from "../types";
import { BoxProps, getBoxStyles } from "./box";
import { ThemeProps } from "./layout";

interface TextProps extends BoxProps {
  level?: TypographyLevel;
  textColor?: TextColor;
  uppercase?: boolean;
  underlined?: boolean;
}

export interface TextBlockProps extends TextProps {
  renderTag?: string;
  className?: string;
  children?: ReactNode;
  textColor?: TextColor;
}

interface FontLevelProps extends ThemeProps {
  level?: TypographyLevel;
}

interface FontColorProps extends ThemeProps {
  textColor?: TextColor;
}

export const typographySizeMixIn = (props: FontLevelProps): string => {
  const { typography } = props.theme;
  const selectedSize = typography[props.level || TypographyLevel.Text1];
  return `
        font-weight: ${selectedSize.fontWeight};
        font-size: ${selectedSize.fontSize}px;
        line-height: ${selectedSize.lineHeight};
    `;
};

export const typographyColorMixIn = (props: FontColorProps): string => {
  const selectedColor = () => {
    const { colors } = props.theme;
    const type = props.textColor || TextColor.Primary;
    switch (type) {
      case TextColor.Primary: {
        return colors.textPrimary;
      }

      case TextColor.Secondary: {
        return colors.textSecondary;
      }

      case TextColor.Accent1: {
        return colors.textAccent1;
      }

      case TextColor.Accent2: {
        return colors.textAccent2;
      }

      case TextColor.Shadow: {
        return colors.textShadow;
      }

      default: {
        return null;
      }
    }
  };

  const colorToApply = selectedColor();
  if (!colorToApply) {
    return "";
  }

  return `color: ${colorToApply}; fill: ${colorToApply}`;
};

export const textAnimationMixIn = (): string => {
  return "";
};

export const typographyMixin = css<TextProps>`
  margin: 0;
  padding: 0;
  border: 0;
  vertical-align: baseline;
  font-family: ${(props) => props.theme.layout.fontFamily};
  word-break: break-word;
  ${typographySizeMixIn};
  ${typographyColorMixIn};
  ${textAnimationMixIn};
  ${getBoxStyles};
  ${(props) => (!props.uppercase ? "" : "text-transform: uppercase;")}
  ${(props) => (!props.underlined ? "" : "text-decoration-line: underline;")}
`;

export const P = styled.p<TextProps>`
  ${typographyMixin}
`;

export const Span = styled.span<TextProps>`
  ${typographyMixin}
`;

export const H1 = styled.h1<TextProps>`
  ${typographyMixin}
`;

export const H2 = styled.h2<TextProps>`
  ${typographyMixin}
`;

export const H3 = styled.h3<TextProps>`
  ${typographyMixin}
`;

export const H4 = styled.h4<TextProps>`
  ${typographyMixin}
`;

export const H5 = styled.h5<TextProps>`
  ${typographyMixin}
`;

export const H6 = styled.h6<TextProps>`
  ${typographyMixin}
`;

export const TextBlock: React.FC<TextBlockProps> = (props) => {
  //props = { pb: 1, ...props }; // set default margin below
  const { renderTag, children, ...rest } = props;
  switch (renderTag) {
    case "p": {
      return <P {...rest}>{children}</P>;
    }
    case "h1":
      return <H1 {...rest}>{children}</H1>;
    case "h2":
      return <H2 {...rest}>{children}</H2>;
    case "h3":
      return <H3 {...rest}>{children} </H3>;
    case "h4":
      return <H4 {...rest}>{children}</H4>;
    case "h5":
      return <H5 {...rest}>{children}</H5>;
    case "h6":
      return <H6 {...rest}>{children}</H6>;
    case "span": {
      return <Span {...rest}>{children}</Span>;
    }
    default: {
      return <Span {...rest}>{children}</Span>;
    }
  }
};
