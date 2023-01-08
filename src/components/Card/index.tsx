import "./styles.css";
import { NavLink } from "react-router-dom";

export default function Card() {
  return (
    <div className="container card">
      <NavLink
        to="computers"
        className={({ isActive }) =>
          isActive ? "card-item menu-active" : "card-item"
        }
      >
        Computadores
      </NavLink>
      <NavLink
        to="electronics"
        className={({ isActive }) =>
          isActive ? "card-item  menu-active" : "card-item"
        }
      >
        Eletrônicos
      </NavLink>
      <NavLink
        to="books"
        className={({ isActive }) =>
          isActive ? "card-item  menu-active" : "card-item"
        }
      >
        Livros
      </NavLink>
    </div>
  );
}
