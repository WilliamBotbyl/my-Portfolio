import React, { useState } from "react";
import "./Education.css";
import { FaUniversity } from "react-icons/fa";
import { IconContext } from "react-icons";
import { AiFillCheckCircle } from "react-icons/ai";
import { MdOutlineWork } from "react-icons/md";
import { Container, Row, Col, Nav } from "react-bootstrap";

function Education() {
  const [uniInfo, setUniInfo] = useState(true);
  const [workInfo, setWorkInfo] = useState(true);

  const toggleInfo = (e) => {
    if (e.target.id === "uni") {
      setUniInfo(true);
      setWorkInfo(false);
    } else if (e.target.id === "work") {
      setUniInfo(false);
      setWorkInfo(true);
    }
  };

  return (
    <div id="education" className="education-section">
      <Container>
        <div className="ED-inner-container">
          <Row>
            <div className="Ed-section-wrapper">
              <h2 className="numbers">02.</h2>
              <h2 className="section-title">Education</h2>
            </div>
          </Row>
          <Row>
            <Col md={5}>
              <h3 className="school">Computer Science - MU</h3>
              <p id="Ed-about">
                I studied &nbsp;
                <span className="about-blue">computer science</span> &nbsp; at
                Brookdale in NJ. Here i participated in many academic events. I
                was involved in the making of our school website chat bot that
                connected students with immediate support. I have a current GPA
                of 3.7.
              </p>
            </Col>
            <Col md={5}>
              <div className="toggle-section">
                <div
                  style={{
                    marginLeft: "7rem",
                    width: "100%",
                  }}
                >
                  <p>
                    During my time at Monmouth university, I was able to achieve
                    some goals along the way.
                  </p>
                </div>
                <Nav variant="tabs" className="ed-nav">
                  {/* <Nav.Item> */}
                  <Nav.Link
                    eventKey="link-1"
                    className="link-ED"
                    id="uni"
                    onClick={toggleInfo}
                  >
                    {uniInfo && !workInfo ? (
                      <>
                        <IconContext.Provider
                          value={{ color: "black", size: "1.4em" }}
                        >
                          <FaUniversity
                            onClick={toggleInfo}
                            style={{
                              marginRight: "7px",

                              alignItems: "center",
                              justifyContent: "center",
                            }}
                          />
                          University
                        </IconContext.Provider>
                      </>
                    ) : (
                      <>
                        <IconContext.Provider
                          value={{
                            color: "white",
                            size: "1.4em",
                          }}
                        >
                          <FaUniversity
                            onClick={toggleInfo}
                            style={{
                              marginRight: "7px",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                            }}
                          />
                          University
                        </IconContext.Provider>
                      </>
                    )}
                  </Nav.Link>
                  {/* </Nav.Item> */}
                  <Nav.Link
                    eventKey="link-2"
                    className="link-ED"
                    id="work"
                    onClick={toggleInfo}
                  >
                    {/* <Nav.Item> */}
                    {workInfo && !uniInfo ? (
                      <>
                        <IconContext.Provider
                          value={{ color: "black", size: "1.4em" }}
                        >
                          <MdOutlineWork
                            onClick={toggleInfo}
                            style={{
                              marginRight: "7px",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                            }}
                          />
                          Work
                        </IconContext.Provider>
                      </>
                    ) : (
                      <>
                        <IconContext.Provider
                          value={{ color: "white", size: "1.4em" }}
                        >
                          <MdOutlineWork
                            onClick={toggleInfo}
                            style={{
                              marginRight: "7px",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                            }}
                          />
                          Work
                        </IconContext.Provider>
                      </>
                    )}
                    {/* </Nav.Item> */}
                  </Nav.Link>
                </Nav>

                <IconContext.Provider
                  value={{ color: "#37A169", size: "1.3em" }}
                >
                  {uniInfo && !workInfo ? (
                    <div className="check-ed">
                      <div id="first-check" className="inner-check">
                        <p>
                          <AiFillCheckCircle style={{ marginRight: "10px" }} />
                          Implemented data structures and algorithms into
                          multiple projects.
                        </p>
                      </div>
                      <div className="inner-check">
                        <p>
                          <AiFillCheckCircle style={{ marginRight: "10px" }} />
                          Worked with different tech stacks to produce a high
                          quality finished product.
                        </p>
                      </div>
                      <div className="inner-check">
                        <p>
                          <AiFillCheckCircle style={{ marginRight: "10px" }} />
                          Helped fellow students understand concepts they don't
                          understand or having issues with.
                        </p>
                      </div>
                    </div>
                  ) : (
                    <div className="check-ed">
                      <div id="first-check" className="inner-check">
                        <p>
                          <AiFillCheckCircle style={{ marginRight: "10px" }} />
                          Designed mechanical parts for a wide variety of use
                          cases.
                        </p>
                      </div>
                      <div className="inner-check">
                        <p>
                          <AiFillCheckCircle style={{ marginRight: "10px" }} />
                          Communicated with cuastomers to understand their needs
                          and provide feedback to improve the product
                          experience.
                        </p>
                      </div>
                    </div>
                  )}
                </IconContext.Provider>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
}

export default Education;
