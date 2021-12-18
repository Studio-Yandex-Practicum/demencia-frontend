import React from "react";
import styled, { css, DefaultTheme } from "styled-components";
import { FontSize, PaletteColor, TextColorType } from "../types";

interface TextProps {
  readonly size?: FontSize;
  readonly type?: TextColorType;
}

interface TextBlockProps extends TextProps {
  renderTag?: string;
  className?: string;
  children?: any;
}

interface FontSizeProps {
  readonly theme: DefaultTheme;
  readonly size?: FontSize;
}

interface FontColorProps {
  readonly theme: DefaultTheme;
  readonly type?: TextColorType;
}

export const typographySizeMixIn = (props: FontSizeProps) => {
  const { typography } = props.theme; //getTheme(props);
  const selectedSize = typography[props.size || FontSize.Default];
  return `
        font-weight: ${selectedSize.fontWeight};
        font-size: ${selectedSize.fontSize}px;
        line-height: ${selectedSize.lineHeight}em;
        letter-spacing: ${selectedSize.letterSpacing}em;
    `;
};

export const typographyColorMixIn = (props: FontColorProps) => {
  const selectedColor = () => {
    const { colors } = props.theme;
    const type = props.type || TextColorType.Primary;
    switch (type) {
      case TextColorType.Primary: {
        return colors.textPrimary;
      }
      case TextColorType.Secondary: {
        return colors.textSecondary;
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

export const typographyMixin = css`
  margin: 0;
  padding: 0;
  border: 0;
  vertical-align: baseline;
  font-family: "Ubuntu", Arial, sans-serif;
  word-break: break-word;
  ${typographySizeMixIn};
  ${typographyColorMixIn}
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

export const TextBlock: React.FunctionComponent<TextBlockProps> = (props) => {
  switch (props.renderTag) {
    case "p": {
      return <P size={props.size || FontSize.Default}>{props.children}</P>;
    }
    case "h1":
      return <H1 size={props.size}>{props.children}</H1>;
    case "h2":
      return <H2 size={props.size}>{props.children}</H2>;
    case "h3":
      return <H3 size={props.size}>{props.children}</H3>;
    case "h4":
      return <H4 size={props.size}>{props.children}</H4>;
    case "h5":
      return <H5 size={props.size}>{props.children}</H5>;
    case "h6":
      return <H6 size={props.size}>{props.children}</H6>;
    case "span": {
      return <Span size={props.size}>{props.children}</Span>;
    }
    default: {
      return <P size={props.size}>{props.children}</P>;
    }
  }
};
