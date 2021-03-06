import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    appearance: none;
    text-decoration: none;
  }

  html {
    scroll-behavior: smooth;
  }
  
  body {
    font-family: 'Poppins', sans-serif;
    font-size: 16px;
    color: #ffffff;
    background-color: #0e0e10;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overscroll-behavior: none;
    overflow: ${props => (props.noScroll && 'hidden')};
  }
`;

export default GlobalStyle;