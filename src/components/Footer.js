import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo_white.svg";
import "../style/Footer.css";

function Footer() {
  const { pathname } = useLocation();
  //to remove for styling purpose the footer if we are on 404 page
  const regex = /\/locations|\/$|\/home|\/accueil|\/a_propos|\/about/;
  if (!pathname.match(regex)) return null;

  return (
    <nav className="footer">
      <Link to="/">
        <img src={logo} alt="logo Kasa" />
      </Link>
      <p>&#169;&nbsp;2020 Kasa. All rights reserved</p>
    </nav>
  );
}
export default Footer;
