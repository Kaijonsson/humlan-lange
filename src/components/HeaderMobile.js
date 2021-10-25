import React from "react";
import "./header.css";

import { useHistory } from "react-router-dom";

function HeaderMobile() {
  const history = useHistory();

  return (
    <div id="pageTitleContainer">
      <h1 onClick={() => history.push("/")} id="name" className="pageTitle">
        Humlan Lange
      </h1>
      <h1
        onClick={() => history.push("/about")}
        id="about"
        className="pageTitle"
      >
        About
      </h1>
    </div>
  );
}

export default HeaderMobile;
