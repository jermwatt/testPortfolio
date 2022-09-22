import React from "react";
import "./portfoliolistitem.scss";

export default function PortfolioListItem({ item, active, setActive }) {
  return (
    <div className="portfoliolistitem">
      <li
        id={item.id}
        className={
          active == item.id ? "portfoliolistitem active" : "portfoliolistitem"
        }
        onClick={() => setActive(item.id)}
      >
        {item.title}
      </li>
    </div>
  );
}
