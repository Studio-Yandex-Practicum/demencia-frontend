import React, { ReactNode } from "react";
import styled, { css, DefaultTheme, ThemeProps } from "styled-components";
import { TextColor, TypographyLevel } from "../types";
import {
  colorChangeOnHoverMixIn,
  ColorChangeOnHoverProps,
  TextSizeAnimationProps,
  textUppercaseMixIn,
  TextUppercaseProps,
} from "./animation";
import { BoxProps, getBoxStyles } from "./box";

interface TextUnderlinedProps {
  underlined?: boolean;
}
export interface FontLevelProps {
  level?: TypographyLevel;
}

export interface FontColorProps {
  textColor?: TextColor;
}

export interface TextBlockProps
  extends BoxProps,
    FontLevelProps,
    FontColorProps,
    TextUppercaseProps,
    TextUnderlinedProps,
    ColorChangeOnHoverProps,
    TextSizeAnimationProps {
  children?: ReactNode;
}

export const getTextSelectedColor = (
  props: ThemeProps<DefaultTheme> & FontColorProps
) => {
  const type = props.textColor || TextColor.Primary;
  const { colors } = props.theme;

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

export const P = styled.p.attrs(
  (
    props: ThemeProps<DefaultTheme> &
      BoxProps &
      FontColorProps &
      TextUppercaseProps &
      TextUnderlinedProps &
      ColorChangeOnHoverProps &
      TextSizeAnimationProps
  ) => ({
    level: TypographyLevel.Text1,
    ...props,
  })
)`
  ${typographyMixin}
`;

export const Span = styled.span.attrs(
  (
    props: ThemeProps<DefaultTheme> &
      BoxProps &
      FontColorProps &
      TextUppercaseProps &
      TextUnderlinedProps &
      ColorChangeOnHoverProps
  ) => ({
    level: TypographyLevel.Text2,
    ...props,
  })
)`
  ${typographyMixin}
`;

export const H1 = styled.h1.attrs(
  (
    props: ThemeProps<DefaultTheme> &
      BoxProps &
      FontColorProps &
      TextUppercaseProps &
      TextUnderlinedProps &
      ColorChangeOnHoverProps
  ) => ({
    level: TypographyLevel.MainTitle,
    ...props,
  })
)`
  ${typographyMixin}
`;

export const H2 = styled.h2.attrs(
  (
    props: ThemeProps<DefaultTheme> &
      BoxProps &
      FontColorProps &
      TextUppercaseProps &
      TextUnderlinedProps &
      ColorChangeOnHoverProps
  ) => ({
    level: TypographyLevel.Title,
    ...props,
  })
)`
  ${typographyMixin}
`;

export const H3 = styled.h3.attrs(
  (
    props: ThemeProps<DefaultTheme> &
      BoxProps &
      FontColorProps &
      TextUppercaseProps &
      TextUnderlinedProps &
      ColorChangeOnHoverProps
  ) => ({
    level: TypographyLevel.Subtitle1,
    ...props,
  })
)`
  ${typographyMixin}
`;

export const H4 = styled.h4.attrs(
  (
    props: ThemeProps<DefaultTheme> &
      BoxProps &
      FontColorProps &
      TextUppercaseProps &
      TextUnderlinedProps &
      ColorChangeOnHoverProps
  ) => ({
    level: TypographyLevel.Subtitle2,
    ...props,
  })
)`
  ${typographyMixin}
`;

export const H5 = styled.h5.attrs(
  (
    props: ThemeProps<DefaultTheme> &
      BoxProps &
      FontColorProps &
      TextUppercaseProps &
      TextUnderlinedProps &
      ColorChangeOnHoverProps
  ) => ({
    level: TypographyLevel.Subtitle3,
    ...props,
  })
)`
  ${typographyMixin}
`;

export const H6 = styled.h6.attrs(
  (
    props: ThemeProps<DefaultTheme> &
      BoxProps &
      FontColorProps &
      TextUppercaseProps &
      TextUnderlinedProps &
      ColorChangeOnHoverProps
  ) => ({
    level: TypographyLevel.Subtitle4,
    ...props,
  })
)`
  ${typographyMixin}
`;

export const TextBlock: React.FC<TextBlockProps> = (props) => {
  return <P {...props}>{props.children}</P>;
};

export const MainTitle: React.FC<TextBlockProps> = (props) => {
  const { children, ...rest } = {
    textColor: TextColor.Accent1, // default values
    onHoverColor: TextColor.Accent2,
    ...props,
  };

  return (
    <H1 uppercase level={TypographyLevel.MainTitle} {...rest}>
      {children}
    </H1>
  );
};

export const Title: React.FC<TextBlockProps> = (props) => {
  const { children, ...rest } = {
    textColor: TextColor.Accent2,
    onHoverColor: TextColor.Accent1,
    ...props,
  };
  return (
    <TextBlock uppercase level={TypographyLevel.Title} {...rest}>
      {children}
    </TextBlock>
  );
};

export const Subtitle1: React.FC<TextBlockProps> = (props) => {
  const { children, ...rest } = {
    textColor: TextColor.Accent1,
    onHoverColor: TextColor.Accent2,
    ...props,
  };
  return (
    <H3 uppercase level={TypographyLevel.Subtitle1} {...rest}>
      {children}
    </H3>
  );
};

export const Subtitle2: React.FC<TextBlockProps> = (props) => {
  const { children, ...rest } = {
    textColor: TextColor.Accent1,
    onHoverColor: TextColor.Accent2,
    ...props,
  };
  return (
    <H4 uppercase level={TypographyLevel.Subtitle2} {...rest}>
      {children}
    </H4>
  );
};

export const Subtitle3: React.FC<TextBlockProps> = (props) => {
  const { children, ...rest } = { textColor: TextColor.Shadow, ...props };
  return (
    <H5 uppercase level={TypographyLevel.Subtitle3} {...rest}>
      {children}
    </H5>
  );
};

export const Subtitle4: React.FC<TextBlockProps> = (props) => {
  const { children, ...rest } = props;
  return (
    <H6 uppercase level={TypographyLevel.Subtitle4} {...rest}>
      {children}
    </H6>
  );
};

export const Text1: React.FC<TextBlockProps> = (props) => {
  const { children, ...rest } = props;
  return (
    <P level={TypographyLevel.Text1} {...rest}>
      {children}
    </P>
  );
};

export const Text2: React.FC<TextBlockProps> = (props) => {
  const { children, ...rest } = props;
  return (
    <P level={TypographyLevel.Text2} {...rest}>
      {children}
    </P>
  );
};

export const Text3: React.FC<TextBlockProps> = (props) => {
  const { children, ...rest } = props;
  return (
    <P level={TypographyLevel.Text3} textColor={TextColor.Shadow} {...rest}>
      {children}
    </P>
  );
};

export const Text4: React.FC<TextBlockProps> = (props) => {
  const { children, ...rest } = props;
  return (
    <P level={TypographyLevel.Text4} {...rest}>
      {children}
    </P>
  );
};
