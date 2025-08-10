import React, { useState } from "react";
import styled from "styled-components";

const ContactUsForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    contact: "",
    requirement: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // You can add validation or API calls here
  };

  return (
    <FormWrapper>
      <FormTitle id="form-title">
        Your Vision, Our Mission: Let's Shape Success Together.
      </FormTitle>

      <StyledForm
        role="form"
        aria-labelledby="form-title"
        onSubmit={handleSubmit}
      >
        <div>
          <Input
            placeholder="Name"
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <Input
            placeholder="Company Name"
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <Input
            placeholder="Email Address"
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <Input
            placeholder="Contact Number"
            type="tel"
            id="contact"
            name="contact"
            value={formData.contact}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <TextArea
            placeholder="Decribe Your Requirement"
            id="requirement"
            name="requirement"
            rows="5"
            value={formData.requirement}
            onChange={handleChange}
            required
          />
        </div>

        <FormFooterWrapper>
          <div style={{ width: "80%" }}>
            <StyledFieldset>
              <StyledLegend>Additional Options</StyledLegend>
              <input
                type="checkbox"
                id="get-portfolio"
                name="get-portfolio"
              />{" "}
              <label htmlFor="get-portfolio" style={{ fontSize: "14px" }}>
                Click here to quickly get portfolio in your inbox
              </label>
            </StyledFieldset>
          </div>

          <div style={{ textAlign: "end" }}>
            <StyledFieldset>
              <StyledLegend>Solve Captcha</StyledLegend>
              <Label htmlFor="checkhuman">5 + 3</Label>
              <input
                type="text"
                name="checkhuman"
                id="checkhuman"
                style={{ marginLeft: "5px", width: "30%" }}
              />
            </StyledFieldset>
          </div>
        </FormFooterWrapper>
        <SubmitButton type="submit">Request Proposal</SubmitButton>
      </StyledForm>
    </FormWrapper>
  );
};

export default ContactUsForm;

const FormWrapper = styled.div`
  max-width: 600px;
  margin: 40px auto;
  padding: 35px;
  border-radius: 10px;
  border-width: 1px;
  border-style: solid;
  border-image: linear-gradient(
    left right,
    rgba(249, 249, 249, 1),
    rgba(147, 147, 147, 1)
  );
  background-color: rgba(19, 19, 19, 1);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  @media (max-width: 1000px) {
    margin: 10px auto;
  }
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Label = styled.label`
  font-weight: 600;
  margin-bottom: 4px;
`;

const Input = styled.input`
  color: white;
  width: 95%;
  padding: 10px;
  font-size: 16px;
  border-radius: 8px;
  border: 1px solid #ccc;
  background-color: rgba(255, 255, 255, 0.1);
`;

const TextArea = styled.textarea`
  width: 95%;
  padding: 10px;
  color: white;
  font-size: 16px;
  border-radius: 8px;
  border: 1px solid #ccc;
  background-color: rgba(255, 255, 255, 0.1);
  resize: vertical;
`;

const SubmitButton = styled.button`
  width: 98%;
  padding: 10px 20px;
  font-size: 16px;
  border-radius: 8px;
  background-color: #007bff;
  color: white;
  border: none;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }
`;
const FormTitle = styled.h2`
  font-size: 24px;
  line-height: 33px;
  font-weight: 600;
  margin-bottom: 1.5rem;
  text-align: left;
  text-wrap: wrap;
  @media (max-width: 600px) {
    font-size: 1.5rem;
  }
`;

const FormFooterWrapper = styled.div`
  margin: 10px auto;
  padding: 20px 0;
  justify-content: space-between;
  display: flex;
  gap: 12px;
  @media (max-width: 526px) {
    padding: 2px 0;
    gap: 2px;
    margin: 0;
  }
`;

const StyledFieldset = styled.fieldset`
  border: 2px solid transparent;
  border-radius: 8px;
  padding: 16px 20px;
  margin: 20px 0;
  background-color: transparent;
  transition: all 0.3s ease;
  position: relative;

  &:hover {
    border-color: #ccc;
    background-color: rgba(255, 255, 255, 0.05);
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);

    legend {
      opacity: 1;
      transform: translateY(0);
    }
  }
  legend {
    opacity: 0;
    transform: translateY(-10px);
    transition: opacity 0.3s ease, transform 0.3s ease;
    font-size: 0.75rem;
    font-weight: 500;
    color: #ffffff;
    position: absolute;
    top: -12px;
    left: 16px;
    background: white;
    padding: 0 6px;
    pointer-events: none;
  }
`;

const StyledLegend = styled.legend`
  font-size: 1rem;
  font-weight: 600;
  padding: 0 8px;
  color: #ffffff;
  background-color: transparent;
  transition: background-color 0.3s ease;

  ${StyledFieldset}:hover & {
    background-color: #1a1a1a;
    border-radius: 4px;
  }
`;
