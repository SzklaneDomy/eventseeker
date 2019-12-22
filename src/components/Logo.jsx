import React, { Component } from "react";
import "../index.css";

class Logo extends Component {
  render() {
    return (
      <React.Fragment>
        <h1
          style={{
            fontSize: "70px",
            fontWeight: "900",
            textShadow: "3px 3px gray",
            fontFamily: "'Montserrat', sans-serif",
            textAlign: "center",
            marginTop: "20vh",
            marginBottom: "5vh"
          }}
        >
          Event Seeker
        </h1>
      </React.Fragment>
    );
  }
}

export default Logo;