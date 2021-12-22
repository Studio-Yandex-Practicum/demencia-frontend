// import original module declarations
import "styled-components";
import { Palette, Layout, Typography, ButtonStyle } from "../types";
import { ColorInfo } from "../types/palette";

interface ButtonTypes {
  primary: ButtonStyle;
  secondary: ButtonStyle;
  link: ButtonStyle;
}

declare module "styled-components" {
  export interface DefaultTheme {
    layout: Layout;
    buttons: ButtonTypes;
    colors: Palette;
    typography: Typography;
    spacing: Spacing;
  }
}
