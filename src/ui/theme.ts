import { DefaultTheme } from "styled-components";
import { ColorTheme, Palette, PaletteColor } from "./types";

// TODO: update palette properly
const defaultPalette: Palette = {
  background: PaletteColor.SoftWhite,
  backgroundFooter: PaletteColor.WhiteBlue,
  default: PaletteColor.White,
  primary: PaletteColor.DarkPurple,
  secondary: PaletteColor.Green,
  accent: PaletteColor.LightGreen,
  textPrimary: PaletteColor.Black,
  textSecondary: PaletteColor.White,
  shadow: PaletteColor.Grey,
};

const basicColorTheme: ColorTheme = {
  Primary: PaletteColor.DarkPurple,
  PrimaryVariant: PaletteColor.DarkPurple,
  Secondary: PaletteColor.Green,
  SecondaryVariant: PaletteColor.LightGreen,
  Background: PaletteColor.SoftWhite,
  Surface: PaletteColor.White,
  Error: PaletteColor.White, // todo: error
  OnPrimary: PaletteColor.White,
  OnSecondary: PaletteColor.White,
  OnBackground: PaletteColor.Black,
  OnSurface: PaletteColor.Black,
  OnError: PaletteColor.Black,
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
  buttons: {
    primary: {
      borderRadius: 25,
      color: PaletteColor.White,
      backgroundColor: PaletteColor.DarkPurple,
    },
    secondary: {
      borderWidth: 2,
      borderRadius: 30,
      borderColor: PaletteColor.Green,
      color: PaletteColor.Green,
      backgroundColor: PaletteColor.White,
    },
    link: {
      color: PaletteColor.DarkPurple,
      backgroundColor: PaletteColor.White,
    },
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
