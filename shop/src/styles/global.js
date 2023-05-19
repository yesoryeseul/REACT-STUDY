import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
${reset}
  * {
    box-sizing: border-box;
  }

  ul > li { 
    list-style: none;
  }

  a {
    text-decoration: none;
  }

`;

export default GlobalStyles;
