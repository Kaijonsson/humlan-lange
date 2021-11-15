import React, { useState } from "react";
import "./cv.css";
import FullExhib from "./exhibitions/FullExhib";
import PartialEx from "./exhibitions/PartialEx";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faSortUp, faSortDown } from "@fortawesome/free-solid-svg-icons";

function CV() {
  const [showOrHide, setShowOrHide] = useState(false);

  const buttonMessage = !showOrHide ? "Show full list" : "Hide full list";

  return (
    <div id="cvContainer">
      <button onClick={() => setShowOrHide(!showOrHide)}>
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
