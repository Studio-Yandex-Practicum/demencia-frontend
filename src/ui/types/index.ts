import { Palette } from "./palette";
import { PaletteColor } from "./palette-color.enum";

// TODO: update palette properly
const defaultPalette: Palette = {
    background: PaletteColor.White,
    backgroundAlt: PaletteColor.SoftWhite,
    primary: PaletteColor.DarkPurple,
    secondary: PaletteColor.Green,
    primaryContent: PaletteColor.DarkGreyBrown,
    secondaryContent: PaletteColor.LightGreen,
    textPrimary: PaletteColor.DarkGreyBrown,
    textSecondary: PaletteColor.Black
}

export { PaletteColor, defaultPalette };