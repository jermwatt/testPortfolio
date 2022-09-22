import React from "react";

export default function MenuItem({ itemName, href, onClick }) {
  return (
    <li onClick={onClick}>
      <a href={href}>{itemName}</a>
    </li>
  );
}
