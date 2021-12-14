import { createGlobalStyle } from "styled-components";
import styledNormalize from "styled-normalize";
import "../../fonts/fonts.css";

// TODO: do not hardcode global style
export const GlobalStyle = createGlobalStyle`
    ${styledNormalize}
    body {
        background-color: #FFF;
        font-family: "Golos", Arial, sans-serif;
        color: #000;
    }
`;
