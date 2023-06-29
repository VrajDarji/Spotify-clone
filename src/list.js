import { ele1_data } from "./ele1_data";
import { useRef } from "react";

function List() {
  const myRef = useRef([]);
  const Col = (index) => {
    const e = myRef.current[index];
    if (e) {
      e.style.backgroundColor = "#383838";
    }
  };
  const Res = (index) => {
    const e = myRef.current[index];
    if (e) {
      e.style.backgroundColor = "#1a1a1a";
    }
  };
  return ele1_data.map((list, index) => {
    const { img, title } = list;
    return (
      <div
        className="list"
        ref={(el) => (myRef.current[index] = el)}
        onMouseEnter={() => {
          Col(index);
        }}
        onMouseLeave={() => {
          Res(index);
        }}
      >
        <div>
          <img src={img} alt="" />
        </div>
        <div>
          <h3>{title}</h3>
          <p>Playlist</p>
        </div>
      </div>
    );
  });
}
export default List;
