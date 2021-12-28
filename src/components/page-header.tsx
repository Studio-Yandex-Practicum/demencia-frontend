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
import React from "react";

const PageHeader: React.FC = () => {
  return (
    <Header>
      <BurgerButton />
      <Box mt={3} ml={5}>
        <LogoBlock altText="Логотип" link="#" />
      </Box>
      <Box mt={4} mr={4}>
        <Menu>
          <MenuItems>
            <MenuItem>
              <Link>О деменции</Link>
            </MenuItem>
            <MenuItem>
              <Link>Партнеры</Link>
            </MenuItem>
            <MenuItem>
              <Link>Новости</Link>
            </MenuItem>
            <MenuItem>
              <Link>О фонде</Link>
            </MenuItem>
            <MenuItem>
              <Link>Контакты</Link>
            </MenuItem>
          </MenuItems>
        </Menu>
      </Box>
    </Header>
  );
};

export default PageHeader;
