import React from "react";
import "./Resume.css";
import { makeStyles } from "@mui/styles";
import Avatar from "@mui/material/Avatar";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { AiOutlineMail, AiOutlineHome } from "react-icons/ai";
import { IconContext } from "react-icons/lib";
import { Drawer, Typography, List, ListItem, Divider } from "@mui/material";
import { Box } from "@mui/system";
import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import resume from "../../Images/MYRESUMEpdf.pdf";

const drawerWidth = 240;
//< ---------------------------------------------------------------------------------------------------------------------------------------------------------> * /}

//< ----------------------------------------------------------STYLES SECTION---------------------------------------------------------------------------------> * /}

//< ---------------------------------------------------------------------------------------------------------------------------------------------------------> * /}

const useStyles = makeStyles({
  page: {
    backgroundColor: "black",
    width: "100%",
    height: "100%",
  },
  drawer: {
    width: drawerWidth,
  },
  drawerPaper: {
    width: drawerWidth,
    height: "100%",
    // This is the background of entire drawer
    backgroundColor: "#242530",
    border: "none",
  },
  root: {
    backgroundColor: "#181922",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    overflow: "hidden",
  },
  header: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  avatar: {
    height: "70px",
    width: "70px",
    marginTop: "20px",
  },
  avatarSection: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    width: "100%",
    margin: "0px",
    padding: "0px",
  },
  info: {
    marginTop: "15px",
    fontSize: "12px",
  },
  role: {
    fontSize: "12px",
    textAlign: "center",
    padding: "5px",
  },
  list: {
    width: "100%",
    height: "100%",
    margin: "0px",
    padding: "0px",
  },
  listItem: {
    color: "white",
    margin: "10px",
  },
  divider: {
    backgroundColor: "white",
    height: "5px",
    width: "90%",
    marginTop: "20px",
    marginBottom: "20px",
  },
  listDiv: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  // Content section
  content: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  nav: {
    position: "fixed",
    justifyContent: "center",
    alignItems: "center",
    bottom: 0,
    width: "80px",
    height: "80px",
    borderRadius: "50%",
    backgroundColor: "#242530",
    marginBottom: "20px",
    "&:focus &:active &::hover ": {
      outline: "none",
      color: "white",
      textDecoration: "none",

      listStyleType: "none",
    },
  },
  navBox: {
    position: "fixed",
    bottom: "10px",
    marginLeft: "70vw",
    zIndex: "1",
    "&:focus &:active &::hover ": {
      outline: "none",
      color: "white",
      listStyleType: "none",
      textDecoration: "none",
    },
  },
  sideGroup: {
    display: "flex",
    width: "100%",
    padding: "10px",
    justifyContent: "center",
  },
  listItemBottom: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  leftInfo: {
    color: "#02fefe",
    borderBottom: "1px solid #02fefe",
  },
  rightInfo: {},

  ///////////////////////////////////////////////////////////////
  // Resume content
  inner: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    color: "white",
    textAlign: "center",
  },
  resDivider: {
    width: "50%",
  },
  ///////////////////////////////////////////////////////////////
  navIcon: {
    color: "white",
    "&:focus &:active &::hover ": {
      outline: "none",
      color: "white",
      listStyleType: "none",
      textDecoration: "none",
    },
  },
  skills: {
    color: "white",
    display: "flex",
    flexDirection: "column",
  },
});

//< -------------------------------------------------------------------------------------------------------------------------------------------> * /}

//< ------------------------------------------------------END OF STYLES------------------------------------------------------------------------> * /}

//< -------------------------------------------------------------------------------------------------------------------------------------------> * /}

function Resume() {
  const classes = useStyles();
  return (
    <IconContext.Provider
      value={{
        color: "white",
        size: "1.5rem",
      }}
    >
      <div className={classes.root}>
        {/* <------------------------------------------------------------------------------------------------------------------------------> */}

        {/* <---------------------------------------------SIDE DRAWER----------------------------------------------------------------------> */}

        {/* <------------------------------------------------------------------------------------------------------------------------------> */}

        <Drawer
          className={classes.drawer}
          variant="permanent"
          anchor="left"
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <div>
            <Typography className={classes.header}>
              <div className={classes.avatarSection}>
                <Avatar className={classes.avatar} src="/broken-image.jpg" />
                <p className={classes.info}>William Botbyl</p>
                <Divider className={classes.divider} />
              </div>
            </Typography>
            <p className={classes.role}>
              JR. Software Developer in the process of a BS in computer science.
            </p>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Divider className={classes.divider} />
            </div>
            {/* <IconContext.Provider
              value={{
                color: "white",
                size: "1.5rem",
              }}
            > */}
            <List className={classes.list}>
              <div className={classes.listDiv}>
                <ListItem className={classes.listItem}>
                  <a href="https://github.com/WilliamBotbyl">
                    <FiGithub />
                  </a>
                </ListItem>

                <ListItem className={classes.listItem}>
                  <div
                    style={{
                      cursor: "pointer",
                    }}
                    onClick={(e) => {
                      window.location.href = "mailto:billybotbyl81@yahoo.com";
                      e.preventDefault();
                    }}
                  >
                    <AiOutlineMail />
                  </div>
                </ListItem>

                <ListItem className={classes.listItem}>
                  <a href="https://www.linkedin.com/in/billy-botbyl-853613220/">
                    <FiLinkedin />
                  </a>
                </ListItem>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Divider className={classes.divider} />
              </div>
            </List>
            {/* </IconContext.Provider> */}
          </div>
          <div className={classes.skills}>
            <ListItem className={classes.listItemBottom}>
              <p className={classes.leftInfo}>Location:</p>
              <p className={classes.rightInfo}>Longbranch NJ</p>
            </ListItem>
            <ListItem className={classes.listItemBottom}>
              <p className={classes.leftInfo}>Phone:</p>
              <p className={classes.rightInfo}>(732)766-4049</p>
            </ListItem>
            <ListItem className={classes.listItemBottom}>
              <p className={classes.leftInfo}>Position:</p>
              <p className={classes.rightInfo}>JR. SWE</p>
            </ListItem>
            <ListItem className={classes.listItemBottom}>
              <p className={classes.leftInfo}>Graduation:</p>
              <p className={classes.rightInfo}>2024</p>
            </ListItem>
            <ListItem className={classes.listItemBottom}>
              <p className={classes.leftInfo}>Degree:</p>
              <p className={classes.rightInfo}>B.S. Comp Sci</p>
            </ListItem>
            <ListItem className={classes.listItemBottom}>
              <p className={classes.leftInfo}>Willing to relocate:</p>
              <p className={classes.rightInfo}>Yes</p>
            </ListItem>
          </div>
        </Drawer>

        {/* <--------------------------------------------------END OF DRAWER-----------------------------------------------------------------> */}

        {/* <---------------------------------------------------------------------------------------------------------------------------------> */}

        {/* <--------------------------------------------------RESUME CONTENT-----------------------------------------------------------------> */}

        <div className={classes.inner}>
          <Divider className={classes.resDivider} />
          <p
            style={{
              marginTop: "10px",
            }}
          >
            2020-present | Software Developer | BS Computer science.
          </p>
          <object
            style={{
              height: "100%",
              width: "90%",
            }}
            data={resume}
          >
            <p>this is my resume</p>
          </object>
        </div>

        {/* <----------------------------------------------------END OF RESUME CONTENT-----------------------------------------------------> */}

        {/* <------------------------------------------------------------------------------------------------------------------------------> */}

        {/* <---------------------------------------------------BOTTOM NAV----------------------------------------------------------------> */}

        {/* <IconContext.Provider
        value={{
          color: "white",
          size: "1.5rem",
        }}
      > */}
        <Box className={classes.navBox}>
          <BottomNavigation className={classes.nav} showLabels>
            <BottomNavigationAction
              className={classes.navIcon}
              href="/"
              label="Home"
              icon={<AiOutlineHome />}
            />
          </BottomNavigation>
        </Box>
        {/* <------------------------------------------------------------------------------------------------------------------------------> */}

        {/* <---------------------------------------------------END OF NAV----------------------------------------------------------------> */}

        {/* <------------------------------------------------------------------------------------------------------------------------------> */}
      </div>
    </IconContext.Provider>
  );
}

export default Resume;
