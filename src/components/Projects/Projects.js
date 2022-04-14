import React from "react";
import "./Projects.css";
import { Container, Row } from "react-bootstrap";
// import Example from "../Images/example.webp";
import projectTwo from "../Images/wordleCloneImg.png";
import projectThree from "../Images/colorPicker.png";
import ProjectOne from "../Images/sudokuCloneImg.png";
import { FiGithub } from "react-icons/fi";
import { BiShow } from "react-icons/bi";
import { IconContext } from "react-icons";
import ProjectCards from "./ProjectCards/ProjectCards";
import {
  WORDLE_CLONE,
  SUDOKU_SOLVER,
  COLOR_PICKER,
  COLOR_WEBSITE,
  WORDLE_WEBSITE,
} from "./Links/ProjectLinks";

function Projects() {
  return (
    <div id="projects" className="projects-main-container">
      <Container style={{ marginBottom: "1px solid grey" }}>
        <div className="EXP-inner-container">
          <Row>
            <div className="EXP-section-wrapper">
              <h2 className="numbers">05.</h2>
              <h2 className="section-title">Projects</h2>
            </div>
          </Row>
          <Row style={{ paddingTop: "7vh", marginLeft: "10px" }}>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <div className="opening-wrapper">
                <p className="featured">Featured Project</p>
                <p className="exchange">Sudoku Solver</p>
                <div className="project-desc-wrapper">
                  <p className="project-disc">
                    This project is a Single terminal App, developed using Java
                    In order to see the value of 2d arrays. This project was a
                    good introduction for me on how to handle and work with 2d
                    arrays in Java.
                  </p>
                </div>
                <span className="project-stack">
                  <p className="stck">Java</p>
                  <p className="stck">Eclipse</p>
                  {/* <p className="stck">Javascript</p> */}
                </span>
                <span className="project-icon">
                  <IconContext.Provider
                    value={{ color: "#8FCCF3", size: "1.5rem" }}
                  >
                    <a href={SUDOKU_SOLVER}>
                      <div className="icon-prj-wrapper">
                        <FiGithub />
                      </div>
                    </a>
                    {/* <div className="icon-prj-wrapper">
                      <BiShow />
                    </div> */}
                  </IconContext.Provider>
                </span>
              </div>
              <div>
                <img
                  className="project-img"
                  src={ProjectOne}
                  alt="ex"
                  style={{
                    height: "300px",
                    width: "600px",
                    marginLeft: "50px",
                    borderRadius: "10px",
                  }}
                />
              </div>
            </div>
          </Row>
          <div className="divider-prjct"></div>
          {/* Second project section */}
          <Row style={{ paddingTop: "7vh" }}>
            <div style={{ display: "flex", flexDirection: "row-reverse" }}>
              <div className="opening-wrapper-two">
                <p className="featured">Featured Project</p>
                <p className="exchange">Color picker</p>
                <div className="project-desc-wrapper-two">
                  <p className="project-disc">
                    This project is a Single Page App, developed in React.js.
                    This app allows the user to enter any hex color value, and
                    the program will show back a pallate of of the color in
                    different shades and values.
                  </p>
                </div>
                <div className="proj-two-icon-container">
                  <span className="project-stack-t">
                    <p className="stck">React</p>
                    <p className="stck">Chakraui</p>
                    <p className="stck">Boot-strap</p>
                  </span>
                  <span className="project-icon-t">
                    <IconContext.Provider
                      value={{ color: "#8FCCF3", size: "1.5rem" }}
                    >
                      <a href={COLOR_PICKER}>
                        <div className="icon-prj-wrapper">
                          <FiGithub />
                        </div>
                      </a>
                      <a href={COLOR_WEBSITE}>
                        <div className="icon-prj-wrapper">
                          <BiShow />
                        </div>
                      </a>
                    </IconContext.Provider>
                  </span>
                </div>
              </div>
              <div>
                <img
                  className="project-img"
                  // className="img-t"
                  src={projectThree}
                  alt="ex"
                  style={{
                    height: "300px",
                    width: "600px",
                    borderRadius: "10px",
                  }}
                />
              </div>
            </div>
          </Row>
          <div className="divider-prjct"></div>

          <Row style={{ paddingTop: "7vh", marginLeft: "10px" }}>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <div className="opening-wrapper">
                <p className="featured">Featured Project</p>
                <p className="exchange">Wordle clone</p>
                <div className="project-desc-wrapper">
                  <p className="project-disc">
                    This project is a Single Page App, developed in React.js.
                    This project helped me gain more practical experience using
                    react context.
                  </p>
                </div>
                <span className="project-stack">
                  <p className="stck">React</p>
                  <p className="stck">CSS</p>
                  <p className="stck">Javascript</p>
                </span>
                <span className="project-icon">
                  <IconContext.Provider
                    value={{ color: "#8FCCF3", size: "1.5rem" }}
                  >
                    <div className="icon-prj-wrapper">
                      <a href={WORDLE_CLONE}>
                        <FiGithub />
                      </a>
                    </div>
                    <div className="icon-prj-wrapper">
                      <a href={WORDLE_WEBSITE}>
                        <BiShow className="view-icon" />
                      </a>
                    </div>
                  </IconContext.Provider>
                </span>
              </div>
              <div>
                <img
                  className="project-img"
                  src={projectTwo}
                  alt="ex"
                  style={{
                    height: "300px",
                    width: "600px",
                    marginLeft: "50px",
                    borderRadius: "10px",
                  }}
                />
              </div>
            </div>
          </Row>
          <div className="divider-prjct"></div>
          <Row style={{ paddingTop: "2vh", marginLeft: "10px" }}>
            <Row>
              <div className="project-card-wrapper">
                <ProjectCards
                  projectTitle="Movie App"
                  projectInfo="This project is a Multi-Page App, developed in React.js and express. This project helped me gain more practical experience using react context and fetching data with user input."
                  stackOne="React"
                  stackTwo="CSS"
                  stackThree="Express"
                />
                <ProjectCards
                  projectTitle="Crypto App"
                  projectInfo="This project is a Single Page App, developed in React.js. This project allows the user to enter a specific crypto currency, and then see the value compared to the U.S. dollar."
                  stackOne="React"
                  stackTwo="CSS"
                  stackThree="Bootstrap"
                />
                <ProjectCards
                  projectTitle="Facebook Clone"
                  projectInfo="This project is a clone of facebook, not as fully loaded. However this app uses login credentials to allow the user to create a profile, and make posts."
                  stackOne="React"
                  stackTwo="CSS"
                  stackThree="MongoDB"
                />
              </div>
            </Row>
            <Row style={{ marginTop: "20px" }}>
              <div className="project-card-wrapper">
                <ProjectCards
                  projectTitle="Currency converter"
                  projectInfo="This project that lets the user and an amount in any currency and see the exchange rate compared to another currency."
                  stackOne="React"
                  stackTwo="Material ui"
                  stackThree="Chakra"
                />
                <ProjectCards
                  projectTitle="Message app"
                  projectInfo="This is a simple message app that allows the user tp send messages, this project helped me gain an understanding for Socket.io."
                  stackOne="React"
                  stackTwo="socket.io"
                  stackThree="Bootstrap"
                />
              </div>
            </Row>
          </Row>
        </div>
      </Container>
    </div>
  );
}

export default Projects;
