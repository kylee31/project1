"use client";

import { createGlobalStyle } from "styled-components";

const styled = { createGlobalStyle };

const GlobalStyles = styled.createGlobalStyle`
  /* Chrome, Firefox, Opera, Safari 10.1+ */
  input:focus::placeholder {
    color: transparent;
  }

  /* Edge */
  input:focus::-ms-input-placeholder {
    color: transparent;
  }
`;

export default GlobalStyles;
