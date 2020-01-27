import { createGlobalStyle } from 'styled-components';

import 'react-perfect-scrollbar/dist/css/styles.css';
import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  ul {
    list-style: none;
  }

  button {
    cursor: pointer;
  }

  *:focus {
    outline: 0;
  }

  html, body, #root {
    height: 100%
  }

  body {
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font: 14px;
  }

  a {
    text-decoration: none;
  }
`;
