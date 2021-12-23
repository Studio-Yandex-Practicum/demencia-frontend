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
import {
  FontColorProps,
  FontLevelProps,
  typographyColorMixIn,
  typographySizeMixIn,
} from "./typography";
import { TextColor, TypographyLevel } from "../types";

const linkFontSize = 20; //todo: move to use typography
export interface LinkProps {
  level?: TypographyLevel;
  textColor?: TextColor;
  children?: ReactNode;
}

export const linkMixin = css<
  FontLevelProps &
    FontColorProps &
    TextSizeAnimationProps &
    TextUppercaseProps &
    BorderBottomOnHoverProps
>`
  margin: 0;
  padding: 0;
  border: 0;
  vertical-align: baseline;
  white-space: nowrap;
  text-decoration: none;
  ${typographySizeMixIn};
  ${textUppercaseMixIn};
  ${typographyColorMixIn};
  ${cursorMixin};
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
  const typographyLevel = props.level || TypographyLevel.Subtitle3;
  return <A level={typographyLevel}>{props.children}</A>;
};
