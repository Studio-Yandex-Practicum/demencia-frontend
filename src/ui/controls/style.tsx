import { createGlobalStyle } from "styled-components";
import styledNormalize from "styled-normalize";
import "../../fonts/fonts.css";
import { laptopTheme } from "../theme";

// TODO: do not hardcode global style
export const GlobalStyle = createGlobalStyle`
    ${styledNormalize}
    body {
        background-color: ${laptopTheme.colors.background};
        font-family: "Golos", Arial, sans-serif;
        color: ${laptopTheme.colors.textPrimary};
    }
`;
