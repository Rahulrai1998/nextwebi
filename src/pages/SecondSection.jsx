import React from "react";
import styled from "styled-components";
import offshore from "../assets/offshore.png";
import Title from "../components/Title";
import SubTitle from "../components/SubTitle";

const SecondSection = () => {
  return (
    <ParentContainer role="region" aria-labelledby="offshore-title">
      <LeftContainer>
        <Title id="offshore-title">
          Output-Driven Offshore Software Development Centre
        </Title>
        <SubTitle>
          Offshore development services refers to the practice of hiring a
          remote team or a software development company
        </SubTitle>
        <p>
          Offshore development services refers to the practice of hiring a
          remote team or a software development company in a different company
          to help reduce development costs Offshore development services refers
          to the practice of hiring a remote team or a software development
          company Offshore development services refers to the practice of hiring
          a remote team or a software development company in a different company
          to help reduce development costs Offshore development services refers
          to the practice of hiring a remote team or a software
          <br />
          <br />
          development costs Offshore development services refers to the practice
          of hiring a remote team or a software development company in a
          different company
        </p>
      </LeftContainer>
      <RightContainer>
        <img
          src={offshore}
          alt="Illustration of offshore software development team collaboration"
        />
      </RightContainer>
    </ParentContainer>
  );
};

export default SecondSection;

const ParentContainer = styled.section`
  background-color: rgba(0, 0, 0, 1);
  display: flex;
  color: #ffffff;
  font-family: Lato;
`;

const LeftContainer = styled.article`
  padding: 4rem 0 4rem 4rem;
  p {
    font-weight: 500;
    font-style: medium;
    font-size: 1rem;
    line-height: 27px;
  }
`;

const RightContainer = styled.div`
  padding: 4rem 4rem 4rem 0;
  max-width: 670px;
  width: 100%;
  img {
    max-width: 100%;
    height: auto;
  }
`;
