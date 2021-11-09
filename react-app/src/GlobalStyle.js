import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --maxWidth: 1280px;
    --background: #e2e2e2;
    --fontSuperBig: 2.2rem;
    --fontSuper: 2rem;
    --fontBig: 1.8rem;
    --fontbig: 1.5rem;
    --fontMed: 1.2rem;
    --fontSmall: 1rem;
    --fontSmaller: 0.8rem;
  }

  * {
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
  }

  body, input, textarea, button {
    font: 300 1rem "Comfortaa", sans-serif;
  }

  html, body {
    height: 100%;
  }
`