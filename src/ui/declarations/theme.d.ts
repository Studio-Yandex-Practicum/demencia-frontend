// import original module declarations
import "styled-components";
import {Palette, Layout, Typography} from "../types";

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme {
    layout: Layout;
    colors: Palette;
    typography: Typography;
  }
}
