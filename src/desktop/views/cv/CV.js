import React, { useState } from "react";
import "./cv.css";
import FullExhib from "./exhibitions/FullExhib";
import PartialEx from "./exhibitions/PartialEx";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faSortUp, faSortDown } from "@fortawesome/free-solid-svg-icons";

function CV() {
  const [showOrHide, setShowOrHide] = useState(false);
  const buttonMessage = !showOrHide ? "Show full CV" : "Minimize";

  const showHideBtn = () => {
    setShowOrHide(!showOrHide);
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };
  return (
    <div id="cvContainer">
      <button onClick={() => showHideBtn()} id="showHideBtn">
        <div id="buttonDiv">
          {buttonMessage}
          <FontAwesomeIcon icon={!showOrHide ? faSortDown : faSortUp} />
        </div>
      </button>
      {!showOrHide ? <PartialEx /> : <FullExhib />}
    </div>
  );
}

export default CV;
