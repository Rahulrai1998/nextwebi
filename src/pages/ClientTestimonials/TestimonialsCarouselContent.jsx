import React from "react";
import styled from "styled-components";
import quote from "../../assets/quote.png";
import SubTitle from "../../components/SubTitle";
import dtech from "../../assets/dtech.png";
import tlead from "../../assets/tlead.png";

const TestimonialsCarouselContent = () => {
  return (
    <ParentContainer>
      <ContentCard>
        <div className="quote-container">
          <img src={quote} alt="" />
        </div>
        <SubTitle>
          I wanted to redesigning and revamp the website of my institution. I
          contacted Nextwebi and they understood the vision of an organization
          and through several discussions and timely suggestions, the website
          was delivered and deployed successfully. Nextwebi, Without a doubt
          they have what it takes to make a great web application, not to
          mention with a competitive price too. Now on seeing the end product I
          am satisfied and know that the web app is in safe hands. Thank you to
          the entire team.
        </SubTitle>
        <div className="separator"></div>
        <div className="footer">
          <div className="logo">
            <img src={dtech} alt="Dynamatic Technologies" />
            <span>
              DYNAMATIC <br />
              TECHNOLOGIES
            </span>
          </div>
          <div className="author">
            <img src={tlead} alt="Profile" />
            <div style={{ textAlign: "left" }} className="authorName">
              <strong>Qenowned & D Firm</strong>
              <br />
              <small>Team Lead</small>
            </div>
          </div>
        </div>
      </ContentCard>
    </ParentContainer>
  );
};

export default TestimonialsCarouselContent;
const ParentContainer = styled.div`
  font-family: Lato;
  color: #fff;
  text-align: center;
  width: 85%;
  padding: 2px; /* Border thickness */
  background: linear-gradient(
    90deg,
    rgba(0, 147, 255, 1),
    rgba(227, 192, 29, 1)
  );
  horizontal-align: center;
  margin: 1rem auto;
  padding: 2px;
  border-radius: 20px;
  @media (max-width: 768px) {
    width: 80%;
  }
`;
const ContentCard = styled.div`
  padding: 40px;
  display: flex;
  flex-direction: column;
  background: rgba(27, 27, 27, 1);
  border-radius: 20px;
  .quote-container {
    margin: auto;
  }
  .separator {
    height: 2px;
    margin: 16px 0;
    background: linear-gradient(
      90deg,
      rgba(0, 110, 222, 1),
      rgba(53, 199, 2, 1)
    );
  }
  .footer {
    padding: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    span {
      text-align: left;
    }
  }
  .logo {
    display: flex;
    align-items: center;
    gap: 8px;
  }
  .logo img {
    width: 30px;
  }
  .author {
    display: flex;
    align-items: center;
    gap: 8px;
  }
  .author img {
    width: 36px;
    height: 36px;
    border-radius: 10px;
    object-fit: cover;
  }

  @media (max-width: 700px) {
    padding: 17px;
    .logo span {
      font-size: 12px;
    }
    .authorName {
      font-size: 12px;
    }
    .footer {
      padding: 0;
    }
    .author img {
      width: 25px;
      height: 25px;
    }
    .logo img {
      width: 25px;
    }
  }
`;
