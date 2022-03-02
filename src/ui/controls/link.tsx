import { Link as RouterLink, LinkProps } from "react-router-dom";
import styled, { css, DefaultTheme, ThemeProps } from "styled-components";
import {
  TextUppercaseProps,
  textUppercaseMixIn,
  FontColorProps,
} from "./mixins";
import { cursorMixin } from "./cursor";
import {
  borderBottomOnHoverMixIn,
  BorderBottomOnHoverProps,
  TextSizeAnimationProps,
  zoomTextOnHoverMixIn,
} from "./animation";
import {
  FontLevelProps,
  typographyColorMixIn,
  typographySizeMixIn,
} from "./typography";
import { TypographyLevel } from "../types";
import * as React from "react";
import { BoxStyleProps } from "./box";

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
  text-decoration: none;
  ${typographySizeMixIn};
  ${textUppercaseMixIn};
  ${typographyColorMixIn};
  ${cursorMixin};
  ${borderBottomOnHoverMixIn}
  ${zoomTextOnHoverMixIn}
`;

export const Link = styled(
  ({
    uppercase,
    zoomTextOnHover,
    borderBottomOnHover,
    borderSize,
    borderColor,
    level,
    to,
    children,
    ...rest
  }: ThemeProps<DefaultTheme> &
    FontLevelProps &
    FontColorProps &
    TextSizeAnimationProps &
    TextUppercaseProps &
    BorderBottomOnHoverProps &
    LinkProps &
    BoxStyleProps &
    React.RefAttributes<HTMLAnchorElement>) => {
    if (/(http(s?)):\/\//i.test(to.toString())) {
      return (
        <a href={to.toString()} target="_blank" {...rest}>
          {children}
        </a>
      );
    } else if (/.*\/#/i.test(to.toString())) {
      return (
        <a href={to.toString()} {...rest}>
          {children}
        </a>
      );
    } else {
      return (
        <RouterLink to={to} {...rest}>
          {children}
        </RouterLink>
      );
    }
  }
).attrs(
  (
    props: ThemeProps<DefaultTheme> &
      FontLevelProps &
      FontColorProps &
      TextSizeAnimationProps &
      TextUppercaseProps &
      BorderBottomOnHoverProps
  ) => ({
    uppercase: true,
    zoomTextOnHover: true,
    borderBottomOnHover: true,
    borderSize: props.theme.layout.borderSize,
    borderColor: props.theme.colors.backgroundAlt1,
    level: TypographyLevel.Subtitle3,
    ...props,
  })
)`
  ${linkMixin}
  height: ${(p) => (p.height !== undefined ? `${p.height}` : undefined)};
`;
