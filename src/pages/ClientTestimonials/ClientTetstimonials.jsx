import React from "react";
import Title from "../../components/Title";
import SubTitle from "../../components/SubTitle";
import styled from "styled-components";
import TestimonialsCarouselContent from "./TestimonialsCarouselContent";
import Carousel from "../../components/Carousel";

const ClientTetstimonials = () => {
  return (
    <ParentContainer role="region" aria-labelledby="client-test-title">
      {" "}
      <Title id="client-test-title">Hear It from Those Who Matter Most</Title>
      <SubTitle>
        Offshore development services refers to the practice of hiring a remote
        team or a software development company in a different company to help
        reduce development costs
      </SubTitle>
      <Carousel>
        <TestimonialsCarouselContent />
        <TestimonialsCarouselContent />
        <TestimonialsCarouselContent />
      </Carousel>
    </ParentContainer>
  );
};

export default ClientTetstimonials;

const ParentContainer = styled.section`
  position: relative;
  font-family: Lato;
  padding: 4rem;
  background-color: rgba(0, 0, 0, 1);
  color: #ffffff;
`;
