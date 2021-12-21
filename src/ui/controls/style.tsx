import { createGlobalStyle, DefaultTheme } from "styled-components";
import styledNormalize from "styled-normalize";
import "../../fonts/fonts.css";

interface GlobalProps {
  theme: DefaultTheme;
}

// TODO: do not hardcode global style
export const GlobalStyle = createGlobalStyle<GlobalProps>`
    ${styledNormalize}
    body {
        background-color: ${(props) => props.theme.colors.background};
        color:  ${(props) => props.theme.colors.primaryContent};
        font-family: "Ubuntu", Arial, sans-serif;
        -moz-osx-font-smoothing: grayscale;
        -webkit-font-smoothing: antialiased;
        -webkit-text-size-adjust: 100%;
        -ms-text-size-adjust: 100%;
        -moz-text-size-adjust: 100%;
    }
`;
