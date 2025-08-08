import React from "react";
import styled from "styled-components";

const FirstSecCarousalContent = () => {
  return (
    <ParentContainer>
      <h1>Offshore Software Development Company in New York</h1>
      <p>
        At Nextwebi, we provide agile result-oriented offshore software
        development services for companies ranging from startups to enterprises
        to help you keep up with constant technological evolution. We deploy a
        team of expert developers
      </p>
      <ButtonGroup>
        <Button $bgcolor="rgba(20, 104, 251, 1)">Get in Touch</Button>
        <Button>Our Works</Button>
      </ButtonGroup>
    </ParentContainer>
  );
};

export default FirstSecCarousalContent;

const ParentContainer = styled.div`
  color: #ffffff;
  text-align: center;
  width: 70%;
  horizontal-align: center;
  margin: auto;
  h1 {
    font-weight: bold;
    font-size: 62px;
  }
  p {
    font-size: 20px;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  gap:30px;
  width: 50%;
  margin: 30px auto;
`;

const Button = styled.button`
  line-height: 24px;
  font-size: 16px;
  padding: 0px 20px;
  height: 40px;
  border-radius: 10px;
  color: #ffffff;
  background-color: ${(props) => props.$bgcolor || "rgba(255, 255, 255, 0)"};
  border: ${(props) => props.$bgcolor || "#ffffff 1px solid"};
`;
