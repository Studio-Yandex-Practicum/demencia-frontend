import styled, {
  keyframes,
  DefaultTheme,
  ThemeProps,
  css,
} from "styled-components";
import { AnimationSpeed, TypographyLevel } from "../types";
import { FontLevelProps } from "./typography";
import { buildTransitionFast } from "./mixins";

const zoomScale = 1.1;
const zoomOutScale = 0.9;
export interface TextSizeAnimationProps {
  zoomTextOnHover?: boolean;
}

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

export interface ElementAnimationProps {
  zoomOnHover?: boolean;
  zoomOutOnHover?: boolean;
}

export const zoomOnHoverMixIn = (props: ElementAnimationProps): string => {
  if (!props.zoomOnHover) {
    return "";
  }

  return `
  ${buildTransitionFast("all")}

  &:hover {
    transform: scale(${zoomScale});
  }
`;
};

export const zoomOutOnHoverMixIn = (props: ElementAnimationProps): string => {
  if (!props.zoomOutOnHover) {
    return "";
  }

  return `
  transform: scale(${zoomScale});
  ${buildTransitionFast("all")}

  &:hover {
    transform: scale(${zoomOutScale});
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

const circleRotation = keyframes`
      0% {
          transform: rotate(0deg);
      }
      25% {
          transform: rotate(9deg);
      }
    
      50% {
        transform: rotate(0deg);
      }
    
      75% {
        transform: rotate(-9deg);
      }
    
      100% {
        transform: rotate(0deg);
      }
`;

export { rotation, translate, circleRotation };

const animationMixin = css<{ speed: AnimationSpeed }>`
  animation: ${rotation} ${(p) => p.speed}s linear infinite;
`;
export const Rotate = styled.div<{ speed: AnimationSpeed }>`
  display: inline-block;
  ${animationMixin}
`;
