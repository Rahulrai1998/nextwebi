import React from "react";
import { faqData } from "./faqData";
import styled from "styled-components";
import AccordionProvider, {
  AccordionItem,
} from "../../components/Accordion/Accordion";

const FaqAccordion = () => {
  return (
    <AccordionContainer>
      {" "}
      <AccordionProvider>
        {faqData?.map((data) => (
          <AccordionItem key={data?.id} header={data?.title}>
            {data?.content}
          </AccordionItem>
        ))}
      </AccordionProvider>
    </AccordionContainer>
  );
};

export default FaqAccordion;

const AccordionContainer = styled.div`
  width: 85%;
  margin: auto;
`;
