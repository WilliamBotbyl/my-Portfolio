import React from "react";
import "./About.css";
import aboutImg from "../Images/WebDev.svg";
import { Container, Row, Col } from "react-bootstrap";

function About() {
  return (
    <div id="about" className="about-section">
      <Container>
        <div className="inner-container">
          <Row>
            <div className="section-wrapper">
              <h2 className="numbers">01.</h2>
              <h2 className="section-title">About</h2>
            </div>
          </Row>
          <Row>
            <Col>
              <div>
                <img src={aboutImg} style={{ width: "400px" }} alt="img" />
              </div>
            </Col>
            <Col>
              <p className="about-me">
                I am a &nbsp;&nbsp;
                <span className="about-blue">JR. software developer</span>
                &nbsp;&nbsp; with a passion for creating anything software, I
                take great pride in my work and I am always looking to learn new
                things. I am currently in college for&nbsp;&nbsp;
                <span className="about-blue"> Computer Science</span>
                &nbsp;&nbsp; and I am looking for a job in the field of web
                development. I truly enjoy spending my spare time learning new
                concepts of programming and I am always looking to improve my
                skills.
              </p>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
}

export default About;
