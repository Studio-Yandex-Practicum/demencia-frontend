import React from "react";
import { Link, Menu, MenuItem } from "../../../../ui/controls";
import { Text3, Text2 } from "../../../../ui/controls/typography";

const NavMenu: React.FC = () => {
  return (
    <Menu vertical={true} gap={16}>
      <MenuItem>
        <Link to="#">
          <Text3>тест на деменцию</Text3>
        </Link>
      </MenuItem>
      <MenuItem>
        <Link to="#">
          <Text3>центры профилактики</Text3>
        </Link>
      </MenuItem>
      <MenuItem>
        <Link to="/details">
          <Text3>подробнее о деменции</Text3>
        </Link>
      </MenuItem>
    </Menu>
  );
};

export default NavMenu;
