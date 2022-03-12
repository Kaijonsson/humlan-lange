import React, { useState } from "react";
import "./footer.css";
import { useHistory } from "react-router-dom";


function Footer() {
  const [className, setClassName] = useState()
  const history = useHistory()
  console.log(history)

  const setTitleColor = (pathClicked) => {
    setClassName(pathClicked)
  }

  return (
    <div id="mainFooterContainer">
      <h1 className={className === "/" ? "orangeTitle title" : "regular title"} onClick={() => setTitleColor("/")} >Home</h1>
      <h1 className={className === "/about" ? "orangeTitle title" : "regular title"} to='about' onClick={() => setTitleColor("/about")}>About</h1>
    </div>
  );
}

export default Footer;
