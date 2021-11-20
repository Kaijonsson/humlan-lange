import { faInstagram, faFacebook } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./footer.css";

function Footer() {
  const openInNewTab = (url) => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };

  return (
    <div id="mainFooterContainer">
      <FontAwesomeIcon
        onClick={() =>
          openInNewTab("https://www.instagram.com/humlanlange/?hl=en")
        }
        className="icons"
        icon={faInstagram}
        size="2x"
      />
      <div
        style={{
          width: "20px",
        }}
      ></div>
      <FontAwesomeIcon
        onClick={() => openInNewTab("https://www.facebook.com/humlan.lange")}
        className="icons"
        icon={faFacebook}
        size="2x"
      />
    </div>
  );
}

export default Footer;
