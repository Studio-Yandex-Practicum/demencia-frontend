import React from "react";
import { useQuery } from "@apollo/client";
import { toast } from "react-hot-toast";
import { MainMenuData } from "../types/main-menu";
import { GET_MAIN_MENU_ITEMS } from "../gql/query/main-menu";
import {
  Box,
  Header,
  Link,
  LogoBlock,
  Menu,
  MenuItem,
  Nav,
  Sider,
} from "../ui/controls";
import { Text3 } from "../ui/controls/typography";

function textEllipsis(t: string | undefined) {
  if (t !== undefined && t.length > 10) {
    return `${t.substring(0, 10)}...`;
  }
  return t;
}

const DefaultMenu: React.FC<{ vertical?: boolean }> = (props) => {
  return (
    <Menu vertical={!!props.vertical}>
      <MenuItem>
        <Link to="/#info">О деменции</Link>
      </MenuItem>
      <MenuItem>
        <Link to="/#sponsors">Партнеры</Link>
      </MenuItem>
      <MenuItem>
        <Link to="/news-grid">Новости</Link>
      </MenuItem>
      <MenuItem>
        <Link to="/#about">О фонде</Link>
      </MenuItem>
    </Menu>
  );
};

const NavMenu: React.FC<{ vertical?: boolean }> = (props) => {
  const { data, loading, error } = useQuery<MainMenuData>(GET_MAIN_MENU_ITEMS);

  if (loading) {
    return (
      <Box>
        <Text3>Загрузка...</Text3>
      </Box>
    );
  }

  if (error) {
    toast.error(`Не удалось загрузить меню с сервера`, { id: "error" });
    return <DefaultMenu />;
  }

  if (!data || !data.mainMenuElements) {
    return <DefaultMenu />;
  }

  const items = data.mainMenuElements.filter(
    (el) => el && el.isActive && el.name !== ""
  );

  if (!items.length) {
    return <DefaultMenu />;
  }

  return (
    <Menu vertical={!!props.vertical}>
      {items.map((item) => (
        <MenuItem key={item.id}>
          <Link to={item.url}>{textEllipsis(item.name)}</Link>
        </MenuItem>
      ))}
    </Menu>
  );
};

const PageHeader: React.FC = () => {
  return (
    <Header>
      <Box mt={3} ml={4}>
        <LogoBlock altText="Логотип" to="/" />
      </Box>
      <Box mt={4} mr={4}>
        <Nav>
          <NavMenu />
        </Nav>
      </Box>
      <Sider>
        <LogoBlock altText={"Логотип"} to={"/"} />
        <Box mt={5}>
          <NavMenu vertical={true} />
        </Box>
      </Sider>
    </Header>
  );
};

export default PageHeader;
