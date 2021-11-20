import React, { useState } from "react";
import "../../desktop/components/header.css";
import { useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSortUp, faSortDown } from "@fortawesome/free-solid-svg-icons";
import "../../index.css";

function HeaderMobile() {
  const history = useHistory();
  const [showHide, setShowHide] = useState(false);

  return (
    <div id="pageTitleContainer">
      <h1 onClick={() => history.push("/")} id="name" className="pageTitle">
        Humlan Lange
      </h1>
      {showHide && (
        <h1
          onClick={() => history.push("/about")}
          id="about"
          className="pageTitle"
        >
          About
        </h1>
      )}
      {showHide ? (
        <FontAwesomeIcon
          icon={faSortUp}
          size="2x"
          onClick={() => setShowHide(!showHide)}
          className="mainTitleColor"
        />
      ) : (
        <FontAwesomeIcon
          icon={faSortDown}
          size="2x"
          className="mainFontColor"
          onClick={() => setShowHide(!showHide)}
          className="mainTitleColor"
        />
      )}
    </div>
  );
}

export default HeaderMobile;
