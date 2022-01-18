import React from "react";
import "./mobile.css";
import "../../../index.css";
import "./tabletSpec.css";
import Paintings from "../../../globalComps/Paintings";

function HomeMobile() {
  return (

    <div id="mainMobileContainer">
      {Paintings.paintings.map((element, index) => {

        if(element.name === "grupp"){
          return null
        }else {
          return (
            <div className="mobilePictureContainer" key={index}>
              <div className="imageAndTextContainerMobile">
                <img
                  className="images tabletSp"
                  alt={element.name}
                  src={element.path}
                />
                <p className="pictureTitle">"{element.name}"</p>
                <p className="pictureTitle">{element.measurements}</p>
              </div>
            </div>
          )
        }
      })}
    </div>
  );
}

export default HomeMobile;
