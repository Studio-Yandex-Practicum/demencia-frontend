// import original module declarations
import "styled-components";
import {Palette, Layout, Typography} from "../types";
import { ColorInfo } from "../types/palette";

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme {
    layout: Layout;
    button: ColorInfo;
    linkButton: ColorInfo;
    colors: Palette;
    typography: Typography;
    spacing: Spacing;
  }
}
