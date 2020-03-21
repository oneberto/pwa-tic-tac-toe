import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: sans-serif;
    }

    html,
    body,
    #root {
        width: 100%;
        height: 100%;
        color: #F1F1F1;
        overflow: hidden;
        max-width: 100%;
        height: 100%;
    }

    button {
        outline: none;
        border: none;
        cursor: pointer;
        background: transparent;
        user-select: none;
    }
`;

export default GlobalStyles;
