import styled, { ThemeProps, DefaultTheme } from "styled-components";
import {
  ButtonShape,
  ButtonType,
  PaletteColor,
  ScreenSize,
  TypographyLevel,
} from "../types";
import { Button, ButtonProps } from "./button";

export const BurgerButton = styled(Button).attrs(
  (props: ThemeProps<DefaultTheme> & ButtonProps) => ({
    type: ButtonType.Primary,
    shape: ButtonShape.Circle,
    level: TypographyLevel.Subtitle3,
    textColor: PaletteColor.White,
    ...props,
  })
)`
  position: fixed;
  top: 20px;
  right: 15px;
`;

const Header = styled.header`
  width: 100%;
  background: transparent;
  display: flex;
  justify-content: space-between;
  position: relative;
`;

export default Header;
