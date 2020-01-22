import React, { Fragment, useState } from "react";
import { FaMountain, FaSkiing, FaWineGlassAlt } from "react-icons/fa";
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
              onClick={() => setActiveIndex(index)}
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
      label: "Dornbirn",
      icon: <FaMountain />,
      content:
        "Dornbirn is the largest city in Vorarlberg and the tenth largest in Austria. It is an important commercial and shopping centre."
    },
    {
      label: "Lech",
      icon: <FaSkiing />,
      content:
        "Lech am Arlberg is a mountain village and an exclusive ski resort in the Bludenz district in the Austrian state of Vorarlberg on the banks of the river Lech."
    },
    {
      label: "Madrid",
      icon: <FaWineGlassAlt />,
      content: "Madrid is the capital and most populous city of Spain."
    }
  ];

  return (
    <div className="App">
      <Accordion data={data} />
    </div>
  );
}

export default App;
