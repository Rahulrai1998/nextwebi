import React from "react";
import styled from "styled-components";
import ContactUsForm from "./ContactUsForm";
import bgFooter from "../../assets/footer-bg.jpg";
import india from "../../assets/india.png";
import usa from "../../assets/usa.png";
import uae from "../../assets/uae.png";

const Footer = () => {
  const addresses = [
    {
      id: 1,
      country: "India",
      img: india,
      address:
        "4th Floor, 32/1, Mpark, NCPR Industrial Layout, Doddanekundi Industrial Area 2, Seetharampalya, Mahadevapura, Bengaluru, Karnataka 560048.",
    },
    {
      id: 2,
      country: "USA",
      img: usa,
      address: "188 Spear st #350,San Francisco, CA 94105 United States",
    },
    {
      id: 3,
      country: "UAE",
      img: uae,
      address:
        "Office No.2042, ABN Group, 20th Floor, Burjuman Business Tower,Al Mankhool, Burdubai Dubai.",
    },
  ];

  return (
    <ParentContainer>
      <Addresses>
        <H6>Get in Touch</H6>
        <H1>Connect for Excellence Your Gateway to Exceptional Solutions.</H1>

        <AddressGrid>
          {addresses?.map((add) => {
            return (
              <AddressWrapper key={add?.id}>
                <Image src={add?.img} alt={`Flag of ${add?.country}`} />
                <H6>{add?.country}</H6>
                <P>{add?.address}</P>
              </AddressWrapper>
            );
          })}
        </AddressGrid>
      </Addresses>
      <ContactUsForm />
      <a href="#top-of-page" className="skip-link">
        Back to Top
      </a>
    </ParentContainer>
  );
};

export default Footer;

const ParentContainer = styled.section`
  font-family: Lato;
  padding: 2rem;
  display: flex;
  gap: 2rem;
  color: #ffffff;
  background: url(${bgFooter}) no-repeat center/cover;
`;

const H6 = styled.h6`
  padding: 10px 0;
  font-size: 18px;
  font-weight: 600;
`;

const H1 = styled.h1`
  font-weight: 700;
  line-height: 44px;
  font-style: bold;
  font-size: 32px;
`;

const P = styled.p`
  font-style: medium;
  font-size: 16px;
  letter-spacing: 2%;
  line-height: 28px;
`;
const AddressGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  justify-items: start;
  margin-left: 0;
  gap: 30px;
  padding: 2rem 0;
`;

const Addresses = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 600px;
  margin: 40px auto;
  padding: 35px;
`;

const AddressWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const Image = styled.img`
  width: 80px;
  height: 50px;
`;
