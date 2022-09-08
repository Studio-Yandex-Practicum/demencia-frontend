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
    types: {
      primary: {
        color: PaletteColor.White,
        backgroundColor: PaletteColor.DarkPurple,
      },
      secondary: {
        borderColor: PaletteColor.Green,
        color: PaletteColor.White,
        backgroundColor: PaletteColor.Green,
      },
      default: {
        borderColor: PaletteColor.Green,
        color: PaletteColor.Green,
        backgroundColor: PaletteColor.White,
      },
      alt: {
        borderColor: PaletteColor.LightGreen,
        color: PaletteColor.Green,
        backgroundColor: PaletteColor.LightGreen,
      },
      link: {
        color: PaletteColor.DarkPurple,
      },
      visited: {
        backgroundColor: PaletteColor.SuperLightGrey,
        color: PaletteColor.Grey,
      },
    },
    sizes: {
      large: {
        height: 90,
        paddingVertical: 30,
        paddingHorizontal: 60,
        fontSize: 30,
        fontWeight: 900,
        borderRadius: 60,
      },
      medium: {
        height: 68,
        paddingVertical: 24,
        paddingHorizontal: 48,
        fontSize: 20,
        fontWeight: 700,
        borderRadius: 60,
        borderWidth: 1,
      },
      default: {
        height: 58,
        paddingVertical: 20,
        paddingHorizontal: 30,
        fontSize: 18,
        fontWeight: 700,
        borderRadius: 60,
        borderWidth: 1,
      },
      smaller: {
        height: 51,
        paddingVertical: 16.5,
        paddingHorizontal: 30,
        fontSize: 18,
        fontWeight: 600,
        borderRadius: 30,
        borderWidth: 2,
      },
      small: {
        height: 30,
        paddingVertical: 4,
        paddingHorizontal: 20,
        fontSize: 18,
        fontWeight: 500,
        borderRadius: 60,
        borderWidth: 2,
      },
      defaultCircle: {
        height: 50,
        paddingVertical: 0,
        paddingHorizontal: 0,
        fontSize: 30,
        fontWeight: 700,
      },
      smallerCircle: {
        height: 48,
        paddingVertical: 0,
        paddingHorizontal: 0,
        fontSize: 30,
        fontWeight: 700,
      },
      mediumCircle: {
        height: 60,
        paddingVertical: 0,
        paddingHorizontal: 0,
        fontSize: 18,
        fontWeight: 600,
      },
    },
  },
  colors: defaultPalette /* todo */,
  typography: {
    mainTitle: {
      // Новости #772988
      fontSize: 86,
      fontWeight: 800,
      lineHeight: 1.15,
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
