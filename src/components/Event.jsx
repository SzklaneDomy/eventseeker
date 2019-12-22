import React, { Component } from "react";
import {
  Card,
  Badge,
  Accordion,
  Button
} from "react-bootstrap";
import Moment from "react-moment";

class Event extends Component {
  render() {
    const { title, start, entities} = this.props.event;
    return (
      <div
        style={{
          width: "50%",
          marginLeft: "25%",
          display: "flex",
          flexDirection: "row"
        }}
      >
        <Card
          style={{
            marginBottom: "10px",
            marginTop: "10px",
            width: "100%",
            fontFamily: "'Montserrat', sans-serif"
          }}
        >
          <Card.Img variant="top" />
          <Card.Body>
            <Card.Title
              style={{
                fontWeight: "bold"
              }}
            >
              {title}
            </Card.Title>
            <Card.Title>
              <Badge variant="info">
                <Moment format="YYYY/MM/DD HH:mm">{start.local}</Moment>
              </Badge>
            </Card.Title>
            <Card.Text></Card.Text>
            <Accordion>
                  <Accordion.Toggle as={Button} variant="success" eventKey="0">
                    More info!
                  </Accordion.Toggle>
                <Accordion.Collapse eventKey="0">
            <Card.Body>venue: {entities[0].name}</Card.Body>
                </Accordion.Collapse>
            </Accordion>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default Event;
