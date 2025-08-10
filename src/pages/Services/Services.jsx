import React from "react";
import styled from "styled-components";
import Title from "../../components/Title";
import SubTitle from "../../components/SubTitle";
import { servicesData } from "./servicesData";
import ServicesCard from "./ServicesCard";
import topRightImg from "../../assets/gradients/gradient-top-right.png";
import bottomLeftImg from "../../assets/gradients/gradient-left-bottom.png";

const Services = () => {
  return (
    <ParentContainer aria-labelledby="services-title" role="region">
      {" "}
      <TopRightImage src={topRightImg} alt="" aria-hidden="true" />
      <BottomLeftImage src={bottomLeftImg} alt="" aria-hidden="true" />
      <header>
        <Title id="services-title">
          Output-Driven Offshore Software Development Centre
        </Title>
        <SubTitle>
          Offshore development services refers to the practice of hiring a
          remote team or a software development company
        </SubTitle>
      </header>
      <section aria-labelledby="services-title">
        <ServicesCardGrid>
          {servicesData?.map((service) => (
            <ServicesCard key={service?.id} {...service} />
          ))}
        </ServicesCardGrid>
      </section>
    </ParentContainer>
  );
};

export default Services;

const ParentContainer = styled.section`
  position: relative;
  font-family: Lato;
  padding: 4rem;
  background-color: rgba(0, 0, 0, 1);
  color: #ffffff;
`;

const ServicesCardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  justify-items: center;
  margin-left: 0;
  gap: 30px;
  padding: 2rem 0;

  @media (max-width: 650px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    padding: 1rem 0;
    gap: 20px;
  }
`;
const BackgroundImage = styled.img`
  position: absolute;
  // z-index: -1;
  pointer-events: none;
  opacity: 1;
`;

const TopRightImage = styled(BackgroundImage)`
  top: 0;
  right: 0;
  width: 100%;
  max-width: 800px;

  @media (max-width: 1024px) {
    max-width: 600px;
  }

  @media (max-width: 768px) {
    max-width: 400px;
  }

  @media (max-width: 480px) {
    max-width: 250px;
  }
`;

const BottomLeftImage = styled(BackgroundImage)`
  bottom: 0;
  left: 0;
  width: 100%;
  max-width: 2120px;

  @media (max-width: 1440px) {
    max-width: 1600px;
  }

  @media (max-width: 1024px) {
    max-width: 1200px;
  }

  @media (max-width: 768px) {
    max-width: 800px;
  }

  @media (max-width: 480px) {
    max-width: 500px;
  }
`;
