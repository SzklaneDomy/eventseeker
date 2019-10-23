import React, { Component } from "react";
import { Card, Badge } from "react-bootstrap";
import Moment from "react-moment";

class Event extends Component {
  render() {
    let { summary, name, url, start } = this.props.event;
    return (
      <div
        style={{
          width: "50%",
          marginLeft: "25%",
          display: "flex",
          flexDirection: "row",
          opacity: "50%",
        }}
      >
        <Card style={{ marginTop: "10px", width: "100%", fontFamily: "'Montserrat', sans-serif", }}>
          <Card.Img variant="top" />
          <Card.Body>
            <Card.Title
              style={{
                fontWeight: "bold"
              }}
            >
              {name.text}
            </Card.Title>
            <Card.Title>
              <Badge variant="info">
                <Moment format="YYYY/MM/DD">{start.local}</Moment>
              </Badge>
            </Card.Title>
            <Card.Text>{summary}</Card.Text>
            <Badge variant="success">
              <Card.Link style={{ color: "white" }} href={url}>
                More info
              </Card.Link>
            </Badge>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default Event;
