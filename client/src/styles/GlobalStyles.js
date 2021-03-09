import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  h1, h2, h3 {
    font-weight: 400;
  }

  a {
    text-decoration: none;
  }

  li {
    list-style: none;
  }
`