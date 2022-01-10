import { PaletteColor } from ".";

export interface ButtonSizeStyle {
  height: number;
  paddingVertical: number;
  paddingHorizontal: number;
  fontSize: number;
  fontWeight: number;
  borderWidth?: number;
  borderRadius?: number;
}
export interface ButtonStyle {
  borderColor?: PaletteColor;
  color: PaletteColor;
  backgroundColor?: PaletteColor;
}
