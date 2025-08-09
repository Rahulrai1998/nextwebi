import React from "react";
import Title from "../../components/Title";
import SubTitle from "../../components/SubTitle";
import styled from "styled-components";
import FaqAccordion from "./FaqAccordion";

const Faq = () => {
  return (
    <ParentContainer aria-labelledby="faq-title" role="region">
      {" "}
      <Title id="faq-title">
        Offshore Dedicated Development Team for Your Project Requirements
      </Title>
      <SubTitle>
        Nextwebi is a leading offshore software development company we save you
        from hiring hassle and deploy a team of dedicated
      </SubTitle>
      <FaqAccordion />
    </ParentContainer>
  );
};

export default Faq;

const ParentContainer = styled.section`
  position: relative;
  font-family: Lato;
  padding: 4rem;
  background-color: rgba(18, 18, 18, 1);
  color: #ffffff;
`;
