import React from "react";
import styled from "styled-components";
import Title from "../../components/Title";
import SubTitle from "../../components/SubTitle";
import TabContainer from "./TabContainer";

const Technologies = () => {
  return (
    <ParentContainer role="region" aria-labelledby="tech-title">
      <Title id="tech-title">
        Absolutely, We have thoroughly mastered the technologies you prefer.
      </Title>
      <SubTitle>
        Our exceptionally skilled IT specialists are proficient in both classic
        and modern programming languages, as well as frameworks. We aim for
        excellence, choosing only the top-tier candidates when selecting our IT
        specialists.
      </SubTitle>
      <TabContainer />
    </ParentContainer>
  );
};

export default Technologies;

const ParentContainer = styled.section`
  display: flex;
  flex-direction: column;
  position: relative;
  font-family: Lato;
  padding: 4rem;
  background-color: rgba(18, 18, 18, 1);
  color: #ffffff;
`;
