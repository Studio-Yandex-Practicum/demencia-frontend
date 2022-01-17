import React from "react";
import styled from "styled-components";
import { Link, Menu, MenuItem } from "../../../../ui/controls";
import { Text3 } from "../../../../ui/controls/typography";
import { ScreenSize } from "../../../../ui/types";

const StyledText = styled(Text3)`
  @media (max-width: ${ScreenSize.Medium}px) {
    font-size: 16px;
  }
`;

const NavMenu: React.FC = () => {
  return (
    <Menu vertical={true} gap={16} gapSmallScreen={12}>
      <MenuItem>
        <Link to="#">
          <StyledText>тест на деменцию</StyledText>
        </Link>
      </MenuItem>
      <MenuItem>
        <Link to="#">
          <StyledText>центры профилактики</StyledText>
        </Link>
      </MenuItem>
      <MenuItem>
        <Link to="/details">
          <StyledText>подробнее о деменции</StyledText>
        </Link>
      </MenuItem>
    </Menu>
  );
};

export default NavMenu;
