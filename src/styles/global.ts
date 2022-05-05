import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin:0;
        padding:0;
        box-sizing: border-box;
        font-family: sans-serif;
    }

    html, body, #root {
        height:100%;
    }

    :root {
        --red:#E50914;
        --text: #ffffff;
        --gray: #444;
        --red-hov: #f40612;
        --black: #000;
        --border:#222;
        --qa:#303030; 
    }
`;
