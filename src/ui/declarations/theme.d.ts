// import original module declarations
import "styled-components";
import { Palette, Layout, Typography, ButtonStyle } from "../types";
import { ButtonSizeStyle } from "../types/button-style";

interface ButtonTypes {
  primary: ButtonStyle;
  secondary: ButtonStyle;
  default: ButtonStyle;
  alt: ButtonStyle;
  link: ButtonStyle;
  visited: ButtonStyle;
}

interface ButtonSizes {
  default: ButtonSizeStyle;
  large: ButtonSizeStyle;
  medium: ButtonSizeStyle;
  smaller: ButtonSizeStyle;
  small: ButtonSizeStyle;
  largeCircle?: ButtonSizeStyle;
  mediumCircle?: ButtonSizeStyle;
  defaultCircle: ButtonSizeStyle;
  smallerCircle?: ButtonSizeStyle;
  smallCircle?: ButtonSizeStyle;
}

interface ButtonSettings {
  types: ButtonTypes;
  sizes: ButtonSizes;
}

declare module "styled-components" {
  export interface DefaultTheme {
    layout: Layout;
    buttons: ButtonSettings;
    colors: Palette;
    typography: Typography;
    spacing: Spacing;
  }
}
