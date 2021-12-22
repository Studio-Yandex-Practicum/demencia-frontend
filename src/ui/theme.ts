import { DefaultTheme } from "styled-components";
import { ColorTheme, Palette, PaletteColor } from "./types";

// TODO: update palette properly
const defaultPalette: Palette = {
  background: PaletteColor.White,
  backgroundFooter: PaletteColor.White,
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
    headline: {
      // Новости #772988
      fontSize: 62,
      fontWeight: 700,
      lineHeight: 1.55,
    },
    title: {
      // Когнитивные функции, Головной мозг #772988 #FFF
      fontSize: 45,
      fontWeight: 700,
      lineHeight: 1,
    },
    title2: {
      // Что нового? Кто с нами?
      fontSize: 60,
      fontWeight: 400,
      lineHeight: 1.55,
    },
    subheading2: {
      // Внимание, восприятие #772988 #FFF + underline
      fontSize: 30,
      fontWeight: 700,
      lineHeight: 1.35,
    },
    subheading1: {
      // Отвечает за: #FFF
      fontSize: 18,
      fontWeight: 700,
      lineHeight: 1.55,
    },
    body1: {
      // Способность воспринимать, Перейти к ленте новостей, Пройди тест вместе #000 #FFF #666
      fontSize: 18,
      fontWeight: 300,
      lineHeight: 1.55,
    },
    body2: {
      // Как он устроен, что это такое #FFF #666
      fontSize: 20,
      fontWeight: 700,
      lineHeight: 1.35,
    },
    body3: {
      // Перейти к ленте новостей #666
      fontSize: 18,
      fontWeight: 400,
      lineHeight: 1.35,
    },
    caption: {
      // Когнитивные расстройства #FFF
      fontSize: 20,
      fontWeight: 700,
      lineHeight: 1.2,
    },
    text: {
      // Сложные функции головного мозга #FFF #000 (Когнитивное здоровье)
      fontSize: 20,
      fontWeight: 400,
      lineHeight: 1.55,
    },
    smallText: {
      // Благотворительный фонд, Деменция - стойкое #000 #fff #772988
      fontSize: 14,
      fontWeight: 400,
      lineHeight: 1.2,
    },
    footer: {
      fontSize: 14,
      fontWeight: 700,
      lineHeight: 1.55,
    },
  },
  spacing: {},
};

export { themeLight };
