import styled, { createGlobalStyle } from "styled-components";
import { SystemColors } from "./colors";
import MediaQueries from "./mediaQueries";

const GlobalStyles = createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: sans-serif;
        outline: none;
    }

    *:focus {
        outline: none;
    }

    html,
    body,
    #root {
        width: 100%;
        height: 100%;
        color: ${SystemColors.Border};
        overflow: hidden;
        max-width: 100%;
        height: 100%;
    }

    button {
        border: none;
        cursor: pointer;
        background: transparent;
        user-select: none;
    }
`;

export const Container = styled.div`
    width: 100%;
    height: 100%;
    padding: 1rem;
    display: flex;
    align-items: center;
    position: relative;
    flex-direction: column;

    ${MediaQueries.BIGGER_THAN_TABLET} {
        width: 85%;
        height: 85%;
        flex-direction: unset;
    }
`;

export default GlobalStyles;
