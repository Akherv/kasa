import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import "../style/Navbar.css";

function Navbar() {
  return (
    <>
      <nav className="navbar">
        <Link to="/">
          <img src={logo} alt="logo Kasa" />
        </Link>
        <ul className="links">
          <li>
            <Link to="/">Accueil</Link>
          </li>
          <li>
            <Link to="/a_propos">A Propos</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
export default Navbar;
