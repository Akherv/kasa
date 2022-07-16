import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo_white.svg";
import "../style/Footer.css";

function Footer() {
  const { pathname } = useLocation();
  const regex = /\/locations|\/$|\/a_propos/;
  if (!pathname.match(regex)) return null;

  return (
    <>
      <nav className="footer">
        <Link to="/">
          <img src={logo} alt="logo Kasa" />
        </Link>
        <p>&#169;&nbsp;2020 Kasa. All rights reserved</p>
      </nav>
    </>
  );
}
export default Footer;
