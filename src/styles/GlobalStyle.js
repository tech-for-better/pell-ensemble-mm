import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

*{ 
padding: 0;
  margin: 0;
  box-sizing: border-box;
}
:root {
    --yellow: #ECE0B0;
    --blue: #CADDDD;
    --purple: #000C66;
    --black: #252525;
    --white: #fff;
    --green: #16796F;
    --borderRadius: 20px;
    --shadow: inset 0px 0px 0px 7px var(--black), 12px 12px 0px var(--black);
  }

  html{
    font-size: 10px;
    font-family: 'Roboto Mono';
    background-color: var(--blue);
    overflow-y: scroll;
    min-height: 100%;
  }
  body {
    min-height: 100vh;
    padding-bottom: 20px;
}
  hr {
    border: 0.5px solid var(--black);
    top: 2.5rem;
    width: 100%;
  }
  .container {
    max-width: 1200px;
    width: 90%;
    margin: 0 auto;
  }
  `;

export default GlobalStyles;
