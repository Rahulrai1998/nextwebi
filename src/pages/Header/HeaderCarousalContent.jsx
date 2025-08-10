import React from "react";
import styled from "styled-components";

const HeaderCarousalContent = () => {
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

export default HeaderCarousalContent;

const ParentContainer = styled.div`
  color: #ffffff;
  text-align: center;
  width: 70%;
  horizontal-align: center;
  margin: auto;
  h1 {
    font-weight: bold;
    font-size: max(30px, 3.5vw);
  }
  p {
    font-size: max(15px, 1.5vw);
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  gap: 30px;
  width: 50%;
  margin: 30px auto;
`;

const Button = styled.button`
  cursor: pointer;
  line-height: 24px;
  font-size: max(10px, 1vw);
  padding: 9px 30px;
  border-radius: 12px;
  white-space: nowrap;
  color: #ffffff;
  background-color: ${(props) => props.$bgcolor || "rgba(255, 255, 255, 0)"};
  border: ${(props) => props.$bgcolor || "#ffffff 1px solid"};
`;
