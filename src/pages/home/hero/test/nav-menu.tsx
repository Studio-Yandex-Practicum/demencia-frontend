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
const StyledMenu = styled(Menu)`
  position: relative;
  z-index: 400;
  top: 0;
  left: 0;
  @media (max-width: ${ScreenSize.Medium}px) {
    top: -30px;
  }
`;

const NavMenu: React.FC = () => {
  return (
    <StyledMenu vertical={true} gap={16} gapSmallScreen={12}>
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
    </StyledMenu>
  );
};

export default NavMenu;
