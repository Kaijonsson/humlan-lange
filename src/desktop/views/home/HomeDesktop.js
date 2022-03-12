import React, { useEffect } from "react";
import "../../../index.css";
import "./desktop.css";
import "../../../mobileAndTablet/views/home/tabletSpec.css";
import Paintings from "../../../globalComps/Paintings";

function HomeDesktop() {

  return (
    <div id="mainDesktopContainer">
      {Paintings.paintings.map((element, index) => {
        if (element.name === "Åtta personer i dimma") {
          return (
            <div id="firstPictureContainer" key={index}>
              <div style={{ height: "auto", width: "40%", }} >
                <img
                  className="desktopImages tabletSp"
                  alt={element.name}
                  src={element.path}
                />
                <p className="pictureTitle">"{element.name}"</p>
                <p className="pictureTitle">{element.measurements}</p>
                <div id="textContainer">
                  <p>
                    "Our inability to achieve true knowledge of the external world
                    through the senses is a recurring theme in the work of Humlan
                    Lange. Her paintings depict human figures, mainly young girls,
                    against abstract backgrounds. Looming over the girls is a
                    feeling of alienation. They seem distant from each other and
                    the mono- chrome spaces they inhabit."
                    <br />
                    <br />
                    Erik Jönsson
                  </p>
                </div>
              </div>
            </div>
          );
        } else if (element.name === "grupp") {
          return null
        } else {
          return (
            <div className="pictureContainer" key={index}>
              <div className="imageAndTextContainer" >
                <img
                  className="desktopImages tabletSp"
                  alt={element.name}
                  src={element.path}
                />
                <p className="pictureTitle">"{element.name}"</p>
                <p className="pictureTitle">{element.measurements}</p>
              </div>
            </div>
          );
        }
      })}
    </div>
  );
}

export default HomeDesktop;
