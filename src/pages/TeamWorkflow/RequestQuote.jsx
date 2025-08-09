import React from "react";
import plane from "../../assets/plane.png";
import styled from "styled-components";
import arrowDown from "../../assets/arrow-down.png";

const RequestQuote = () => {
  return (
    <ParentContainer>
      <div>
        <img src={plane} alt="" />
      </div>
      <p>Let's begin with a no-obligation conversations.</p>
      <Button>Request a Quote</Button>
      <ArrowImg src={arrowDown} alt="" />
    </ParentContainer>
  );
};

export default RequestQuote;
const ParentContainer = styled.div`
  width: 387px;
  display: flex;
  flex-direction: column;
  position: relative;
  background-color: rgba(27, 27, 27, 1);
  border-radius: 10px;
  padding: 1.5rem;
  gap: 2rem;
  img {
    width: 3rem;
  }
  p {
    font-weight: 600;
    font-size: 20px;
    line-height: 27px;
  }
`;

const Button = styled.button`
  width: 50%;
  cursor: pointer;
  line-height: 24px;
  font-size: 16px;
  padding: 0px 20px;
  height: 40px;
  border-radius: 10px;
  color: #ffffff;
  background-color: rgba(20, 104, 251, 1);
  border: none;
`;

const ArrowImg = styled.img`
  position: absolute;
  bottom: 0.8rem;
  right: 0.8rem;
  color: rgba(255, 255, 255, 1);
  opacity: 0.1;
`;
