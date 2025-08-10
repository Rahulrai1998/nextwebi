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
  margin: auto;
  padding: 25px;
  border-radius: 30px;
`;

const ContentCard = styled.div`
  display: flex;
  border-radius: 30px;
  background-color: rgba(245, 245, 247, 1);
  img {
    flex-shrink: 0;
    width: 100%;
    height: auto;
    max-width: 619px;
    border-radius: 30px;
    object-fit: cover;
    clip-path: polygon(5rem 0, 100% 0, 100% 100%, 0 100%, 0 5rem);
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
    font-size: 62px;
    font-style: semi-bold;
    font-size: 2rem;
    line-height: 50px;
    margin-bottom: 1rem;
  }
  p {
    font-size: 16px;
    line-height: 31px;
    font-weight: 400;
  }
`;
