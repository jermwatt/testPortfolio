import React from "react";
import { useState } from "react";
import "./portfolio.scss";
import PortfolioListItem from "./PortfolioListItem";

export default function Portfolio() {
  const [active, setActive] = useState("featured");

  const list = [
    {
      id: "featured",
      title: "Featured",
    },
    {
      id: "mobile",
      title: "Mobile App",
    },
    {
      id: "design",
      title: "Design",
    },
    {
      id: "branding",
      title: "Branding",
    },
  ];

  return (
    <div className="portfolio" id="portfolio">
      <div className="topContainer">
        <h1>Portfolio</h1>
        <ul>
          {list.map((listItem) => (
            <PortfolioListItem
              item={listItem}
              active={active}
              setActive={setActive}
            />
          ))}
        </ul>
      </div>
      <div className="bottomContainer">
        <div className="item">
          <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.pecm.co.uk%2Fdirectory%2Fwp-content%2Fuploads%2F2015%2F07%2Fplastic-tubes.jpg&f=1&nofb=1" />
          <h3> item title </h3>
        </div>
        <div className="item">
          <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.pecm.co.uk%2Fdirectory%2Fwp-content%2Fuploads%2F2015%2F07%2Fplastic-tubes.jpg&f=1&nofb=1" />
          <h3> item title </h3>
        </div>
        <div className="item">
          <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.pecm.co.uk%2Fdirectory%2Fwp-content%2Fuploads%2F2015%2F07%2Fplastic-tubes.jpg&f=1&nofb=1" />
          <h3> item title </h3>
        </div>
        <div className="item">
          <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.pecm.co.uk%2Fdirectory%2Fwp-content%2Fuploads%2F2015%2F07%2Fplastic-tubes.jpg&f=1&nofb=1" />
          <h3> item title </h3>
        </div>
        <div className="item">
          <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.pecm.co.uk%2Fdirectory%2Fwp-content%2Fuploads%2F2015%2F07%2Fplastic-tubes.jpg&f=1&nofb=1" />
          <h3> item title </h3>
        </div>
        <div className="item">
          <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.pecm.co.uk%2Fdirectory%2Fwp-content%2Fuploads%2F2015%2F07%2Fplastic-tubes.jpg&f=1&nofb=1" />
          <h3> item title </h3>
        </div>
      </div>
    </div>
  );
}
