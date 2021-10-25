import React from "react";

import { Link } from "react-router-dom";

import "./navigation.css";
import "../index.css";

function Navigation() {
  return (
    <div id="mainNavContainer">
      <nav id="linkContainer">
        <Link className="routerLink" to="/home">
          <p className="navLinks">Humlan Lange</p>
        </Link>

        <Link className="routerLink" to="cv">
          <p className="navLinks">CV</p>
        </Link>
        <Link className="routerLink" to="/contact">
          <p className="navLinks">Contact</p>
        </Link>
      </nav>
    </div>
  );
}

export default Navigation;
