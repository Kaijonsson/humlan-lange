import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";


function Cfooter() {
    return (
        <div id="copyDiv">
            <p>
              Copyright{" "}
              <span>
                <FontAwesomeIcon icon={faCopyright} />
              </span>{" "}
              2007 Humlan Lange
            </p>
            <p>
              Website created by <span>Axel Jönsson</span>
            </p>
          </div>
    )
}

export default Cfooter
