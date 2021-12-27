import React from "react";
import {
  Box,
  BurgerButton,
  Header,
  Link,
  LogoBlock,
  Menu,
  MenuItem,
  MenuItems,
} from "../ui/controls";

const PageHeader: React.FC = () => {
  return (
    <Header>
      <BurgerButton />
      <Box mt={3} ml={12}>
        <LogoBlock altText="Логотип" to="/" />
      </Box>
      <Box mt={4} mr={4}>
        <Menu>
          <MenuItems>
            <MenuItem>
              <Link to="/">О деменции</Link>
            </MenuItem>
            <MenuItem>
              <Link to="/">Партнеры</Link>
            </MenuItem>
            <MenuItem>
              <Link to="/">Новости</Link>
            </MenuItem>
            <MenuItem>
              <Link to="/">О фонде</Link>
            </MenuItem>
            <MenuItem>
              <Link to="/">Контакты</Link>
            </MenuItem>
          </MenuItems>
        </Menu>
      </Box>
    </Header>
  );
};

export default PageHeader;
