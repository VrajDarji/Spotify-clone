import React, { useRef } from "react";
import { ele1_data } from "./ele1_data";
function Ele1() {
  const myRefs = useRef([]);

  const Col = (index) => {
    const element = myRefs.current[index];
    if (element) {
      element.style.backgroundColor = "#554f4f";
    }
  };

  const resetColor = (index) => {
    const element = myRefs.current[index];
    if (element) {
      element.style.backgroundColor = "#383838";
    }
  };

  return (
    <>
      {ele1_data.map((ele, index) => {
        const { img, title } = ele;
        return (
              <div
                key={index}
                className="container"
                ref={(el) => (myRefs.current[index] = el)}
                onMouseEnter={() => Col(index)}
                onMouseLeave={() => resetColor(index)}
              >
                <img src={img} className="ele1_img" alt="" />
                <h1>{title}</h1>
              </div>
        );
      })}
    </>
  );
}

export default Ele1;
