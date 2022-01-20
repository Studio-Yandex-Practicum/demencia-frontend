import React from "react";
import { Box, Link, Menu, MenuItem } from "../../ui/controls";
import { GET_LEFT_MENU_ITEMS } from "../../gql/query";
import { useQuery } from "@apollo/client";
import { LeftMenuElementsData } from "../../types";
import { toast } from "react-hot-toast";

const Empty: React.FC = () => (
  <Box mt={2}>
    <p>Список пуст</p>
  </Box>
);

const GraphqlTestPage: React.FC = () => {
  const { data, loading, error } =
    useQuery<LeftMenuElementsData>(GET_LEFT_MENU_ITEMS);

  if (loading) {
    return (
      <Box mt={2}>
        <p>Загрузка...</p>
      </Box>
    );
  }

  if (error) {
    toast.error(`${error}`, { id: "error" });
    return <Empty />;
  }

  if (!data) {
    return <Empty />;
  }

  const items = data.leftMenuElements.filter((el) => el.isActive);

  if (!items.length) {
    return <Empty />;
  }

  return (
    <Box pt={6}>
      <Menu vertical={true} gap={18} gapSmallScreen={12}>
        {items.map((item) => (
          <MenuItem>
            <Link to={item.url}>{item.name}</Link>
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
};

export default GraphqlTestPage;
