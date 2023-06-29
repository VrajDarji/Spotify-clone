import List from "./list";


function Side2() {
  return (
    <div>
      <nav>
        <div class="nav-upper">
          <div class="start">
            <i class="bx bx-library"></i>Your Libraries
          </div>
          <div class="end">
            <button class="ad">
              <i class="fas fa-plus"></i>
            </button>
            <button class="arr">
              <i class="fas fa-arrow-right"></i>
            </button>
          </div>
        </div>
        <div class="nav-lower">
          <div>
            <button>Playlist</button>
          </div>
          <div>
            <button>Album</button>
          </div>
          <div>
            <button>Artist</button>
          </div>
        </div>
      </nav>
      <div className="List">
        <List />
      </div>
    </div>
  );
}
export default Side2;
