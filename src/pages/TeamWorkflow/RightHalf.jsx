import React from "react";
import styled from "styled-components";
import WorkFlowAccordion from "./WorkFlowAccordion";

const RightHalf = () => {
  return (
    <ParentContainer>
      <WorkFlowAccordion />
    </ParentContainer>
  );
};

export default RightHalf;
const ParentContainer = styled.div`
  width: 80%;
`;
