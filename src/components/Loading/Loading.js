import React from "react";
import "./Loading.css";
// import { Spinner } from "@chakra-ui/react";
import { Spinner } from "react-bootstrap";

function Loading() {
  return (
    <div id="loading-screen">
      <div
        style={{
          display: "flex",
          height: "100%",
          width: "100%",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1 className="loading-h1">Loading...</h1>
        <Spinner animation="border" variant="light" />
      </div>
    </div>
  );
}

export default Loading;
