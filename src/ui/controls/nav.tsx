import styled, { css } from "styled-components";
import { ScreenSize } from "../types";

export interface MenuProps {
  vertical?: boolean;
}
// todo: move margins and screen sizes to enum
export const MenuItem = styled.li``;

export const MenuItems = styled.ul<MenuProps>`
  display: flex;
  ${(p) => (!p.vertical ? "" : "flex-direction:column;")}
  list-style: none;
  gap: 28px;

  @media screen and (max-width: ${ScreenSize.Small}px) {
    display: none;
    gap: 18px;
  }
`;

export const Menu = styled.nav``;
