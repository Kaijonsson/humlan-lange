import React from "react";
import "./about.css";
import "./tabletSpec.css";

import { faInstagram, faFacebook } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function About() {

  const openInNewTab = (url) => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };
  return (
    <div id="mainAboutContainer">
      <div id="aboutContainer">
        <div className="itemSeparator" />
        <p>
          "Our inability to achieve true knowledge of the external world through
          the senses is a recurring theme in the work of Humlan Lange. Her
          paintings depict human figures, mainly young girls, against abstract
          backgrounds. Looming over the girls is a feeling of alienation."
        </p>
        <p>Erik Jönsson</p>
      </div>

      <div className="itemSeparator" />

      <div id="contactContainer">
        <img
          src="pictures/paintings.jpg"
          alt="paintings"
          className="collection mediaQSep"
        />

        <div className="itemSeparator" />
        <div className="mediaQSep">
          <p id="aboutContactText">
            Want to get in touch? Reach out via social media links bellow.
            <br />
            Or send me an email and I'll get back to you as soon as i can!
          </p>
          <form action="mailto:humlan@humlanlange.se" method="POST" id="formId">
            <button type="submit" id="inputButton">
              humlan@humlanlange.se
            </button>
          </form>
          <div id="contactIconContainer">
            <FontAwesomeIcon
              onClick={() =>
                openInNewTab("https://www.instagram.com/humlanlange/?hl=en")
              }
              icon={faInstagram}
              size="2x"
              className="SMicons"
            />
            <FontAwesomeIcon
              onClick={() => openInNewTab("https://www.facebook.com/humlan.lange")}
              icon={faFacebook}
              size="2x"
              className="SMicons"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
