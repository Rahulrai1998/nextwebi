import { useState } from "react";
import styled from "styled-components";
import SecondSection from "./pages/SecondSection";
import { Header } from "./pages/Header";
import { Footer } from "./pages/Footer";
import Testimonial from "./pages/Testimonial";
import { Services } from "./pages/Services";
import { ClientProjects } from "./pages/ClientProjects";
import GlobalClients from "./pages/GlobalClients";
import { TeamWorkflow } from "./pages/TeamWorkflow";
import Faq from "./pages/FAQs/Faq";
import { ClientTetstimonials } from "./pages/ClientTestimonials";

function App() {
  return (
    <ParentContainer>
      <Header />
      <main id="main-content">
        <SecondSection />
        <Services />
        <Testimonial />
        <ClientProjects />
        <GlobalClients />
        <TeamWorkflow />
        <Faq />
        <ClientTetstimonials />
      </main>
      <Footer />
    </ParentContainer>
  );
}

export default App;

const ParentContainer = styled.section`
  display: flex;
  flex-direction: column;
  color: white;
  position: relative;
  .skip-link {
    position: absolute;
    top: -40px;
    left: 0;
    background: #000;
    color: #fff;
    padding: 8px;
    z-index: 100;
  }
  .skip-link:focus {
    top: 0;
  }
`;
