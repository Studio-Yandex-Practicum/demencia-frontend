import React from "react";
import styled from "styled-components";
import { Link, Menu, MenuItem } from "../../../../ui/controls";
import { Text3 } from "../../../../ui/controls/typography";
import { ScreenSize } from "../../../../ui/types";

const StyledMenu = styled(Menu)`
  position: relative;
  z-index: 400;
  top: 0;
  left: 0;
  @media (max-width: ${ScreenSize.Medium}px) {
    top: -30px;
  }
`;

function textElipsis(t: string | undefined) {
  if (t !== undefined && t.length > 27) {
    return `${t.substring(0, 27)}...`;
  }
  return t;
}

const NavMenu: React.FC = () => {
  return (
    <StyledMenu vertical={true} gap={16} gapSmallScreen={12}>
      <MenuItem>
        <Link to="#">
          <Text3>{textElipsis("тест на деменцию тест на деменцию")}</Text3>
        </Link>
      </MenuItem>
      <MenuItem>
        <Link to="#">
          <Text3>
            {textElipsis("центры профилактики центры профилактики")}
          </Text3>
        </Link>
      </MenuItem>
      <MenuItem>
        <Link to="/details">
          <Text3>
            {textElipsis("подробнее о деменции подробнее о деменции")}
          </Text3>
        </Link>
      </MenuItem>
    </StyledMenu>
  );
};

export default NavMenu;
