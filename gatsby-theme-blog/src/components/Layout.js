// src/components/layout.js
import React from "react";
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  body {
    min-height: 100vh;
    background-image: radial-gradient( circle 907px at 3.4% 19.8%,  rgba(255,243,122,1) 0%, rgba(255,102,145,1) 97.4% );
    max-width: 600px;
    margin: 0 auto;
    font-family: 'Open Sans';
  }

  p {
    font-fami
  }
`;

const Root = styled.div`
  background-image: radial-gradient(
    circle farthest-corner at 50.1% 37.3%,
    rgba(92, 213, 249, 1) 0%,
    rgba(123, 243, 248, 1) 90.1%
  );
  border-radius: 10px;
  padding: 20px;
  margin: 20px;
`;

export default ({ children }) => (
  <>
    <GlobalStyles />
    <Root>{children}</Root>
  </>
);
