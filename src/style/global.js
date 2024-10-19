import { createGlobalStyle } from "styled-components";

export const Global = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :root{
        font-size: 16px;
        font-family: "Roboto Serif", serif;
    }
    #root{
        width: 100vw;
        height: 100vh;
    }
    body{
        background: beige;
        -webkit-font-smoothing: antialiased;
        overflow-x: hidden;
    }
`;