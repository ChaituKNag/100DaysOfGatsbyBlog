import React from "react";
import styled from "styled-components";

const StyledHeading = styled.h2`
  margin: 20px 0;
  font-family: "Oswald";
`;

const Heading = ({ children }) => {
  return <StyledHeading>{children}</StyledHeading>;
};

export default Heading;
