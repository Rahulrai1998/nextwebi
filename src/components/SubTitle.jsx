import React from "react";
import styled from "styled-components";

const SubTitle = ({ children, ...rest }) => {
  return <H4 {...rest}>{children}</H4>;
};

export default SubTitle;

const H4 = styled.h4`
  font-style: bold;
  font-weight: 500;
  line-height: 31px;
  font-size: max(1.15vw, 15px);
  margin-bottom: 3rem;
`;
