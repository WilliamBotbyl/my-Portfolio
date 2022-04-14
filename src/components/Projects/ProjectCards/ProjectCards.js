import React from "react";
import "./ProjectCards.css";

function ProjectCards(props) {
  return (
    <div className="card-container">
      <div className="card-title">
        <p className="title-Card">{props.projectTitle}</p>
      </div>
      <div>
        <p>{props.projectInfo}</p>
      </div>
      <div></div>
      <span className="project-stack">
        <p className="stck">{props.stackOne}</p>
        <p className="stck">{props.stackTwo}</p>
        <p className="stck">{props.stackThree}</p>
      </span>
    </div>
  );
}

export default ProjectCards;
