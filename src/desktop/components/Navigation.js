import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";

import "./navigation.css";
import "../../index.css";
import "./navDesktopspec.css";
import { useHistory } from "react-router-dom";
function Navigation() {

  const history = useHistory()
  const [className, setClassName] = useState('')

  useEffect(() => {
    setTitleColor(history.location.pathname)
  }, [])


  const setTitleColor = (pathClicked) => {
    setClassName(pathClicked)
  }


  return (
    <div id="mainNavContainer">
      <nav id="linkContainer">
        <Link className="routerLink desktopSpec" to='/' onClick={() => setTitleColor('/')} >
          <h1 className={className === '/' ? 'navLinksOrange' : 'navLinks'} >Humlan Lange</h1>
        </Link>
        <Link className="routerLink desktopSpec" to="/works" onClick={() => setTitleColor('/works')} >
          <p className={className === '/works' ? 'navLinksOrange' : 'navLinks'} >Works</p>
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
