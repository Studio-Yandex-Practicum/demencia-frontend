import React, { ReactNode } from "react";
import styled, { css, DefaultTheme } from "styled-components";
import { FontSize, ColorType } from "../types";
import { BoxProps, getBoxStyles } from "./box";
import { ThemeProps } from "./layout";

interface TextProps extends BoxProps {
  readonly size?: FontSize;
  readonly type?: ColorType;
  readonly uppercase?: boolean;
  readonly underlined?: boolean;
}

interface TextBlockProps extends TextProps {
  renderTag?: string;
  className?: string;
  children?: ReactNode;
  type?: ColorType;
}

interface FontSizeProps extends ThemeProps {
  readonly size?: FontSize;
}

interface FontColorProps extends ThemeProps {
  readonly type?: ColorType;
}

export const typographySizeMixIn = (props: FontSizeProps): string => {
  const { typography } = props.theme;
  const selectedSize = typography[props.size || FontSize.Default];
  return `
        font-weight: ${selectedSize.fontWeight};
        font-size: ${selectedSize.fontSize}px;
        line-height: ${selectedSize.lineHeight}em;
    `;
};

export const typographyColorMixIn = (props: FontColorProps): string => {
  const selectedColor = () => {
    const { colors } = props.theme;
    const type = props.type || ColorType.Default;
    switch (type) {
      case ColorType.Default: {
        return colors.textPrimary;
      }
      case ColorType.Primary: {
        return colors.textPrimary;
      }

      case ColorType.Secondary: {
        return colors.textSecondary;
      }
      case ColorType.Accent: {
        return colors.primary;
      }
      case ColorType.AccentAlt: {
        return colors.secondary;
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

export const TextBlock: React.FunctionComponent<TextBlockProps> = (props) => {
  props = { pb: 1, ...props }; // set default margin below
  switch (props.renderTag) {
    case "p": {
      return <P size={props.size || FontSize.Default}>{props.children}</P>;
    }
    case "h1":
      return (
        <H1 size={props.size} type={props.type}>
          {props.children}
        </H1>
      );
    case "h2":
      return (
        <H2 size={props.size} type={props.type}>
          {props.children}
        </H2>
      );
    case "h3":
      return (
        <H3 size={props.size} type={props.type}>
          {props.children}
        </H3>
      );
    case "h4":
      return (
        <H4 size={props.size} type={props.type}>
          {props.children}
        </H4>
      );
    case "h5":
      return (
        <H5 size={props.size} type={props.type}>
          {props.children}
        </H5>
      );
    case "h6":
      return (
        <H6 size={props.size} type={props.type}>
          {props.children}
        </H6>
      );
    case "span": {
      return (
        <Span size={props.size} type={props.type}>
          {props.children}
        </Span>
      );
    }
    default: {
      return (
        <P size={props.size} type={props.type}>
          {props.children}
        </P>
      );
    }
  }
};

export const MainTitle: React.FunctionComponent = (props) => {
  return (
    <H1 size={FontSize.Huge} type={ColorType.Accent} uppercase={true}>
      {props.children}
    </H1>
  );
};

export const PrimaryTitle: React.FunctionComponent = (props) => {
  return (
    <H2 size={FontSize.Large} type={ColorType.Accent} uppercase={true}>
      {props.children}
    </H2>
  );
};

export const SecondaryTitle: React.FunctionComponent = (props) => {
  return (
    <H3 size={FontSize.Medium} type={ColorType.Accent} uppercase={true}>
      {props.children}
    </H3>
  );
};

export const Subtitle: React.FunctionComponent = (props) => {
  return (
    <P size={FontSize.Default} type={ColorType.Primary} uppercase={true}>
      {props.children}
    </P>
  );
};
