import React from "react";
import testimonial from "../assets/testimonial.png";
import styled from "styled-components";

const Testimonial = () => {
  return (
    <ParentContainer>
      <Image src={testimonial} alt="Testimonial reports image" />
    </ParentContainer>
  );
};

export default Testimonial;

const ParentContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 6rem 0;
  background-color: rgba(18, 19, 29, 1);
`;

const Image = styled.img`
  max-width: 100%;
  height: auto;
  display: block;
`;
