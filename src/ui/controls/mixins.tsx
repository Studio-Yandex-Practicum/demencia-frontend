import { DefaultTheme, ThemeProps } from "styled-components";
import { PaletteColor, TextColor } from "../types";

export const buildTransitionFast = (ccsPropName: string): string => {
  return `
    transition: ${ccsPropName} 0.5s ease;`;
};

export const buildTransitionSimple = (ccsPropName: string): string => {
  return `
    transition: ${ccsPropName} 1s ease;`;
};

export interface TextUppercaseProps {
  uppercase?: boolean;
}

export const textUppercaseMixIn = (props: TextUppercaseProps): string => {
  if (!props.uppercase) {
    return "";
  }

  return `
    text-transform: uppercase;
  `;
};

export interface FontColorProps {
  textColor?: TextColor;
}

export const getTextSelectedColor = (
  props: ThemeProps<DefaultTheme> & FontColorProps
): PaletteColor | null => {
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

export interface ColorChangeOnHoverProps {
  hoverColor?: TextColor;
}

export const colorChangeOnHoverMixIn = (
  props: ColorChangeOnHoverProps & ThemeProps<DefaultTheme>
): string => {
  if (!props.hoverColor) {
    return "";
  }

  const colorToApply = getTextSelectedColor({
    ...props,
    textColor: props.hoverColor, // important order, props may already contain textColor
  });
  return `
    &:hover {
      color: ${colorToApply};
      ${buildTransitionFast("color")}
    }
  `;
};
