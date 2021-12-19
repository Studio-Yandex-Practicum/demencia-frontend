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

const VerticalMenuItems = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  margin: 0;
  padding: 0;
  row-gap: 25px;
`;

interface MenuProps {
  vertical?: true;
  onClick?: () => void;
}

const Menu: React.FC<MenuProps> = ({ vertical, onClick }) => {
  const menu = (
    <>
      <MenuItem linkText="О ДЕМЕНЦИИ" linkTo="/#info" onClick={onClick} />
      <MenuItem linkText="ПАРТНЕРЫ" linkTo="/#sponsors" onClick={onClick} />
      <MenuItem linkText="НОВОСТИ" linkTo="/news-grid" onClick={onClick} />
      <MenuItem linkText="О ФОНДЕ" linkTo="/#about" onClick={onClick} />
      <MenuItem linkText="КОНТАКТЫ" linkTo="#" onClick={onClick} />
    </>
  );

  return (
    <nav>
      {vertical ? (
        <VerticalMenuItems>{menu}</VerticalMenuItems>
      ) : (
        <MenuItems>{menu}</MenuItems>
      )}
    </nav>
  );
};

export default Menu;
