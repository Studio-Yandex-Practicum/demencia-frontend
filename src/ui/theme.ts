import { DefaultTheme } from "styled-components";
import { Palette, PaletteColor } from "./types";

// TODO: update palette properly
const defaultPalette: Palette = {
  background: PaletteColor.White,
  backgroundAlt: PaletteColor.LightGreen,
  backgroundDark: PaletteColor.Green,
  backgroundFooter: PaletteColor.WhiteBlue,
  primary: PaletteColor.DarkPurple,
  secondary: PaletteColor.Green,
  primaryContent: PaletteColor.White,
  secondaryContent: PaletteColor.SoftWhite,
  textPrimary: PaletteColor.Black,
  textSecondary: PaletteColor.GreyBrown,
  accent: PaletteColor.DarkPurple,
  accentAlt: PaletteColor.Green,
};

const themeLight: DefaultTheme = {
  layout: {
    fontFamily: '"Ubuntu", Arial, sans-serif;',
    maxWidth: 1920,
    minWidth: 320,
    defaultSpacing: 8 /* todo */,
    borderRadius: 25,
    borderSize: 2,
  },
  button: {
    color: PaletteColor.White,
    backgroundColor: PaletteColor.Purple,
  },
  linkButton: {
    color: PaletteColor.Purple,
    backgroundColor: PaletteColor.Transparent,
  },
  colors: defaultPalette /* todo */,
  typography: {
    huge: {
      fontSize: 86,
      fontWeight: 700,
      lineHeight: 1.15,
    },
    large: {
      fontSize: 40,
      fontWeight: 700,
      lineHeight: 1.15,
    },
    medium: {
      fontSize: 30,
      fontWeight: 700,
      lineHeight: 1.15,
    },
    default: {
      fontSize: 20,
      fontWeight: 400,
      lineHeight: 1.15,
    },
    small: {
      fontSize: 20,
      fontWeight: 300,
      lineHeight: 1.15,
    },
  },
  spacing: {},
};

export { themeLight };
