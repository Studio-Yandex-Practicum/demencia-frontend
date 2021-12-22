import { keyframes, css, DefaultTheme, ThemeProps } from "styled-components";
import { TextColor } from "../types";
import { getTextSelectedColor } from "./typography";

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
  fontSize?: number;
}

const buildTransitionFast = (ccsPropName: string): string => {
  return `
  transition: ${ccsPropName} 0.5s ease;`;
};

export const zoomTextOnHoverMixIn = (props: TextSizeAnimationProps): string => {
  if (!props.zoomTextOnHover || !props.fontSize) {
    return "";
  }

  return `
  font-size: ${props.fontSize}px;
  ${buildTransitionFast("font-size")}

  &:hover {
    font-size: ${Math.floor(props.fontSize * zoomScale)}px;
  }
`;
};

export interface BorderBottomOnHoverProps {
  borderBottomOnHover?: boolean;
  borderSize?: number; // todo
  borderColor: string;
}

export const borderBottomOnHoverMixIn = (
  props: BorderBottomOnHoverProps
): string => {
  if (!props.borderBottomOnHover || !props.borderSize) {
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
  onHoverColor?: TextColor;
}

export const colorChangeOnHoverMixIn = (
  props: ColorChangeOnHoverProps & ThemeProps<DefaultTheme>
): string => {
  if (!props.onHoverColor) {
    return "";
  }

  const colorToApply = getTextSelectedColor({
    ...props,
    textColor: props.onHoverColor, // important order, props may already contain textColor
  });
  return `
  &:hover {
    color: ${colorToApply};
    ${buildTransitionFast("color")}
  }
`;
};

interface AppearAnimationProps {
  speed: number;
}

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

const opacityInvisible = `
  opacity: 0;
`;

const opacityFullVisible = `
  opacity: 1;
`;

const appearCompleteMixIn = css`
  transform: translate(0px, 0px);
  ${opacityFullVisible}
`;

const appearBottomInitialMixIn = css`
  transform: translate(0px, 120%);
  ${opacityInvisible}
`;

const appearLeftInitialMixIn = css`
  transform: transform: translate(-80%, 0px);
  ${opacityInvisible}
`;

const appearRightInitialMixIn = css`
  transform: translate(50%, 0%) ${opacityInvisible};
`;

const appearSpeedMixin = css<AppearAnimationProps>`
  transition: all ${(p) => p.speed}s ease;
`;

export { rotation, translate, zoomHoverElementMixIn };
