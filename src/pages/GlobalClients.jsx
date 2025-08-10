import React from "react";
import styled from "styled-components";
import catalog from "../assets/clients/catalog.png";
import sisyphus from "../assets/clients/sisyphus.png";
import layers from "../assets/clients/layers.png";
import quotient from "../assets/clients/quotient.png";
import circooles from "../assets/clients/circooles.png";

const GlobalClients = () => {
  const clientData = [
    {
      id: 1,
      img: layers,
    },
    {
      id: 2,
      img: sisyphus,
    },
    {
      id: 3,
      img: circooles,
    },
    {
      id: 4,
      img: catalog,
    },
    {
      id: 5,
      img: quotient,
    },
  ];
  return (
    <ParentContainer aria-labelledby="global-clients-title" role="region">
      <p id="global-clients-title"> Trusted by 100+ Clients Globally</p>
      <ClientList>
        {clientData?.map((client) => (
          <img key={client?.id} src={client?.img} alt={"Client Logo"} />
        ))}
      </ClientList>
    </ParentContainer>
  );
};

export default GlobalClients;

const ParentContainer = styled.div`
  font-family: Lato;
  text-align: center;
  padding: 3rem;
  display: flex;
  flex-direction: column;
  background-color: rgba(18, 18, 18, 1);
  justify-content: center;
  align-irems: center;
  color: #ffffff;
  img {
    max-width: 187px;
    height: 48px;
  }
  @media (max-width: 1030px) {
    padding: 2rem  0;
    img {
      max-width: 140px;
      height: 25px;
    }
  }
  p {
    font-size: 20px;
    line-height: 24px;
    margin-bottom: 1rem;
  }
`;
const ClientList = styled.div`
  display: flex;
  max-width: 90%;
  margin: auto;
  gap: 5rem;
  justify-content: center;
  overflow: auto;
`;
