import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

  @font-face{
    font-family: 'Roboto';
    src: local('Roboto'), url('./fonts/Roboto.woff'), format('woff');
    src: local('Roboto'), url('./fonts/Roboto.woff2'), format('woff2');
  }
  
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  body {
    font-family: Roboto, sans-serif;
    background-color: #FAFAFA;
    overflow-x: hidden;
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