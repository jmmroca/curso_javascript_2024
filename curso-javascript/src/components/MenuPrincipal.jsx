// MenuPrincipal.jsx
import menuData from "./data/menuData";

const MenuPrincipal = () => {
  return (
    <nav className="menu-principal">
      <ul className="menu-principal-lista">
        {menuData.map((item) => (
          <li key={item.name} className="menu-principal-item">
            <a href={item.link} className="menu-principal-enlace">
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default MenuPrincipal;
