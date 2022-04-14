import React from "react";
import "./Icons.css";
import { IconContext } from "react-icons";
import { SiInkscape, SiFigma } from "react-icons/si";
import { DiPhotoshop } from "react-icons/di";

function DesignIcons() {
  return (
    <div className="icon-front-container">
      <IconContext.Provider value={{ color: "white", size: "3.7rem" }}>
        <div className="icon-wrapper">
          <SiInkscape />
          <p>Inkscape</p>
        </div>
        <div className="icon-wrapper">
          <DiPhotoshop />
          <p>Photoshop</p>
        </div>
        <div className="icon-wrapper">
          <SiFigma />
          <p>Figma</p>
        </div>
      </IconContext.Provider>
    </div>
  );
}

export default DesignIcons;
