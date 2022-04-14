import React from "react";
import "./Icons.css";
import { SiPhp, SiNodedotjs, SiGraphql, SiApollographql } from "react-icons/si";
import { FaLaravel } from "react-icons/fa";
import { IconContext } from "react-icons";

function BackendIcons() {
  return (
    <div className="icon-front-container">
      <IconContext.Provider value={{ color: "white", size: "3.7rem" }}>
        <div className="icon-wrapper">
          <SiPhp />
          <p>PHP</p>
        </div>
        <div className="icon-wrapper">
          <SiNodedotjs />
          <p>Node</p>
        </div>
        <div className="icon-wrapper">
          <SiGraphql />
          <p>GraphQL</p>
        </div>
        <div className="icon-wrapper">
          <SiApollographql />
          <p>Apollo</p>
        </div>
        <div className="icon-wrapper">
          <FaLaravel />
          <p>Laravel</p>
        </div>
      </IconContext.Provider>
    </div>
  );
}

export default BackendIcons;
