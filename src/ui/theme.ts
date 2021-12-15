import { DefaultTheme } from "styled-components";
import { defaultPalette } from "./types";

const laptopTheme: DefaultTheme = {
  layout: {
    defaultSpacing: 4 /* todo */,
  },
  colors: defaultPalette /* todo */,
  typography: {
    huge: {
      fontSize: 50,
      fontWeight: 700,
      letterSpacing: 0.07,
      lineHeight: 1.15,
    },
    large: {
      fontSize: 36,
      fontWeight: 700,
      letterSpacing: 0.05,
      lineHeight: 1.15,
    },
    medium: {
      fontSize: 18,
      fontWeight: 700,
      letterSpacing: 0.05,
      lineHeight: 1.2,
    },
    default: {
      fontSize: 12,
      fontWeight: 700,
      letterSpacing: 0.03,
      lineHeight: 1.8,
    },
  },
};

export { laptopTheme };
