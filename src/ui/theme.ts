import { DefaultTheme } from "styled-components";
import { Palette, PaletteColor } from "./types";

// TODO: update palette properly
const defaultPalette: Palette = {
  background: PaletteColor.White,
  backgroundAlt1: PaletteColor.DarkPurple,
  backgroundAlt2: PaletteColor.Green,
  backgroundAlt3: PaletteColor.LightGreen,
  textPrimary: PaletteColor.Black,
  textSecondary: PaletteColor.White,
  textAccent1: PaletteColor.DarkPurple,
  textAccent2: PaletteColor.Green,
  textShadow: PaletteColor.Grey,
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
      borderWidth: 1,
      borderRadius: 60,
      color: PaletteColor.White,
      backgroundColor: PaletteColor.DarkPurple,
    },
    secondary: {
      borderWidth: 2,
      borderRadius: 30,
      borderColor: PaletteColor.Green,
      color: PaletteColor.White,
      backgroundColor: PaletteColor.Green,
    },
    link: {
      color: PaletteColor.DarkPurple,
    },
  },
  colors: defaultPalette /* todo */,
  typography: {
    mainTitle: {
      // Новости #772988
      fontSize: 62,
      fontWeight: 700,
      lineHeight: 1.55,
    },
    title: {
      // Что нового? Кто с нами?
      fontSize: 60,
      fontWeight: 400,
      lineHeight: 1.55,
    },
    subtitle1: {
      // Когнитивные функции, Головной мозг #772988 #FFF
      fontSize: 45,
      fontWeight: 700,
      lineHeight: 1,
    },
    subtitle2: {
      // Внимание, восприятие #772988 #FFF + underline
      fontSize: 30,
      fontWeight: 700,
      lineHeight: 1.35,
    },
    subtitle3: {
      // Как он устроен, что это такое #FFF #666
      fontSize: 20,
      fontWeight: 700,
      lineHeight: 1.35,
    },
    subtitle4: {
      // Отвечает за: #FFF
      fontSize: 18,
      fontWeight: 700,
      lineHeight: 1.55,
    },
    text1: {
      // Сложные функции головного мозга #FFF #000 (Когнитивное здоровье)
      fontSize: 20,
      fontWeight: 400,
      lineHeight: 1.55,
    },
    text2: {
      // Способность воспринимать, Перейти к ленте новостей, Пройди тест вместе #000 #FFF #666
      fontSize: 18,
      fontWeight: 300,
      lineHeight: 1.55,
    },
    text3: {
      // Перейти к ленте новостей #666
      fontSize: 18,
      fontWeight: 400,
      lineHeight: 1.35,
    },
    text4: {
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
