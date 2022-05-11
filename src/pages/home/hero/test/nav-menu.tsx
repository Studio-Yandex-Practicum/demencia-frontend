import React from "react";
import styled from "styled-components";
import { useQuery } from "@apollo/client";
import { toast } from "react-hot-toast";
import { LeftMenuElementsData } from "../../../../types/left-menu";
import { Link, Menu, MenuItem, Box, Subtitle3 } from "../../../../ui/controls";
import { Text3 } from "../../../../ui/controls";
// import { ScreenSize } from "../../../../ui/types";
import { GET_LEFT_MENU_ITEMS } from "../../../../gql/query/left-menu";

const StyledMenu = styled(Menu)`
  position: relative;
  z-index: 400;
  top: 0;
  left: 0;
`;

function textEllipsis(t: string | undefined) {
  if (t !== undefined && t.length > 20) {
    return `${t.substring(0, 20)}...`;
  }
  return t;
}

const Empty: React.FC = () => (
  <StyledMenu vertical={true} gap={16} gapSmallScreen={12}>
    <MenuItem>
      <Link to="/details">
        <Text3>подробнее о деменции</Text3>
      </Link>
    </MenuItem>
  </StyledMenu>
);

const NavMenu: React.FC = () => {
  const { data, loading, error } =
    useQuery<LeftMenuElementsData>(GET_LEFT_MENU_ITEMS);

  if (loading) {
    return (
      <Box mt={2}>
        <Subtitle3>Загрузка...</Subtitle3>
      </Box>
    );
  }

  if (error) {
    toast.error(`Не удалось загрузить меню с сервера`, { id: "error" });
    return <Empty />;
  }

  if (!data || !data.leftMenuElements) {
    return <Empty />;
  }

  const items = data.leftMenuElements.filter((el) => !!el);

  if (!items.length) {
    return <Empty />;
  }

  return (
    <StyledMenu vertical={true} gap={16} gapSmallScreen={12}>
      {items.map((item, index) => (
        <MenuItem key={index} zoomOnHover>
          <Link to={item.url}>
            <Text3>{textEllipsis(item.name)}</Text3>
          </Link>
        </MenuItem>
      ))}
    </StyledMenu>
  );
};

export default NavMenu;
