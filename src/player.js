import React, { useState } from "react";
import { useRef } from "react";
import { song } from "./songs";
import { Like } from "./like";
var i = 0,
  j = 0;
function Player() {
  const myRef = useRef(null);
  const Ref = useRef(null);
  const iRef = useRef(null);
  const audioR = useRef(null);
  const [ike, setlike] = useState([]);
  var r = 100,
    y = 1;
  var ppe, pps;
  function vol() {
    if (iRef.current.classList.contains("fa-volume-high")) {
      iRef.current.classList.add("fa-volume-xmark");
      iRef.current.classList.remove("fa-volume-high");
      Ref.current.value = 0;
      audioR.current.volume = 0;
    } else {
      iRef.current.classList.remove("fa-volume-xmark");
      iRef.current.classList.add("fa-volume-high");
      Ref.current.value = r;
      audioR.current.volume = y;
    }
  }
  function cg() {
    audioR.current.volume = Ref.current.value / 100;
    r = Ref.current.value;
    y = audioR.current.volume;
  }
  const random = useRef(null);
  const backward = useRef(null);
  const play = useRef(null);
  const iplay = useRef(null);
  const forward = useRef(null);
  const repeat = useRef(null);
  const slider = useRef(null);
  const ps = useRef(null);
  const pe = useRef(null);

  const p = () => {
    iplay.current.classList.add("fa-pause");
    iplay.current.classList.remove("fa-play");
    audioR.current.play();
  };

  const src = song[i].src;
  const Play = () => {
    if (iplay.current.classList.contains("fa-play")) {
      p();
    } else {
      iplay.current.classList.remove("fa-pause");
      iplay.current.classList.add("fa-play");
      audioR.current.pause();
    }
  };
  const update = () => {
    var x = audioR.current.duration;
    audioR.current.currentTime = slider.current.value * (x / 100);
  };
  const simg = useRef(null);
  const sh = useRef(null);
  const sp = useRef(null);
  console.log(song.length);
  var ran = 0;
  const Random = () => {
    if (ran) {
      ran = 0;
      random.current.style.color = "white";
    } else {
      ran = 1;
      random.current.style.color = "green";
    }
  };
  const rann = () => {
    if (ran) {
      i = Math.floor(Math.random() * song.length);
    }
  };
  const Backward = () => {
    i--;
    if (i < 0) {
      i = song.length - 1;
    }
    if (ran) {
      rann();
    }
    console.log(i);
    simg.current.src = song[i].img;
    sh.current.innerText = song[i].h3;
    sp.current.innerText = song[i].p;
    audioR.current.src = song[i].src;
    p();
  };
  const Forward = () => {
    i++;
    if (i > song.length - 1) {
      i = 0;
    }
    if (ran) {
      rann();
    }
    simg.current.src = song[i].img;
    sh.current.innerText = song[i].h3;
    sp.current.innerText = song[i].p;
    audioR.current.src = song[i].src;
    p();
  };
  const T = () => {
    var x = audioR.current.duration / 60;
    console.log(x);
    x = Math.floor(x);
    var y = audioR.current.duration % 60;
    y = Math.floor(y);
    var q = ("0" + y).slice(-2);
    var w = ("0" + x).slice(-2);
    var u = w + ":" + q;
    pe.current.innerHTML = u;
    ppe = u;
  };
  const s_u = () => {
    var a = Math.floor(audioR.current.currentTime / 60);
    var b = Math.floor(audioR.current.currentTime % 60);
    var c = ("0" + a).slice(-2);
    var d = ("0" + b).slice(-2);
    var e = c + ":" + d;
    ps.current.innerText = e;
    pps = e;

    slider.current.value =
      (audioR.current.currentTime / audioR.current.duration) * 100;

    if (ppe === pps) {
      Forward();
    }
  };
  const Repeat = () => {
    console.log(repeat.current.style.color);
    if (repeat.current.classList.contains("fa-repeat")) {
      repeat.current.style.color = "green";
      repeat.current.classList.add("fa-arrows-repeat-1");
      repeat.current.classList.remove("fa-repeat");
    } else {
      repeat.current.style.color = "#888";
    }
  };
  const h = useRef(null);
  const ih = useRef(null);
  const like = () => {
    console.log(song[i].like);
    console.log(i);
    if (song[i].like === 0) {
      ih.current.classList.add("fas");
      ih.current.classList.remove("far");
      h.current.style.color = "green";
      song[i].like=1;
    } else {
      ih.current.classList.add("far");
      ih.current.classList.remove("fas");
      h.current.style.color = "white";
      song[i].like=0;
    }
  };
  return (
    <div className="player">
      <div className="start">
        <div>
          <img ref={simg} src={song[i].img} alt="" />
        </div>
        <div>
          <h3 ref={sh}>{song[i].h3}</h3>
          <p ref={sp}>{song[i].p}</p>
        </div>
        <button ref={h} onClick={like}>
          <i ref={ih} className='far fa-heart'></i>
        </button>
      </div>
      <div className="middle">
        <audio ref={audioR} onLoadedMetadata={T} onTimeUpdate={s_u}>
          <source src={src} type="audio/mp3" />
        </audio>
        <div className="buttons">
          <button ref={random} onClick={Random}>
            <i className="fas fa-random"></i>
          </button>
          <button ref={backward} onClick={Backward}>
            <i className="fas fa-backward"></i>
          </button>
          <button ref={play} onClick={Play}>
            <i ref={iplay} className="fas fa-play pb"></i>
          </button>
          <button ref={forward} onClick={Forward}>
            <i className="fas fa-forward"></i>
          </button>
          <button onClick={Repeat}>
            <i ref={repeat} className="fa-solid fa-repeat"></i>
          </button>
        </div>
        <div className="bar">
          <p ref={ps}>00:00</p>
          <input
            ref={slider}
            type="range"
            name=""
            id=""
            min={0}
            max={100}
            onChange={update}
          />
          <p ref={pe}>00:00</p>
        </div>
      </div>
      <div className="end">
        <button>
          <i className="fas fa-book"></i>
        </button>
        <button>
          <i className="fas fa-bars"></i>
        </button>
        <button>
          <i className="fas fa-desktop"></i>
        </button>
        <button ref={myRef} onClick={vol}>
          <i ref={iRef} className="fas fa-volume-high"></i>
        </button>
        <input
          ref={Ref}
          type="range"
          name=""
          id=""
          min={0}
          max={100}
          className="vol"
          onChange={cg}
        />
      </div>
    </div>
  );
}
export default Player;
