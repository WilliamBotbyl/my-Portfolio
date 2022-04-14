import React from "react";
import "./Icons.css";
import { DiCss3 } from "react-icons/di";
import {
  SiJavascript,
  SiTailwindcss,
  SiJest,
  SiChakraui,
} from "react-icons/si";
import { AiFillHtml5 } from "react-icons/ai";
import { FaReact } from "react-icons/fa";
import { IconContext } from "react-icons";

function Icons() {
  return (
    <div className="icon-front-container">
      <IconContext.Provider value={{ color: "white", size: "3.7rem" }}>
        <div className="icon-wrapper">
          <DiCss3 />
          <p>CSS</p>
        </div>
        <div className="icon-wrapper">
          <SiJavascript />
          <p>Javascript</p>
        </div>
        <div className="icon-wrapper">
          <SiTailwindcss />
          <p>Tailwind</p>
        </div>
        <div className="icon-wrapper">
          <SiJest />
          <p>Jest</p>
        </div>
        <div className="icon-wrapper">
          <SiChakraui />
          <p>Chakra</p>
        </div>
        <div className="icon-wrapper">
          <AiFillHtml5 />
          <p>HTML</p>
        </div>
        <div className="icon-wrapper">
          <FaReact />
          <p>React</p>
        </div>
      </IconContext.Provider>
    </div>
  );
}

export default Icons;
