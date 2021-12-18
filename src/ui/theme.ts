import { DefaultTheme } from "styled-components";
import { defaultPalette } from "./types";

const themeLight: DefaultTheme = {
  layout: {
    maxWidth: 1920,
    minWidth: 320,
    defaultSpacing: 4 /* todo */,
  },
  colors: defaultPalette /* todo */,
  typography: {
    huge: {
      fontSize: 50,
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
};

export { themeLight };
