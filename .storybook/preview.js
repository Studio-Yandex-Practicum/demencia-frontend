import {ThemeProvider} from "styled-components";
import { themeLight } from "../src/ui/theme";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

export const decorators = [
  (Story) => (
      <ThemeProvider theme={themeLight}>
        {Story()}
      </ThemeProvider>
  ),
];