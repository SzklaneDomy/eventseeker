import React, { Component } from "react";
import {
  Card,
  Badge,
  Accordion,
  Button,
  Tooltip,
  OverlayTrigger
} from "react-bootstrap";
import Moment from "react-moment";
import PropTypes from "prop-types";

import MapComponent from "./MapComponent";

class Event extends Component {
  render() {
    const { title, start, entities, end } = this.props.event;
    return (
      <div
        style={{
          margin: "0 auto",
          width: "50%",
          minWidth: "220px"
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
            {/* <MapComponent  mapData = {this.props.event}/> */}
            <Card.Title
              style={{
                fontWeight: "bold"
              }}
            >
              {title}
            </Card.Title>
            <Card.Title>
              <Badge variant="info">start:</Badge>{" "}
              <Moment format="YYYY/MM/DD HH:mm">{start}</Moment>
            </Card.Title>
            <Card.Text></Card.Text>
            <Accordion>
              <Accordion.Toggle as={Button} variant="success" eventKey="0">
                More info
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="0">
                <Card.Body>
                  <Accordion>
                    <Accordion.Toggle as={Card.Text} eventKey="1">
                      <OverlayTrigger
                        overlay={
                          <Tooltip id="tooltip-disabled">Click to show map!</Tooltip>
                        }
                      >
                        <Card.Text>
                          <Badge variant="info">venue:</Badge>{" "}
                          {entities[0].name}
                        </Card.Text>
                      </OverlayTrigger>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="1">
                      <Card.Body>Hello! I'm the body</Card.Body>
                    </Accordion.Collapse>
                  </Accordion>
                  <Card.Text>
                    <Badge variant="info">end:</Badge>{" "}
                    <Moment format="YYYY/MM/DD HH:mm">{end}</Moment>
                  </Card.Text>
                </Card.Body>
              </Accordion.Collapse>
            </Accordion>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

Event.propTypes = {
  title: PropTypes.string,
  start: PropTypes.string
};
export default Event;
