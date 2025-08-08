import { useState } from "react";
import styled from "styled-components";
import SecondSection from "./pages/SecondSection";
import { Header } from "./pages/Header";
import { Footer } from "./pages/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <ParentContainer>
      <Header />
      <SecondSection />
      <Footer/>
    </ParentContainer>
  );
}

export default App;

const ParentContainer = styled.section`
  display: flex;
  flex-direction: column;
`;
