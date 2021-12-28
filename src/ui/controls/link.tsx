import { Link as RouterLink } from "react-router-dom";
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

export const Link = styled(RouterLink).attrs(
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
`;
