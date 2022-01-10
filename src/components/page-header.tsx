import React from "react";
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

const NavMenu: React.FC<{ vertical?: boolean }> = (props) => {
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
      <MenuItem>
        <Link to="/#about">Контакты</Link>
      </MenuItem>
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
