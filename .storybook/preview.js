import {ThemeProvider} from "styled-components";
import { themeLight } from "../src/ui/theme";
import { BrowserRouter as Router } from "react-router-dom";

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
        <Router>
          {Story()}
        </Router>
      </ThemeProvider>
  ),
];