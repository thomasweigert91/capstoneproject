import {createGlobalStyle} from "styled-components";

const GlobalStyles = createGlobalStyle`
    html,
    body {
        padding: 0;
        margin: 0;
        font-family: Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI",  Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    }
    * {
        box-sizing: border-box;
    }
`;

export default GlobalStyles;
