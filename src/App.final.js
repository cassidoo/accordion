import React, { useState, createContext, useContext } from "react";
import { FaMountain, FaSkiing, FaWineGlassAlt } from "react-icons/fa";
import Description from "./Description";
import "./App.scss";

function Accordion({ data }) {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div data-accordion>
      {data.map((tab, index) => {
        const isActive = index === activeIndex;
        return (
          <div data-section key={index}>
            <div
              data-panel-title
              className={isActive ? "expanded" : ""}
              onClick={() => setActiveIndex(index)}
            >
              <span>{tab.label}</span>
              <span>{tab.icon}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}

let AccordionContext = createContext();

function AccordionCC({ children }) {
  let [activeIndex, setActiveIndex] = useState(0);
  return (
    <div data-accordion>
      {children.map((child, index) => {
        return (
          <AccordionContext.Provider
            key={`section-${index}`}
            value={{ index, activeIndex, setActiveIndex }}
          >
            {child}
          </AccordionContext.Provider>
        );
      })}
    </div>
  );
}

let SectionContext = createContext();

function Section({ children, disabled }) {
  return (
    <SectionContext.Provider value={{ disabled }}>
      <div data-section>{children}</div>
    </SectionContext.Provider>
  );
}

function Title({ children }) {
  let { index, activeIndex, setActiveIndex } = useContext(AccordionContext);
  let isActive = index === activeIndex;
  let { disabled } = useContext(SectionContext);
  return (
    <div
      data-panel-title
      onClick={() => {
        if (!disabled) setActiveIndex(index);
      }}
      className={disabled ? "disabled" : isActive ? "expanded" : ""}
    >
      {children}
    </div>
  );
}

function Content({ children }) {
  let { index, activeIndex } = useContext(AccordionContext);
  let isActive = index === activeIndex;
  return (
    <div data-panel-content className={isActive ? "expanded" : ""}>
      {children}
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <AccordionCC>
        <Section>
          <Title>
            Dornbirn <FaMountain />
          </Title>
          <Content>
            <Description city="dornbirn" />
          </Content>
        </Section>
        <Section>
          <Title>
            Lech <FaSkiing />
          </Title>
          <Content>
            <Description city="lech" />
          </Content>
        </Section>
        <Section>
          <Title>
            Madrid <FaWineGlassAlt />
          </Title>
          <Content>
            <Description city="madrid" />
          </Content>
        </Section>
      </AccordionCC>
    </div>
  );
}

export default App;
