import { createGlobalStyle } from 'styled-components';
import Roboto from './fonts/Roboto.woff';

export const GlobalStyles = createGlobalStyle`

  @font-face{
    font-family: 'Roboto';
    src: url(${Roboto}) format('woff');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }
  
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  body {
    height: 100%;
    font-family: 'Roboto', sans-serif;
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

  input {
  border-radius: 0;
  appearance: none;
  line-height: normal;

  &::placeholder {
    opacity: 1;
    line-height: normal;
  }

  &:invalid {
    box-shadow: none;
  }
}
`;
