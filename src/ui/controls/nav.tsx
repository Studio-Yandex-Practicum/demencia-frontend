import styled, { css } from "styled-components";
import { ScreenSize } from "../types";

// todo: move margins and screen sizes to enum
export const MenuItem = styled.li`
  margin-left: 28px;

  @media screen and (max-width: ${ScreenSize.Large}px) {
    margin-left: 18px;
  }

  @media (min-width: ${ScreenSize.Small +
    1}px) and (max-width: ${ScreenSize.Medium}px) {
    margin-left: 0px;
  }
`;

export const MenuItems = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
  margin: 30px 50px 0 0;

  @media screen and (max-width: ${ScreenSize.Small}px) {
    display: none;
    margin: 20px 20px 0 0;
  }
`;

export const Menu = styled.nav``;
