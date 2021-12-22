import React, { ReactNode } from "react";
import styled, { css, DefaultTheme } from "styled-components";
import { ColorType, TypographyLevel } from "../types";
import { BoxProps, getBoxStyles } from "./box";
import { ThemeProps } from "./layout";

interface TextProps extends BoxProps {
  readonly level?: TypographyLevel;
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

interface FontLevelProps extends ThemeProps {
  readonly level?: TypographyLevel;
}

interface FontColorProps extends ThemeProps {
  readonly type?: ColorType;
}

export const typographySizeMixIn = (props: FontLevelProps): string => {
  const { typography } = props.theme;
  const selectedSize = typography[props.level || TypographyLevel.Body1];
  return `
        font-weight: ${selectedSize.fontWeight};
        font-size: ${selectedSize.fontSize}px;
        line-height: ${selectedSize.lineHeight};
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

      case ColorType.Caption: {
        return colors.shadow;
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
      return (
        <P level={props.level || TypographyLevel.Body1}>{props.children}</P>
      );
    }
    case "h1":
      return (
        <H1 level={props.level || TypographyLevel.Headline} type={props.type}>
          {props.children}
        </H1>
      );
    case "h2":
      return (
        <H2 level={props.level || TypographyLevel.Title} type={props.type}>
          {props.children}
        </H2>
      );
    case "h3":
      return (
        <H3
          level={props.level || TypographyLevel.Subheading2}
          type={props.type}
        >
          {props.children}
        </H3>
      );
    case "h4":
      return (
        <H4
          level={props.level || TypographyLevel.Subheading1}
          type={props.type}
        >
          {props.children}
        </H4>
      );
    case "h5":
      return (
        <H5 level={props.level || TypographyLevel.Body2} type={props.type}>
          {props.children}
        </H5>
      );
    case "h6":
      return (
        <H6 level={props.level || TypographyLevel.Body2} type={props.type}>
          {props.children}
        </H6>
      );
    case "span": {
      return (
        <Span level={props.level || TypographyLevel.Caption} type={props.type}>
          {props.children}
        </Span>
      );
    }
    default: {
      return (
        <P level={props.level || TypographyLevel.Body1} type={props.type}>
          {props.children}
        </P>
      );
    }
  }
};

export const MainTitle: React.FunctionComponent = (props) => {
  return (
    <H1
      level={TypographyLevel.Headline}
      type={ColorType.Accent}
      uppercase={true}
    >
      {props.children}
    </H1>
  );
};

export const PrimaryTitle: React.FunctionComponent = (props) => {
  return (
    <H2 level={TypographyLevel.Title} type={ColorType.Accent} uppercase={true}>
      {props.children}
    </H2>
  );
};

export const SecondaryTitle: React.FunctionComponent = (props) => {
  return (
    <H3
      level={TypographyLevel.Subheading2}
      type={ColorType.Accent}
      uppercase={true}
    >
      {props.children}
    </H3>
  );
};

export const Subtitle: React.FunctionComponent = (props) => {
  return (
    <P level={TypographyLevel.Body2} type={ColorType.Caption} uppercase={true}>
      {props.children}
    </P>
  );
};

export const Subtitle1: React.FC = (props) => {
  return (
    <H4 uppercase level={TypographyLevel.Subheading1} type={ColorType.Primary}>
      {props.children}
    </H4>
  );
};

export const Title2: React.FC = (props) => {
  return (
    <P uppercase level={TypographyLevel.Title2} type={ColorType.Accent}>
      {props.children}
    </P>
  );
};
