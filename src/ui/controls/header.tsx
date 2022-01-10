import styled, { ThemeProps, DefaultTheme } from "styled-components";
import {
  ButtonShape,
  ButtonType,
  PaletteColor,
  ScreenSize,
  TypographyLevel,
} from "../types";
import { Button, ButtonProps } from "./button";

const Header = styled.header`
  width: 100%;
  background: transparent;
  display: flex;
  justify-content: space-between;
  position: relative;
`;

export default Header;
