import React, { useRef, useState } from "react";
import styled from "styled-components";

const Tabs = ({ defaulValue = 0, tabData = [] }) => {
  const [selected, setSelected] = useState(defaulValue);
  const tabRefs = useRef([]);

  const handleChange = (index) => {
    setSelected(index);
  };

  const focusTab = (index) => {
    if (tabRefs.current[index]) tabRefs.current[index].focus();
  };

  const handleKeyDown = (event, index) => {
    let newIndex = index;
    switch (event.key) {
      case "ArrowRight":
        newIndex = (index + 1) % tabData.length;
        focusTab(newIndex);
        break;
      case "ArrowLeft":
        newIndex = (index - 1 + tabData.length) % tabData.length;
        focusTab(newIndex);
        break;
      case "Enter":
      case " ":
        setSelected(index);
        break;
      default:
        break;
    }
  };

  return (
    <>
      <TabList role="tablist" aria-label="Tabs">
        {tabData.map((tab, index) => (
          <Tab
            className="tab-section"
            isSelected={index === selected}
            key={tab.id}
            ref={(el) => (tabRefs.current[index] = el)}
            id={`tab-${tab.id}`}
            role="tab"
            aria-selected={selected === index}
            aria-controls={`tabpanel-${index}`}
            onClick={() => handleChange(index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            // style={{ border: index === selected ? "red solid 1px" : null }}
          >
            {tab.label}
          </Tab>
        ))}
      </TabList>
      <TabPanel
        role="tabpanel"
        aria-labelledby={`tab-${tabData[selected].id}`}
        id={`tabpanel-${selected}`}
      >
        {tabData[selected]?.languages?.map((lang) => (
          <LanguageCard key={lang?.id}>
            <img src={lang?.image} alt="" />
            <span>{lang?.language}</span>
          </LanguageCard>
        ))}
      </TabPanel>
    </>
  );
};

export default Tabs;

const Tab = styled.button`
  position: relative;
  text-align: left;
  cursor: pointer;
  font-style: bold;
  font-family: Lato;
  font-size: 22px;
  line-height: 10px;
  font-weight: 700;
  display: block;
  padding: 1.8rem;
  margin-right: 5rem;
  background: none;
  color: #fff;
  border: none;
  border-radius: 10px;
  background: ${(prop) => (prop.isSelected ? "rgba(27, 27, 27, 1)" : "none")};
`;

const TabList = styled.div`
  display: flex;
  flex-direction: column;

  .tab-section + .tab-section:before {
    content: "";
    position: absolute;
    left: 1rem;
    right: 1rem;
    top: 0;
    transform: translateY(-50%);
    height: 2px;
    border-radius: 2px;
    background: linear-gradient(90deg, #000000 0%, #ffffff 45%, #000000 100%);
    pointer-events: none;
  }

  .tab-section + .tab-section {
    margin-top: 0.7rem;
  }
`;

const TabPanel = styled.div`
  display: grid;
  gap: 17px;
  grid-template-columns: repeat(2, 1fr);
`;

const LanguageCard = styled.div`
  width: 285px;
  padding: 0 0.4rem;
  text-align: center;
  display: flex;
  background-color: rgba(27, 27, 27, 1);
  align-items: center;
  border-radius: 10px;
  justify-content: center;
  img {
    width: 52px;
    height: 52px;
  }
  span {
    padding: 10px;
  }
`;
