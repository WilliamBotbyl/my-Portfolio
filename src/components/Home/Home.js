import React from "react";
import "./Home.css";
import { IconContext } from "react-icons";
import { Container, Row, Col, Button } from "react-bootstrap";
import RightHome from "../Images/home-right.svg";
import { BiCodeAlt } from "react-icons/bi";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div id="home" className="home-container-main">
      <Container fluid>
        <Row>
          <Col md={5}>
            <div className="home-heading-wrapper">
              <p
                style={{
                  fontSize: "20px",
                }}
                className="heading"
              >
                <span
                  style={{ marginRight: "10px" }}
                  className="wave"
                  role="img"
                  aria-labelledby="wave"
                >
                  👋🏻
                </span>
                Hi, my name is...
              </p>
              <h1 className="name">William&nbsp; Botbyl</h1>
              <h1 className="role">Software&nbsp; Developer</h1>
              <Link style={{ textDecoration: "none" }} to="/resume">
                <Button className="download-btn">
                  <IconContext.Provider value={{ size: "1.8rem" }}>
                    <BiCodeAlt style={{ marginRight: "10px" }} />
                  </IconContext.Provider>
                  View Resume
                </Button>
              </Link>
            </div>
          </Col>
          <Col>
            <img className="home-right-img img" src={RightHome} alt="home" />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
