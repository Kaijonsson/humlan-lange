import React, { useState } from "react";
import "../../desktop/components/header.css";
import { useHistory } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faSortUp, faSortDown } from "@fortawesome/free-solid-svg-icons";
import "../../index.css";

function HeaderMobile() {

  return (
    <div id="pageTitleContainer">
      <h1 id="name" className="pageTitle">
        Humlan Lange
      </h1>
    </div>
  );
}

export default HeaderMobile;
