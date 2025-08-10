import React from "react";
import styled from "styled-components";
import dubaiClientImg from "../../assets/Subtract.png";

const CarousalContent = () => {
  return (
    <ParentContainer>
      <ContentCard>
        <LeftSection>
          <h2>
            Web application development for a real estate company in dubai
          </h2>
          <p>
            Our client, a real estate agency based in Dubai, recognized the
            growing demand for a streamlined platform that would facilitate the
            process of buying and renting properties in Dubai.
          </p>
        </LeftSection>
        <img src={dubaiClientImg} alt="" />
      </ContentCard>
    </ParentContainer>
  );
};

export default CarousalContent;
const ParentContainer = styled.div`
  font-family: Lato;
  color: #000;
  text-align: center;
  width: 85%;
  background-color: #fff;
  horizontal-align: center;
  margin: 1rem auto;
  padding: 25px;
  border-radius: 30px;
  @media (max-width: 1030px) {
    width: 70%;
    padding: 15px;
  }
`;

const ContentCard = styled.div`
  display: flex;
  border-radius: 30px;
  background-color: rgba(245, 245, 247, 1);
  img {
    max-height: 469px;
    flex-shrink: 0;
    max-width: 50%;
    border-radius: 30px;
    // object-fit: cover;
  }
  @media (max-width: 1030px) {
    flex-direction: column;
    img {
      max-height: 400px;
      max-width: 100%;
    }
  }
`;

const LeftSection = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  padding: 4rem 2rem;
  justify-content: center;
  text-align: left;
  align-items: center;
  h2 {
    font-weight: bold;
    font-style: semi-bold;
    font-size: max(1vw, 2.3rem);
    line-height: 50px;
    margin-bottom: 1rem;
  }
  p {
    font-size: 16px;
    line-height: 31px;
    font-weight: 400;
  }
  @media (max-width: 768px) {
    h2 {
      font-weight: bold;
      font-style: semi-bold;
      font-size: max(1vw, 1.2rem);
      line-height: 30px;
    }
    p {
      font-size: 16px;
      line-height: 21px;
      font-weight: 400;
    }
  }

  @media (max-width: 1030px) {
    padding: 2rem 2rem;
  }
`;
