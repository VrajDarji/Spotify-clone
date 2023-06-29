import { song } from "./songs"


function Ccom(x) {
  return (
    <>
    <div className="p_h" children={x}>
    <h3>{x}</h3></div>
      <div className="Playlist">
        {song.map((ele, index) => {
          const { img, h3, p } = ele;
          return (
            <div className="playlist" key={index}>
              <div className="t">
                <p>{index + 1}</p>
              </div>
              <div>
                <img src={img} alt="" />
              </div>
              <div className="t">
                <p>{h3}</p>
              </div>
              <div className="t">
                <p>{p}</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
export default Ccom