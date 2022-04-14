import "./Header.css";
import React from "react";
import Scroll from "react-scroll";
import { Navbar, Nav, Popover, OverlayTrigger } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineLinkedin,
  AiOutlineTwitter,
} from "react-icons/ai";
import { IconContext } from "react-icons";
import brand from "../Images/logo-2.svg";

function Header() {
  return (
    <div id="nav-container-main">
      <Navbar fixed="top" expand="lg" id="navbar-component">
        <Navbar.Brand expand="xl" collapseOnSelect href="/" id="brand">
          <img
            style={{ height: "20px", marginLeft: "20px" }}
            src={brand}
            alt="brand"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav id="nav-container">
            <div id="nav-wrapper">
              <Nav.Link
                onSelect={() =>
                  Scroll.scrollTo("home", {
                    smooth: true,
                    offset: -70,
                    duration: 500,
                  })
                }
                id="nav-link"
                href="#home"
              >
                Home
              </Nav.Link>
              <Nav.Link
                onSelect={() =>
                  Scroll.scrollTo("about", {
                    smooth: true,
                    offset: -70,
                    duration: 500,
                  })
                }
                id="nav-link"
                href="#about"
              >
                About
              </Nav.Link>
              <Nav.Link
                onSelect={() =>
                  Scroll.scrollTo("education", {
                    smooth: true,
                    offset: -70,
                    duration: 500,
                  })
                }
                id="nav-link"
                href="#education"
              >
                Education
              </Nav.Link>
              <Nav.Link
                onSelect={() =>
                  Scroll.scrollTo("skills", {
                    smooth: true,
                    offset: -70,
                    duration: 500,
                  })
                }
                id="nav-link"
                href="#skills"
              >
                Skills
              </Nav.Link>
              <Nav.Link
                onSelect={() =>
                  Scroll.scrollTo("experience", {
                    smooth: true,
                    offset: -70,
                    duration: 500,
                  })
                }
                id="nav-link"
                href="#experience"
              >
                Experience
              </Nav.Link>
              <Nav.Link
                onSelect={() =>
                  Scroll.scrollTo("projects", {
                    smooth: true,
                    offset: -70,
                    duration: 500,
                  })
                }
                id="nav-link"
                href="#projects"
              >
                Projects
              </Nav.Link>
              <Nav.Link
                onSelect={() =>
                  Scroll.scrollTo("contact", {
                    smooth: true,
                    offset: -70,
                    duration: 500,
                  })
                }
                id="nav-link"
                href="#contact"
              >
                Contact
              </Nav.Link>
            </div>
            <div id="nav-icon-wrapper">
              <IconContext.Provider
                value={{ size: "1.3rem", color: "#02fefe" }}
              >
                <OverlayTrigger
                  trigger="hover"
                  placement="bottom"
                  overlay={
                    <Popover className="popOver">
                      <Popover.Body>Twitter</Popover.Body>
                    </Popover>
                  }
                >
                  <Nav.Link id="nav-link">
                    <AiOutlineTwitter />
                  </Nav.Link>
                </OverlayTrigger>
                <OverlayTrigger
                  trigger="hover"
                  placement="bottom"
                  overlay={
                    <Popover className="popOver">
                      <Popover.Body>LinkedIn</Popover.Body>
                    </Popover>
                  }
                >
                  <Nav.Link
                    href="https://www.linkedin.com/in/billy-botbyl-853613220/"
                    id="nav-link"
                  >
                    <AiOutlineLinkedin />
                  </Nav.Link>
                </OverlayTrigger>
                <OverlayTrigger
                  trigger="hover"
                  placement="bottom"
                  overlay={
                    <Popover className="popOver">
                      <Popover.Body>Github</Popover.Body>
                    </Popover>
                  }
                >
                  <Nav.Link
                    href="https://github.com/WilliamBotbyl"
                    id="nav-link"
                  >
                    <AiFillGithub />
                  </Nav.Link>
                </OverlayTrigger>
              </IconContext.Provider>
            </div>
            <div id="nav-icon-wrapper">
              {/* <IconContext.Provider value={{ size: "1rem", color: "#02fefe" }}>
                <Nav.Link id="nav-link">
                    <FaLanguage />
                  </Nav.Link>
                <Nav.Link id="nav-link">
                  <FiSettings />
                </Nav.Link>
              </IconContext.Provider> */}
            </div>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Header;
