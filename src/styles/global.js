import { createGlobalStyle } from "styled-components";
import "font-awesome/css/font-awesome.css";

const GlobalStyle = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    background: #696AA8;
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
    font-family: sans-serif;

    .title {
      height: 55px;
      padding: 0 20px;
      color: #c9e9e5;
      font-size: 24px;
    }
  }
`;

export default GlobalStyle;
