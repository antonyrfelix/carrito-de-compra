import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
const Header = (props) => {
  console.log(props);
  return (
    <nav className="menu">
      <div className="menu-logo">
        <Link to="/">
          <img
            src="img/logo-header.png"
            id="logo-header"
            alt="Este es el logo de la tienda"
          />
        </Link>
      </div>
      <ul className="menu-links">
        {props.linksHeader.map((link, index) => {
          return (
            <li key={index}>
              <Link to={link.url} className="links-header">
                {link.nombre}
              </Link>
            </li>
          );
        })}
      </ul>
      <i className="fa-sharp fa-light fa-house"></i>
    </nav>
  );
};
export default Header;
