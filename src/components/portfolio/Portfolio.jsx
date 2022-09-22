import React, { useEffect } from "react";
import { useState } from "react";
import "./portfolio.scss";
import PortfolioListItem from "./PortfolioListItem";
import {
  featuredPortfolio,
  webPortfolio,
  mobilePortfolio,
  designPortfolio,
  contentPortfolio,
} from "../../data/data";
import { BrandingWatermark } from "@material-ui/icons";

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

export default function Portfolio() {
  const [data, setData] = useState([]);
  const [active, setActive] = useState("featured");

  useEffect(() => {
    switch (active) {
      case "featured":
        setData(featuredPortfolio);
        break;
      case "mobile":
        setData(mobilePortfolio);
        break;
      case "design":
        setData(designPortfolio);
        break;
      case "web":
        setData(webPortfolio);
        break;
      default:
        setData(featuredPortfolio);
    }
  }, [active]);

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
        {data.map((d) => (
          <div className="item">
            <img src={d.img} alt="" />
            <h3> {d.title} </h3>
          </div>
        ))}
      </div>
    </div>
  );
}
