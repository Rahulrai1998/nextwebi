import React from "react";
import styled from "styled-components";

const Title = ({ children, ...rest }) => {
  return <H1 {...rest}>{children}</H1>;
};

export default Title;

const H1 = styled.h1`
  font-weight: 700;
  font-style: bold;
  font-size: 42px;
  line-height: 50px;
  letter-spacing: -0.02em;
  margin-bottom: 1rem;
`;
