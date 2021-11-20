import React from "react";

import { Link } from "react-router-dom";

import "./navigation.css";
import "../../index.css";
import "./navDesktopspec.css";

function Navigation() {
  return (
    <div id="mainNavContainer">
      <nav id="linkContainer">
        <h1>Humlan Lange</h1>
        <Link className="routerLink desktopSpec" to="/">
          <p className="navLinks">Works</p>
        </Link>
        <Link className="routerLink desktopSpec" to="/cv">
          <p className="navLinks">CV</p>
        </Link>
        <Link className="routerLink desktopSpec" to="/texts">
          <p className="navLinks">Texts</p>
        </Link>
        <Link className="routerLink desktopSpec" to="/contact">
          <p className="navLinks">Contact</p>
        </Link>
      </nav>
    </div>
  );
}

export default Navigation;
