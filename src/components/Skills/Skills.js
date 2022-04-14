import React from "react";
import "./Skills.css";
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import Icons from "./Icons/Icons";
import BackendIcons from "./Icons/BackendIcons";
import DBIcons from "./Icons/DBIcons";
import DesignIcons from "./Icons/DesignIcons";
import ToolsIcons from "./Icons/ToolsIcons";
import { useMediaQuery } from "react-responsive";

function Skills() {
  // <----------------------------------------RESPONSIVE---------------------------------------->
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  });
  const isBigScreen = useMediaQuery({ query: "(min-width: 1824px)" });
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  const isPortrait = useMediaQuery({ query: "(orientation: portrait)" });
  const isRetina = useMediaQuery({ query: "(min-resolution: 2dppx)" });
  const currentBreakPoint = useMediaQuery({ query: "(max-width: 990px)" });
  // <----------------------------------------RESPONSIVE---------------------------------------->

  return (
    <div id="skills" className="skills-section">
      <Container fluid>
        <div className="ED-inner-container">
          <Row>
            <div className="SK-section-wrapper">
              <h2 className="numbers">03.</h2>
              <h2 className="SK-section-title">Skills</h2>
            </div>
          </Row>
          <Row>
            <p id="Ed-about">
              In my free time, I have been able to learn a variety of
              different&nbsp;
              <span className="about-blue"> technologies. </span>&nbsp; <br />
              Some of them are...
            </p>
          </Row>
          <Row style={{ marginTop: "5vh" }}>
            <Col style={{ width: "80%" }}>
              <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                <Row>
                  <Col sm={1} md={1} lg={1} className="left-col-skills">
                    <Nav
                      style={{ width: "300px" }}
                      //   variant="pills"
                      className="flex-column"
                    >
                      <div className="tab-line-skill">
                        <Nav.Item>
                          <Nav.Link
                            eventKey="first"
                            className="link front-end"
                            style={{ width: "100px" }}
                          >
                            Frontend
                          </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link
                            eventKey="second"
                            className="link back-end"
                            style={{ width: "100px" }}
                          >
                            Backend
                          </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link
                            eventKey="third"
                            className="link data-base"
                            style={{ width: "200px" }}
                          >
                            Data Bases
                          </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link
                            eventKey="fourth"
                            className="link design"
                            style={{ width: "100px" }}
                          >
                            Design
                          </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link
                            eventKey="fifth"
                            className="link tools"
                            style={{ width: "100px" }}
                          >
                            Tools
                          </Nav.Link>
                        </Nav.Item>
                      </div>
                    </Nav>
                  </Col>
                  <Col
                    className="icon-column"
                    style={{ width: "700px", marginLeft: "10%" }}
                  >
                    <Tab.Content style={{ width: "700px" }}>
                      <Tab.Pane eventKey="first" style={{ width: "700px" }}>
                        <div>
                          <Icons />
                        </div>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second" style={{ width: "700px" }}>
                        <div>
                          <BackendIcons />
                        </div>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third" style={{ width: "700px" }}>
                        <div>
                          <DBIcons />
                        </div>
                      </Tab.Pane>
                      <Tab.Pane eventKey="fourth" style={{ width: "700px" }}>
                        <div>
                          <DesignIcons />
                        </div>
                      </Tab.Pane>
                      <Tab.Pane eventKey="fifth" style={{ width: "700px" }}>
                        <div>
                          <ToolsIcons />
                        </div>
                      </Tab.Pane>
                    </Tab.Content>
                  </Col>
                </Row>
              </Tab.Container>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
}

export default Skills;
