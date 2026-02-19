// MenuPrincipal.jsx
import { Link } from "react-router-dom";
import menuData from "./data/menuData";

const MenuPrincipal = () => {
  return (
    <nav className="menu-principal">
      <ul className="menu-principal-lista">
        {menuData.map((item) => (
          <li key={item.name} className="menu-principal-item">
            <Link to={item.link} className="menu-principal-enlace">
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default MenuPrincipal;
