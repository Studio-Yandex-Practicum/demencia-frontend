import React from "react";
import { Link, Menu, MenuItem, MenuItems } from "../../../../ui/controls";
import { TypographyLevel } from "../../../../ui/types";

const NavMenu: React.FC = () => {
  return (
    <Menu>
      <MenuItems vertical={true}>
        <MenuItem>
          <Link level={TypographyLevel.Text4}>О деменции</Link>
        </MenuItem>
        <MenuItem>
          <Link level={TypographyLevel.Text4}>Партнеры</Link>
        </MenuItem>
        <MenuItem>
          <Link level={TypographyLevel.Text4}>Новости</Link>
        </MenuItem>
        <MenuItem>
          <Link level={TypographyLevel.Text4}>О фонде</Link>
        </MenuItem>
        <MenuItem>
          <Link level={TypographyLevel.Text4}>Контакты</Link>
        </MenuItem>
      </MenuItems>
    </Menu>
  );
};

export default NavMenu;
