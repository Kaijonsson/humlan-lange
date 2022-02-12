import React, { useEffect } from "react";
import { faInstagram, faFacebook } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./contact.css";
import { Link } from "react-router-dom";

function Contact() {
  const openInNewTab = (url) => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };
  useEffect(() => {

    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });

  }, [])
  return (
    <div id="mainContactContainer">
      <p className="contactText">
        For any questions or enquiries, don't hesitate to send me a message and
        i'll get back to you as soon as i can.
      </p>
      <Link to='#' onClick={(e) => {
        window.location = 'mailto:humlan@humlanlange.se';
        e.preventDefault();
      }} id="contactInputButton">
        <p id="contactFormId">
          humlan@humlanlange.se
        </p>
      </Link>
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
          onClick={() => openInNewTab("https://www.facebook.com/humlan.lange")}
          icon={faFacebook}
          size="2x"
          className="SMicons"
        />
      </div>
    </div>
  );
}

export default Contact;
