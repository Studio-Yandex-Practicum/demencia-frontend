import styled, { css } from "styled-components";

// todo: move margins and screen sizes to enum
export const MenuItem = styled.li`
  margin-left: 28px;

  @media screen and (max-width: 1400px) {
    margin-left: 18px;
  }

  @media (min-width: 768px) and (max-width: 900px) {
    margin-left: 0px;
  }
`;

export const MenuItems = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
  margin: 30px 50px 0 0;

  @media screen and (max-width: 767px) {
    display: none;
    margin: 20px 20px 0 0;
  }
`;

export const Menu = styled.nav``;
