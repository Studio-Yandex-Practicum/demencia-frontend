import React from "react";
import styled from "styled-components";
import MenuItem from "./menu-item";

const MenuItems = styled.ul`
  display: flex;
  list-style: none;
  margin: 22px 23px 0 0;
  padding: 0;
  column-gap: 32px;

  @media screen and (max-width: 1290px) {
    display: none;
  }
`;

const Menu: React.FC = () => {
  return (
    <nav>
      <MenuItems>
        <MenuItem linkText="О ДЕМЕНЦИИ" linkTo="/#info" />
        <MenuItem linkText="ПАРТНЕРЫ" linkTo="/#sponsors" />
        <MenuItem linkText="НОВОСТИ" linkTo="/news-grid" />
        <MenuItem linkText="О ФОНДЕ" linkTo="/#about" />
        <MenuItem linkText="КОНТАКТЫ" linkTo="#" />
      </MenuItems>
    </nav>
  );
};

export default Menu;
