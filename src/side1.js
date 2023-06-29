// import { library } from "@fortawesome/fontawesome-svg-core";
// import { faHome, faSearch } from "@fortawesome/free-regular-svg-icons";

// library.add(faHome, faSearch);

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Side1() {
  return (
    <div>
      <div class="homes">
        <button>
        <i className="fas fa-home"></i>&nbsp;
          Home
        </button>
      </div>
      <div class="search">
        <button>
          <i className="fas fa-search"></i> &nbsp;Search
        </button>
      </div>
    </div>
  );
}
export default Side1;
