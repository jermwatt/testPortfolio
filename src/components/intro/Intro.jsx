import React, { useEffect, useRef } from "react";
import "./intro.scss";

import { init } from "ityped";

export default function Intro() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      strings: ["Blue", "Red"],
      backDelay: 1000,
      backSpeed: 50,
    });
  }, []);

  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/man.png" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi I'm</h2>
          <h1>Butthead</h1>
          <h3>
            A <span ref={textRef}></span>
          </h3>
        </div>
        <a href="#portfolio">
          <img src="assets/down.png" />
        </a>
      </div>
    </div>
  );
}
