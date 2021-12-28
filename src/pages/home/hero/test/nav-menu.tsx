import React from "react";
import { Link, Menu, MenuItem, MenuItems } from "../../../../ui/controls";
import { Text3 } from "../../../../ui/controls/typography";

const NavMenu: React.FC = () => {
  return (
    <Menu>
      <MenuItems vertical={true}>
        <MenuItem>
          <Link>
            <Text3>тест на деменцию</Text3>
          </Link>
        </MenuItem>
        <MenuItem>
          <Link>
            <Text3>центры профилактики</Text3>
          </Link>
        </MenuItem>
        <MenuItem>
          <Link>
            <Text3>подробнее о деменции</Text3>
          </Link>
        </MenuItem>
      </MenuItems>
    </Menu>
  );
};

export default NavMenu;
