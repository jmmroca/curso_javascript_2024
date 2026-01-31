// MenuPrincipal.jsx
import React from "react";
import menuData from "./data/menuData";

const MenuPrincipal = () => {
  
  return (
    <nav
      style={{
        backgroundColor: "#ffffff",
        padding: "10px 20px",
      }}
    >
      <ul
        style={{
          listStyle: "none",
          display: "flex",
          gap: "20px",
          margin: 0,
          padding: 0,
        }}
      >
        {menuData.map((item) => (
          <li key={item.name} className="menu-principal-item">
            <a
              href={item.link}
              style={{ color: "#000000", textDecoration: "none" }}
            >
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default MenuPrincipal;
