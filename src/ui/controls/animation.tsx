import styled, { keyframes, DefaultTheme, ThemeProps } from "styled-components";
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
  rotate180OnHoverMixIn?: boolean;
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

const tumbleRotation = (direction: boolean) => keyframes`
      0% {
          transform: rotate(0deg);
      }
      25% {
          transform: rotate(${!direction ? "-" : ""}9deg);
      }
    
      50% {
        transform: rotate(0deg);
      }
    
      75% {
        transform: rotate(${!direction ? "" : "-"}9deg);
      }
    
      100% {
        transform: rotate(0deg);
      }
`;

const translate = keyframes`
    0% {
        transform: translate(50%, 150%);
    }
    100% {
        transform: translate(0px, 0px);
    }`;

export { rotation, translate, tumbleRotation };

export const Rotate = styled.div<{ speed: AnimationSpeed }>`
  display: inline-block;
  animation: ${rotation} ${(p) => p.speed}s linear infinite;
`;

export const Tumble = styled.div<{ speed: AnimationSpeed }>`
  display: inline-block;
  animation: ${tumbleRotation(true)} ${(p) => p.speed}s linear infinite;
`;

export const TumbleBackward = styled.div<{ speed: AnimationSpeed }>`
  display: inline-block;
  animation: ${tumbleRotation(false)} ${(p) => p.speed}s linear infinite;
`;

export const rotate180OnHoverMixIn = (props: {
  rotate180OnHover?: boolean;
}): string => {
  if (!props.rotate180OnHover) {
    return "";
  }

  return `
  transform: rotate(0deg);
  ${buildTransitionFast("all")}

  &:hover {
    transform: rotate(180deg);
  }
`;
};

export const Rotate180OnHover = styled.div`
  display: inline-block;
  ${rotate180OnHoverMixIn({ rotate180OnHover: true })}
`;
