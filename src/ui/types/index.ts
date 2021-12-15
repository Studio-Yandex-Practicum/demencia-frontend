import { Palette } from "./palette";
import { PaletteColor } from "./palette-color.enum";
import { Layout } from "./layout";
import { Typography } from "./typography";
import { FontSize } from "./font-size.enum";

// TODO: update palette properly
const defaultPalette: Palette = {
  background: PaletteColor.White,
  backgroundAlt: PaletteColor.SoftWhite,
  primary: PaletteColor.DarkPurple,
  secondary: PaletteColor.Green,
  primaryContent: PaletteColor.DarkGreyBrown,
  secondaryContent: PaletteColor.LightGreen,
  textPrimary: PaletteColor.DarkGreyBrown,
  textSecondary: PaletteColor.Black,
};

export { PaletteColor, defaultPalette, FontSize };
export type { Layout, Typography };
