import React from "react";
import { Link, Menu, MenuItem, MenuItems } from "../../../../ui/controls";
import { TypographyLevel } from "../../../../ui/types";

const NavMenu: React.FC = () => {
  return (
    <Menu>
      <MenuItems vertical={true}>
        <MenuItem>
          <Link level={TypographyLevel.Text4}>тест на деменцию</Link>
        </MenuItem>
        <MenuItem>
          <Link level={TypographyLevel.Text4}>центры профилактики</Link>
        </MenuItem>
        <MenuItem>
          <Link level={TypographyLevel.Text4}>подробнее о деменции</Link>
        </MenuItem>
      </MenuItems>
    </Menu>
  );
};

export default NavMenu;
