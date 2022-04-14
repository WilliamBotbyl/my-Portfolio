import React from "react";
import "./Icons.css";
import { IconContext } from "react-icons";
import { SiMongodb, SiPostgresql, SiMysql } from "react-icons/si";

function DBIcons() {
  return (
    <div className="icon-front-container">
      <IconContext.Provider value={{ color: "white", size: "3.7rem" }}>
        <div className="icon-wrapper">
          <SiMongodb />
          <p>MongoDB</p>
        </div>
        <div className="icon-wrapper">
          <SiPostgresql />
          <p>Postgresql</p>
        </div>
        <div className="icon-wrapper">
          <SiMysql />
          <p>Mysql</p>
        </div>
      </IconContext.Provider>
    </div>
  );
}

export default DBIcons;
