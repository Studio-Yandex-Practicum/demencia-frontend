import React from "react";
import {
  Box,
  BurgerButton,
  Header,
  IconBurger,
  Link,
  LogoBlock,
  Menu,
  MenuItem,
  Nav,
} from "../ui/controls";
import { ButtonShape, PaletteColor, TypographyLevel } from "../ui/types";

const PageHeader: React.FC = () => {
  return (
    <Header>
      <Box mt={3} ml={5}>
        <LogoBlock altText="Логотип" to="/" />
      </Box>
      <Box mt={4} mr={4}>
        <Nav>
          <Menu>
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
        </Nav>
      </Box>
      <BurgerButton>
        <IconBurger fillColor={PaletteColor.White} />
      </BurgerButton>
    </Header>
  );
};

export default PageHeader;
