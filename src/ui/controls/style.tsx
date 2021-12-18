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
        font-family: "Ubuntu", Arial, sans-serif;
        color:  ${(props) => props.theme.colors.textPrimary};
    }
`;
