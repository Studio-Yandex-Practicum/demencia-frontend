import { PaletteColor } from ".";

export interface ColorInfo {
  color: PaletteColor;
  backgroundColor: PaletteColor;
}

export interface Palette {
  background: PaletteColor;
  backgroundAlt: PaletteColor;
  backgroundDark: PaletteColor;
  backgroundFooter: PaletteColor;
  primary: PaletteColor;
  secondary: PaletteColor;
  primaryContent: PaletteColor;
  secondaryContent: PaletteColor;
  textPrimary: PaletteColor;
  textSecondary: PaletteColor;
  accent: PaletteColor;
  accentAlt: PaletteColor;
}
