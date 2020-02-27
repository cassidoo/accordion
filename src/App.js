import React, { Fragment, useState } from "react";
import {
  FaHeart,
  FaSkiing,
  FaWineGlassAlt
} from "react-icons/fa";
import Description from "./Description";
import "./App.scss";

function Accordion({ data }) {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div data-accordion>
      {data.map((tab, index) => {
        const isActive = index === activeIndex;
        return (
          <Fragment key={index}>
            <div
              data-panel-title
              className={isActive ? "expanded" : ""}
              onClick={() => setActiveIndex(index)}
            >
              <span>{tab.label}</span>
              <span>{tab.icon}</span>
            </div>
            <div
              data-panel-content
              className={isActive ? "expanded" : ""}
            >
              {tab.content}
            </div>
          </Fragment>
        );
      })}
    </div>
  );
}

function App() {
  const data = [
    {
      label: "Paris",
      icon: <FaHeart />,
      content: <Description city="paris" />
    },
    {
      label: "Lech",
      icon: <FaSkiing />,
      content: <Description city="lech" />
    },
    {
      label: "Madrid",
      icon: <FaWineGlassAlt />,
      content: <Description city="madrid" />
    }
  ];

  return (
    <div className="App">
      <Accordion data={data} />
    </div>
  );
}

export default App;

// function AccordionCC({ children }) {
// }

// function Section({ children, disabled }) {
// }

// function Title({ children }) {
// }

// function Content({ children }) {
// }
