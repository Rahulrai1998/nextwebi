import React from "react";
import styled from "styled-components";

const Title = ({ children, ...rest }) => {
  return <H1 {...rest}>{children}</H1>;
};

export default Title;

const H1 = styled.h1`
  font-weight: 700;
  font-style: bold;
  font-size: max(2.6vw, 25px);
  line-height: 50px;
  letter-spacing: -0.02em;
  margin-bottom: 1rem;
  @media (max-width: 650px) {
    line-height: 30px;
    margin-bottom: 0.7rem;
  }
`;
