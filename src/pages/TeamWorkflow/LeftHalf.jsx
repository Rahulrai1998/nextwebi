import React from "react";
import styled from "styled-components";
import Title from "../../components/Title";
import SubTitle from "../../components/SubTitle";
import RequestQuote from "./RequestQuote";

const LeftHalf = () => {
  return (
    <ParentContainer>
      <Title id="offshore-title">
        Offshore Dedicated Development Team for Your Project Requirements
      </Title>
      <SubTitle>
        Nextwebi is a leading offshore software development company we save you
        from hiring hassle and deploy a team of dedicated
      </SubTitle>
      <RequestQuote />
    </ParentContainer>
  );
};

export default LeftHalf;
const ParentContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
