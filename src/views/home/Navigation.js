import React from "react";

import { Link } from "react-router-dom";

import "./navigation.css";
import "../../index.css";

function Navigation() {
  return (
    <div id="mainNavContainer">
      <nav id="linkContainer">
        <Link className="routerLink" to="/home">
          Humlan Lange
        </Link>
        <Link className="routerLink" to="/works">
          Works
        </Link>
        <Link className="routerLink" to="cv">
          CV
        </Link>
        <Link className="routerLink" to="/contact">
          Contact
        </Link>
      </nav>
    </div>
  );
}

export default Navigation;
