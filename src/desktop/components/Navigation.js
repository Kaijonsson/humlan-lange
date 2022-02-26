import React, { useState } from "react";

import { Link } from "react-router-dom";

import "./navigation.css";
import "../../index.css";
import "./navDesktopspec.css";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

function Navigation() {

  const history = useHistory()
  const [className, setClassName] = useState('')

  const setTitleColor = (pathClicked) => {
    setClassName(pathClicked)
  }


  return (
    <div id="mainNavContainer">
      <nav id="linkContainer">
        <h1 style={{ color: 'rgba(238, 155, 0, 0.8)' }} >Humlan Lange</h1>
        <Link className="routerLink desktopSpec" to="/" onClick={() => setTitleColor('/')} >
          <p className={className === '/' ? 'navLinksOrange' : 'navLinks'} >Works</p>
        </Link>
        <Link className="routerLink desktopSpec" to="/cv" onClick={() => setTitleColor('/cv')}>
          <p className={className === '/cv' ? 'navLinksOrange' : 'navLinks'}>CV</p>
        </Link>
        <Link className="routerLink desktopSpec" to="/texts" onClick={() => setTitleColor('/texts')}>
          <p className={className === '/texts' ? 'navLinksOrange' : 'navLinks'}>Texts</p>
        </Link>
        <Link className="routerLink desktopSpec" to="/contact" onClick={() => setTitleColor('/contact')}>
          <p className={className === '/contact' ? 'navLinksOrange' : 'navLinks'}>Contact</p>
        </Link>
      </nav>
    </div>
  );
}

export default Navigation;
