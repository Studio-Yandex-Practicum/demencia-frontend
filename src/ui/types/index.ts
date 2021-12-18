import { Palette } from "./palette";
import { PaletteColor } from "./palette-color.enum";
import { Layout } from "./layout";
import { Typography } from "./typography";
import { FontSize } from "./font-size.enum";
import { TextColorType } from "./text-color-type.enum";

// TODO: update palette properly
const defaultPalette: Palette = {
  background: PaletteColor.White,
  backgroundAlt: PaletteColor.LightGreen,
  primary: PaletteColor.DarkPurple,
  secondary: PaletteColor.Green,
  primaryContent: PaletteColor.White,
  secondaryContent: PaletteColor.SoftWhite,
  textPrimary: PaletteColor.Black,
  textSecondary: PaletteColor.GreyBrown,
  accent: PaletteColor.DarkPurple,
  accentAlt: PaletteColor.Green,
};

export { PaletteColor, TextColorType, defaultPalette, FontSize };
export type { Layout, Typography };
