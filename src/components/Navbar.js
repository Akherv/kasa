import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.svg";
import "../style/Navbar.css";

function Navbar() {
  const location = useLocation();

  return (
    <nav className="navbar">
      <Link to="/">
        <img src={logo} alt="logo Kasa" />
      </Link>
      <ul className="links">
        <li
          className={
            location.pathname === "/" ||
            location.pathname === "/home" ||
            location.pathname === "/accueil"
              ? "links_active"
              : ""
          }
        >
          <Link to="/">Accueil</Link>
        </li>
        <li
          className={
            location.pathname === "/a_propos" || location.pathname === "/about"
              ? "links_active"
              : ""
          }
        >
          <Link to="/a_propos">A Propos</Link>
        </li>
      </ul>
    </nav>
  );
}
export default Navbar;
