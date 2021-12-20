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
  padding: 0;
  margin: 30px 50px 0 0;
  gap: 28px;

  @media screen and (max-width: ${ScreenSize.Small}px) {
    display: none;
    margin: 20px 20px 0 0;
    gap: 18px;
  }
`;

export const Menu = styled.nav``;
