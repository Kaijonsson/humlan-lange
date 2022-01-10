import React from "react";
import "./footer.css";
import { useHistory } from "react-router-dom";


function Footer() {
  const history = useHistory()

  return (
    <div id="mainFooterContainer">
      <h1 onClick={() => history.push("/home")} >Home</h1>
      <h1 onClick={() => history.push("/about")}>About</h1>
    </div>
  );
}

export default Footer;
