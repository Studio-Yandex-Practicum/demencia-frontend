import { PaletteColor } from ".";

export interface ColorInfo {
  color: PaletteColor;
  backgroundColor: PaletteColor;
}

export interface Palette {
  background: PaletteColor;
  backgroundAlt1: PaletteColor;
  backgroundAlt2: PaletteColor;
  backgroundAlt3: PaletteColor;
  textPrimary: PaletteColor;
  textSecondary: PaletteColor;
  textAccent1: PaletteColor;
  textAccent2: PaletteColor;
  textShadow: PaletteColor;
}
