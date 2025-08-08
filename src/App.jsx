import { useState } from "react";
import FirstSection from "./components/FirstSection";
import styled from "styled-components";
import SecondSection from "./components/SecondSection";

function App() {
  const [count, setCount] = useState(0);

  return (
    <ParentContainer>
      <FirstSection />
      <SecondSection />
    </ParentContainer>
  );
}

export default App;

const ParentContainer = styled.section`
  display: flex;
  flex-direction: column;
`;
