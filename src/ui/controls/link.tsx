import React, { ReactNode } from "react";
import styled, { css, DefaultTheme, ThemeProps } from "styled-components";
import { cursorMixin } from "./cursor";
import {
  borderBottomOnHoverMixIn,
  BorderBottomOnHoverProps,
  TextSizeAnimationProps,
  textUppercaseMixIn,
  TextUppercaseProps,
  zoomTextOnHoverMixIn,
} from "./animation";

const linkFontSize = 20; //todo: move to use typography
export interface LinkProps {
  children?: ReactNode;
}

export const linkMixin = css<
  TextSizeAnimationProps & TextUppercaseProps & BorderBottomOnHoverProps
>`
  margin: 0;
  padding: 0;
  border: 0;
  vertical-align: baseline;
  font-family: ${(p) =>
    p.theme.layout.fontFamily}; // todo: use typography mixin
  font-weight: ${(p) =>
    p.theme.typography.subtitle2.fontWeight}; // todo: use typography mixin
  line-height: ${(p) =>
    p.theme.typography.subtitle2.lineHeight}; // todo: use typography mixin
  white-space: nowrap;
  text-decoration: none;
  ${textUppercaseMixIn};
  ${cursorMixin};
  color: ${(p) => p.theme.colors.textPrimary};
  ${borderBottomOnHoverMixIn}
  ${zoomTextOnHoverMixIn}
`;

export const A = styled.a.attrs((props: ThemeProps<DefaultTheme>) => ({
  textUppercase: true,
  zoomTextOnHover: true,
  borderBottomOnHover: true,
  borderSize: props.theme.layout.borderSize,
  borderColor: props.theme.colors.textAccent1,
  fontSize: linkFontSize,
  ...props,
}))`
  ${linkMixin}
`;

export const Link: React.FC<LinkProps> = (props) => {
  return <A>{props.children}</A>;
};
