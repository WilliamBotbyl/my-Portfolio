import React from "react";
import "./Icons.css";
import { IconContext } from "react-icons";
import { BsFillTerminalFill } from "react-icons/bs";
import { SiVisualstudiocode } from "react-icons/si";
import { FaGitAlt, FaDocker } from "react-icons/fa";

function ToolsIcons() {
  return (
    <div className="icon-front-container">
      <IconContext.Provider value={{ color: "white", size: "3.7rem" }}>
        <div className="icon-wrapper">
          <BsFillTerminalFill />
          <p>Terminal / Bash</p>
        </div>
        <div className="icon-wrapper">
          <SiVisualstudiocode />
          <p>VS code</p>
        </div>
        <div className="icon-wrapper">
          <FaGitAlt />
          <p>Git</p>
        </div>
        <div className="icon-wrapper">
          <FaDocker />
          <p>Docker</p>
        </div>
      </IconContext.Provider>
    </div>
  );
}

export default ToolsIcons;
