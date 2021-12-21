import { DefaultTheme } from "styled-components";
import { Palette, PaletteColor } from "./types";

// TODO: update palette properly
const defaultPalette: Palette = {
  background: PaletteColor.SoftWhite,
  backgroundFooter: PaletteColor.WhiteBlue,
  default: PaletteColor.White,
  primary: PaletteColor.DarkPurple,
  secondary: PaletteColor.Green,
  accent: PaletteColor.LightGreen,
  primaryContent: PaletteColor.Black,
  secondaryContent: PaletteColor.White,
  shadow: PaletteColor.Grey,
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
    backgroundColor: PaletteColor.DarkPurple,
  },
  linkButton: {
    color: PaletteColor.DarkPurple,
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
