import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import "../style/Navbar.css";

function Navbar() {
  return (
    <>
      <nav className="navbar">
        <img src={logo} alt="logo Kasa" />
        <ul className="links">
          <li>
            <Link to="/">Accueil</Link>
          </li>
          <li>
            <Link to="/about">A Propos</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
export default Navbar;
