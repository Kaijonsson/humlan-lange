import React from "react";
import { faInstagram, faFacebook } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./contact.css";

function Contact() {
  const openInNewTab = (url) => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };
  return (
    <div id="mainContactContainer">
      <div id="imgContainer">
        <img src="pictures/humlan8.jpg" alt="paintings" id="contactPic" />
      </div>
      <div id="contactForms">
        <p className="contactText">
          For any questions or enquiries, don't hesitate to send me a message
          and i'll get back to you as soon as i can.
        </p>
        <form
          action="mailto:humlan@humlanlange.se"
          method="POST"
          id="contactFormId"
        >
          <button type="submit" id="contactInputButton">
            humlan@humlanlange.se
          </button>
        </form>
        <p className="contactText">
          Look me up on Instagram and Facebook for most recent updates.
        </p>
        <div className="iconContainer">
          <FontAwesomeIcon
            onClick={() =>
              openInNewTab("https://www.instagram.com/humlanlange/?hl=en")
            }
            icon={faInstagram}
            size="2x"
            className="SMicons"
          />
          <FontAwesomeIcon
            onClick={() =>
              openInNewTab("https://www.facebook.com/humlan.lange")
            }
            icon={faFacebook}
            size="2x"
            className="SMicons"
          />
        </div>
      </div>
    </div>
  );
}

export default Contact;
