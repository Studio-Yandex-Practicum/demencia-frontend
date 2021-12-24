import { keyframes, css, DefaultTheme, ThemeProps } from "styled-components";
import { TextColor, TypographyLevel } from "../types";
import { FontLevelProps, getTextSelectedColor } from "./typography";

const zoomScale = 1.1;

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

export interface TextSizeAnimationProps {
  zoomTextOnHover?: boolean;
}

const buildTransitionFast = (ccsPropName: string): string => {
  return `
  transition: ${ccsPropName} 0.5s ease;`;
};

export const zoomTextOnHoverMixIn = (
  props: ThemeProps<DefaultTheme> & TextSizeAnimationProps & FontLevelProps
): string => {
  const level = props.level || TypographyLevel.Text1;
  if (!props.zoomTextOnHover || !props.level) {
    return "";
  }

  const fontSize = props.theme.typography[level].fontSize;

  return `
  font-size: ${fontSize}px;
  ${buildTransitionFast("font-size")}

  &:hover {
    font-size: ${Math.floor(fontSize * zoomScale)}px;
  }
`;
};

export interface BorderBottomOnHoverProps {
  borderBottomOnHover?: boolean;
  borderSize?: number; // todo
  borderColor?: string;
}

export const borderBottomOnHoverMixIn = (
  props: BorderBottomOnHoverProps
): string => {
  if (!props.borderBottomOnHover || !props.borderSize || !props.borderColor) {
    return "";
  }

  return `
  transition: border-bottom 0.5s cubic-bezier(0.2, -2, 0.8, 2);

  &:hover {
    border-bottom: ${props.borderSize}px solid ${props.borderColor};
  }
`;
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

// todo: below animations:
const rotation = keyframes`
0% {
    transform: rotate(0deg);
}
100% {
    transform: rotate(360deg);
}`;

const translate = keyframes`
    0% {
        transform: translate(50%, 150%);
    }
    100% {
        transform: translate(0px, 0px);
    }`;

const zoomHoverElementMixIn = css`
  transform: scale(${zoomScale});
`;

export { rotation, translate, zoomHoverElementMixIn };
