import React from "react";
import Accordion, { AccordionItem } from "../../components/Accordion/Accordion";
import AccordionProvider from "../../components/Accordion/Accordion";
import { workflowData } from "./workflowData";
import styled from "styled-components";
import ptr from "../../assets/pointer.png";

const WorkFlowAccordion = () => {
  return (
    <AccordionProvider>
      {workflowData?.map((data) => (
        <AccordionItem
          initialEntered={data?.id === 1}
          key={data?.id}
          header={data?.title}
          subtitle={data?.subtitle}
        >
          {data?.body}
          {data?.pointers && (
            <PointersParent>
              {data?.pointers?.map((pointer) => (
                <p>
                  <img src={ptr} alt="" />
                  {pointer?.point}
                </p>
              ))}
            </PointersParent>
          )}
        </AccordionItem>
      ))}
    </AccordionProvider>
  );
};

export default WorkFlowAccordion;

const PointersParent = styled.div`
  margin: 1rem 0;
  display: flex;
  flex-direction: column;
  p {
    font-size: 1rem;
    line-height: 25px;
    img {
      text-align: center;
      width: 1.1rem;
      padding: 0 0.2rem;
    }
  }
`;
