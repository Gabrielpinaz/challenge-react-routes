import "./styles.css";
import homeImg from "../../assets/home.svg";
import { Link, NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <nav className="header-content-container container">
        <div>
          <NavLink
            to="/home"
            className={({ isActive }) =>
              isActive ? "menu-item menu-active" : "menu-item"
            }
          >
            Início
          </NavLink>
          <NavLink
            to="/products"
            className={({ isActive }) =>
              isActive ? "menu-item menu-active" : "menu-item"
            }
          >
            Produtos
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "menu-item menu-active" : "menu-item"
            }
          >
            Sobre nós
          </NavLink>
        </div>
        <div className="menu-icon">
          <Link to="/">
            <img src={homeImg} alt="Home" />
          </Link>
        </div>
      </nav>
    </header>
  );
}
