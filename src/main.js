import React,{useState} from "react";
import { ReactDOM } from "react";
import Side1 from "./side1";
import Ele1 from "./ele1";
import Side2 from "./side2";
import Nav from "./nav";
import Player from "./player";
import Greet from "./greet";
import Ccom from "./ccom";
function Main() {
  var x;
  const [showChild,setShowChild]=useState(false);
  const [showhild,setShowhild]=useState(true);
  const Click=(e)=>{
    setShowChild(true)
    setShowhild(false);
    x=e.target.innerText;
    console.log(x);
  }
  return (
    <div>
      <div className="main">
        <aside>
          <div className="side1">
            <Side1 />
          </div>
          <div className="side2">
            <Side2 />
          </div>
        </aside>
        <article>
          <nav className="navigation">
            <Nav />
          </nav>
          <div className="greet">
          <Greet/></div>
          <div className="ele1" onClick={Click}>
          {showChild && <Ccom children={x}/>}
          {showhild && <Ele1/>}
          </div>
        </article>
        <>
          <Player />
        </>
      </div>
    </div>
  );
}
export default Main;
