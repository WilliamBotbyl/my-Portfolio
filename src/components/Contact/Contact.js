import React from "react";
import "./Contact.css";
import { Container, Row, Col, Button } from "react-bootstrap";
import { IconContext } from "react-icons";
import { AiOutlineMail } from "react-icons/ai";

function Contact() {
  return (
    <>
      <div id="contact" className="contact-container">
        <Container>
          <div className="inner-container">
            <Row>
              <div className="section-wrapper">
                <h2 className="numbers">06.</h2>
                <h2 className="section-title">Contact</h2>
              </div>
            </Row>
            <div className="center-contact">
              <Row>
                <Col>
                  <div className="contact-info-container">
                    <p className="contact-info">
                      Hello again, If you want to contact me with any
                      suggestions or questions, or would like to talk to me
                      about a possible job opening, you can send me an email, or
                      an internal message on my social networks.
                    </p>
                  </div>
                </Col>
              </Row>
              <Row>
                <Button
                  onClick={(e) => {
                    window.location.href = "mailto:billybotbyl81@yahoo.com";
                    e.preventDefault();
                  }}
                  style={{ marginRight: "90px" }}
                  className="download-btn"
                >
                  <IconContext.Provider value={{ size: "1.8rem" }}>
                    <AiOutlineMail style={{ marginRight: "10px" }} />
                  </IconContext.Provider>
                  Email
                </Button>
              </Row>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}

export default Contact;
