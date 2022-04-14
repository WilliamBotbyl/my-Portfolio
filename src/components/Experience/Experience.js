import React from "react";
import "./Experience.css";
import { Container, Row } from "react-bootstrap";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  List,
  ListItem,
  ListIcon,
} from "@chakra-ui/react";

import { MdCheckCircle } from "react-icons/md";
// import { PhoneIcon, AddIcon, WarningIcon } from "@chakra-ui/icons";

function Experience() {
  return (
    <div id="experience" className="EXP-section">
      <Container className="exp-container-comp">
        <div className="EXP-inner-container">
          <Row>
            <div className="EXP-section-wrapper">
              <h2 className="numbers">04.</h2>
              <h2 className="section-title">Experience</h2>
            </div>
          </Row>
          <Row>
            <Accordion
              defaultIndex={[0]}
              style={{
                width: "70%",
                marginLeft: "7%",
                marginTop: "1vh",
              }}
              allowToggle
              allowMultiple
            >
              <AccordionItem className="section-one">
                <AccordionButton className="accordion-section-one">
                  <Box flex="1" textAlign="left">
                    Personal Projects | started in 2019
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
                <AccordionPanel className="first-section" pb={4}>
                  <List spacing={3}>
                    <ListItem>
                      <ListIcon
                        as={MdCheckCircle}
                        marginRight="10px"
                        color="#37A169"
                      />
                      Researched algorithms and data structures in order to
                      implement them in my own projects.
                    </ListItem>
                    <ListItem>
                      <ListIcon
                        as={MdCheckCircle}
                        marginRight="10px"
                        color="#37A169"
                      />
                      Designed high-grade software applications parts using
                      multiple frameworks and languages.
                    </ListItem>
                    <ListItem>
                      <ListIcon
                        as={MdCheckCircle}
                        marginRight="10px"
                        color="#37A169"
                      />
                      Produced technical drawings to give a visual of what
                      databases and structures need to look like.
                    </ListItem>
                    {/* <ListItem>
                      <ListIcon
                        as={MdCheckCircle}
                        marginRight="10px"
                        color="#37A169"
                      />
                      Provided high grade customer service and feed-back while
                      maintaining high customer satisfaction.
                    </ListItem> */}
                  </List>
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem className="section-two">
                <AccordionButton className="accordion-section-two">
                  <Box flex="1" textAlign="left">
                    University | 2020 - Present
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
                <AccordionPanel className="section-two" pb={4}>
                  <List spacing={3}>
                    <ListItem>
                      <ListIcon
                        as={MdCheckCircle}
                        marginRight="10px"
                        color="#37A169"
                      />
                      Helped fellow students gain an understanding of various
                      concepts.
                    </ListItem>
                    <ListItem>
                      <ListIcon
                        as={MdCheckCircle}
                        marginRight="10px"
                        color="#37A169"
                      />
                      Participated in the University's hackathon.
                    </ListItem>
                    <ListItem>
                      <ListIcon
                        as={MdCheckCircle}
                        marginRight="10px"
                        color="#37A169"
                      />
                      Implemented algoriths to solve problems.
                    </ListItem>
                  </List>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </Row>
        </div>
      </Container>
    </div>
  );
}

export default Experience;
