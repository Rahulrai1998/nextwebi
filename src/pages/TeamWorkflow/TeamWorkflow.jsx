import React from "react";
import styled from "styled-components";
import LeftHalf from "./LeftHalf";
import RightHalf from "./RightHalf";

const TeamWorkflow = () => {
  return (
    <ParentContainer role="region">
      <LeftHalf />
      <RightHalf />
    </ParentContainer>
  );
};

export default TeamWorkflow;

const ParentContainer = styled.section`
  background-color: rgba(0, 0, 0, 1);
  font-style: Lato;
  display: flex;
  padding: 4rem;
  flex-direction: row;
  @media (max-width: 770px) {
    padding: 2rem 3rem;
    flex-direction: column;
  }
`;
