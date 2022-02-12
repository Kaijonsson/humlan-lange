import React from "react";
import "./cv.css";
import PartialEx from "./exhibitions/PartialEx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePdf } from "@fortawesome/free-solid-svg-icons"
import { Link } from "react-router-dom";

function CV() {

  return (
    <div id="cvContainer">
      <div className="CvLink" >
        <p>Download Full CV</p>
        <Link to="/assets/CV.pdf" target="_blank" download><FontAwesomeIcon color="black" size="4x" icon={faFilePdf} /></Link>
        <p className="subTitle">(Swedish)</p>
      </div>
      <PartialEx />
    </div>
  );
}

export default CV;
