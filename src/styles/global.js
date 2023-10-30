import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    font-size: 62.5%;
  }

  body {
    font-family: ${({ theme }) => theme.FONTS.INTER};
    background: ${({ theme }) => theme.COLORS.BACKGROUND_GRADIENT};
    height: 100vh;
  }
  
  body, button {
    font-size: 1.6rem;
    outline: none;
  }

  a {
    text-decoration: none;
  }

  button, a {
    cursor: pointer;
    transition: 0.3s;
  }

`;