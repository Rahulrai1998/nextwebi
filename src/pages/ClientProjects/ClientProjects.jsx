import React from "react";
import styled from "styled-components";
import Title from "../../components/Title";
import SubTitle from "../../components/SubTitle";
import Carousel from "../../components/Carousel";
import CarousalContent from "./CarousalContent";

const ClientProjects = () => {
  return (
    <ParentContainer aria-labelledby="project-title" role="region">
      <header>
        <Title id="project-title">Where great ideas became real results</Title>
        <SubTitle>
          Offshore development services refers to the practice of hiring a
          remote team or a software development <br />
          company in a different company to help reduce development costs
        </SubTitle>
      </header>
      <Carousel>
        <CarousalContent />
        <CarousalContent />
        <CarousalContent />
      </Carousel>
    </ParentContainer>
  );
};

export default ClientProjects;

const ParentContainer = styled.section`
  position: relative;
  font-family: Lato;
  padding: 4rem 0rem;
  background-color: rgba(0, 0, 0, 1);
  color: #ffffff;
  header {
    padding: 0 4rem;
  }
`;
