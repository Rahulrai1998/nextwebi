import React from "react";
import styled from "styled-components";
import Tabs from "../../components/Tabs/Tabs";
import { techData } from "./techData";

const TabContainer = () => {
  return (
    <ParentContainer>
      <Tabs defaulValue={0} tabData={techData} />
    </ParentContainer>
  );
};

export default TabContainer;

const ParentContainer = styled.div`
  display: flex;
  padding: 0 0 2rem 0;
  justify-content: space-between;
  @media (max-width: 950px) {
    flex-direction: column;
  }
`;
