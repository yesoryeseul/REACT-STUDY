// reset css

import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
${reset}
  * {
    box-sizing: border-box;
  }

  body {
    background-color: #fff;
  }

  button {
    border: none;
    cursor: pointer;
  }

  ul > li {
    list-style: none;
  }

  textarea {
    resize: none;
    :focus {
      outline: none;
    }
  }
`;

export default GlobalStyles;
