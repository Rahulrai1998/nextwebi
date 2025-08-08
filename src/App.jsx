import { useState } from "react";
import styled from "styled-components";
import SecondSection from "./pages/SecondSection";
import { Header } from "./pages/Header";
import { Footer } from "./pages/Footer";
import Testimonial from "./pages/Testimonial";

function App() {
  const [count, setCount] = useState(0);

  return (
    <ParentContainer>
      <Header />
      <SecondSection />
      <Testimonial />
      <Footer />
    </ParentContainer>
  );
}

export default App;

const ParentContainer = styled.section`
  display: flex;
  flex-direction: column;
`;
