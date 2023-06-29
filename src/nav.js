import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React from "react"
function Nav() {
  return (
    <>
      <div className="start">
        <button>
          <i className="fas fa-chevron-left"></i>
        </button>
        <button>
          <i className="fas fa-chevron-right"></i>
        </button>
      </div>
      <div className="end">
        <button className="upgrade">Upgrade</button>
        <button>
          <i className="fa fa-users"></i>
        </button>
        <button>
          <i className="fa fa-user"></i>
        </button>
      </div>
    </>
  );
}
export default Nav