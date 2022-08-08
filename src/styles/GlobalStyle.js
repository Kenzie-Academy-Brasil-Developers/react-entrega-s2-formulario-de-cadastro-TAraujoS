import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        border: none;
        outline: none;
        box-sizing: border-box;
    }

    :root {
        --color-black: #000000;
        --color-white: #fff;
        --color-grayform: #212529;
        --color-grayinput: #343B41;
        --color-whitetext:  #F8F9FA;
        --color-graydark: #868E96;
        --color-pink: #FF577F;
        --color-purple: #59323F;
        
    }

    body {
        width: 100vw;
        height: 100vh;
        font-family: 'Inter', sans-serif;
    }

`;

export default GlobalStyle;
