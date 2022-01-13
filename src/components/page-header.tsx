import React, { createRef, useEffect } from "react";
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

interface MenuItemLinkInfo {
  to: string;
  title: string;
}

const MenuItemLink: React.FC<MenuItemLinkInfo> = (props: MenuItemLinkInfo) => {
  // set menu item width
  const menuItemRef = createRef<HTMLLIElement>();
  useEffect(() => {
    if (!menuItemRef.current) {
      return;
    }

    menuItemRef.current.style.width = menuItemRef.current.offsetWidth + "px";
  }, [menuItemRef]);

  return (
    <MenuItem ref={menuItemRef}>
      <Link to={props.to}>{props.title}</Link>
    </MenuItem>
  );
};

const NavMenu: React.FC<{ vertical?: boolean }> = (props) => {
  return (
    <Menu vertical={!!props.vertical}>
      <MenuItemLink to={"/#info"} title={"О деменции"} />
      <MenuItemLink to={"/#sponsors"} title={"Партнеры"} />
      <MenuItemLink to={"/news-grid"} title={"Новости"} />
      <MenuItemLink to={"/#about"} title={"О фонде"} />
      <MenuItemLink to={"/#about"} title={"Контакты"} />
    </Menu>
  );
};

const PageHeader: React.FC = () => {
  return (
    <Header>
      <Box mt={3} ml={5}>
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
