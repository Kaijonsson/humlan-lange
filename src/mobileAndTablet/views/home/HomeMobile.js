import React, { useState } from "react";
import "./mobile.css";
import "../../../index.css";
import "./tabletSpec.css";
import Paintings from "../../../globalComps/Paintings";

function HomeMobile() {
  const [dropDown, setDropDown] = useState(true)

  const DropDownConten = () => {
    return (
      <div style={{ position: 'fixed', top: 0, right: 0, left: 0, width: "100%", height: "50vh", backgroundColor: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }} >
        <div style={{ padding: 20, fontWeight: 'bold', position: 'absolute', top: 0, left: 20 }} onClick={() => setDropDown(false)}>
          <p>X</p>
        </div>
        <p>Galleri Belenius</p>
        <p>Ulrikagatan 13</p>
        <img src="/pictures/inbjudan.jpg" style={{ height: "60%", width: 'auto' }} alt='inbjudan' />
      </div>
    )
  }

  return (

    <div id="mainMobileContainer" >
      {dropDown && <DropDownConten />}
      {Paintings.paintings.map((element, index) => {

        if (element.name === "grupp") {
          return null
        } else {
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
