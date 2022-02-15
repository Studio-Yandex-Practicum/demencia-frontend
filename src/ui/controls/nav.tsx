import styled from "styled-components";
import { ScreenSize } from "../types";
import { zoomOnHoverMixIn, ElementAnimationProps } from "./animation";

export interface MenuProps {
  vertical?: boolean;
  gap?: number;
  gapSmallScreen?: number;
}

enum MenuGap {
  Large = 30,
  Small = 25,
}
// todo: move margins and screen sizes to enum
export const MenuItem = styled.li<ElementAnimationProps>`
  ${zoomOnHoverMixIn}
`;

export const Menu = styled.ul<MenuProps>`
  margin: 0;
  padding: 0;
  display: flex;
  ${(p) => (!p.vertical ? "" : "flex-direction:column;")}
  list-style: none;
  gap: ${(p) => p.gap || MenuGap.Large}px;

  @media screen and (max-width: ${ScreenSize.Large}px) {
    gap: ${(p) => p.gapSmallScreen || MenuGap.Small}px;
  }
`;

export const Nav = styled.nav`
  @media screen and (max-width: ${ScreenSize.Large}px) {
    display: none;
  }
`;
