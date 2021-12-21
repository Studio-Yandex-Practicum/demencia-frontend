import { PaletteColor } from ".";

export interface ColorInfo {
  color: PaletteColor;
  backgroundColor: PaletteColor;
}

export interface Palette {
  background: PaletteColor;
  backgroundFooter: PaletteColor;
  default: PaletteColor;
  primary: PaletteColor;
  secondary: PaletteColor;
  accent: PaletteColor;
  textPrimary: PaletteColor;
  textSecondary: PaletteColor;
  shadow: PaletteColor;
}
