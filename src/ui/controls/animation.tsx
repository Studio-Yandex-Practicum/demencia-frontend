import { keyframes, css } from "styled-components";
import { FontStyle } from "../types/font-style";
import { P } from "./typography";

const zoomScale = 1.1;

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

const zoomHoverTextMixIn = css<FontStyle>`
  font-size: ${(p) => Math.floor(p.fontSize * zoomScale)}px;
`;

const zoomHoverElementMixIn = css`
  transform: scale(${zoomScale});
`;

const colorChangeHoverPrimaryMixIn = css`
  color: ${(p) => p.theme.colors.secondary};
  transition: color 0.5s ease 0s;
`;

const colorChangeHoverSecondaryMixIn = css`
  color: ${(p) => p.theme.colors.secondary};
  transition: color 0.5s ease 0s;
`;

interface AppearProps {
  speed: number;
}

const appearCompleteMixIn = css`
  transform: translate(0px, 0px);
  opacity: 1;
`;

const appearBottomInitialMixIn = css`
  transform: translate(0px, 120%);
  opacity: 0;
`;

const appearLeftInitialMixIn = css`
  transform: transform: translate(-80%, 0px);
  opacity: 0;
`;

const appearRightInitialMixIn = css`
    transform: translate(50%, 0%)
    opacity: 0;
`;

const appearSpeedMixin = css<AppearProps>`
  transition: all ${(p) => p.speed}s ease;
`;

export { rotation, translate, zoomHoverElementMixIn };
