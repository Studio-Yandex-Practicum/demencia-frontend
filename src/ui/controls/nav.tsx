import styled from "styled-components";
import { ScreenSize } from "../types";

export interface MenuProps {
  vertical?: boolean;
  gap?: number;
  gapSmallScreen?: number;
}

enum MenuGap {
  L = 28,
  Sm = 18,
}
// todo: move margins and screen sizes to enum
export const MenuItem = styled.li``;

export const MenuItems = styled.ul<MenuProps>`
  margin: 0;
  padding: 0;
  display: flex;
  ${(p) => (!p.vertical ? "" : "flex-direction:column;")}
  list-style: none;
  gap: ${(p) => p.gap || MenuGap.L}px;

  @media screen and (max-width: ${ScreenSize.Small}px) {
    display: none;
    gap: ${(p) => p.gapSmallScreen || MenuGap.Sm}px;
  }
`;

export const Menu = styled.nav``;
