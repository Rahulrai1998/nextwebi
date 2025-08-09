import React from "react";
import styled from "styled-components";

const ServicesCard = ({ title, content }) => {
  return (
    <ParentContainer aria-label={`Service: ${title}`}>
      <h4>{title}</h4>
      <p>{content}</p>
    </ParentContainer>
  );
};

export default ServicesCard;

const ParentContainer = styled.div`
  cursor: pointer;
  //   border: 1px solid white;
  padding: 3rem 2rem;
  text-align: left;
  border-radius: 10px;
  background-color: rgba(27, 27, 27, 1);
  z-index: 1;

  &:hover {
    box-shadow: -0.8px 0.8px 0.5px;
  }

  &:focus {
    outline: 2px solid #00f;
    outline-offset: 4px;
  }

  h4 {
    font-weight: 700;
    font-style: bold;
    font-size: 22px;
    line-height: 31px;
    margin-bottom: 1.2rem;
  }
  p {
    font-size: 1rem;
    line-height: 26px;
    font-weight: 500;
  }
`;
