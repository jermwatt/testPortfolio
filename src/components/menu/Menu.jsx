import React from "react";
import MenuItem from "./MenuItem";
import "./menu.scss";
export default function Menu({ menuOpen, setMenuOpen }) {
  const onClick = () => setMenuOpen(false);

  return (
    <div className={"menu " + (menuOpen && "active")}>
      <ul>
        <MenuItem itemName="Home" href="#intro" onClick={onClick} />
        <MenuItem itemName="Portfolio" href="#portfolio" onClick={onClick} />
        <MenuItem itemName="Works" href="#works" onClick={onClick} />
        <MenuItem
          itemName="Testimonials"
          href="#testimonials"
          onClick={onClick}
        />
        <MenuItem itemName="Contact" href="#contact" onClick={onClick} />
      </ul>
    </div>
  );
}
