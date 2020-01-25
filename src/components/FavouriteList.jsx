import React, { Component } from "react";
import {
  Card,
  Badge,
  Accordion,
  Button,
  Tooltip,
  OverlayTrigger
} from "react-bootstrap";

import FavouriteEvent from './FavouriteEvent'

export default class FavouriteList extends Component {
  render() {
    return (
      <div style={{width: "20%",position: "fixed", right: "10px",top: "10px"}}>
        <Accordion>
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="0">
              Click to see ❤️ events!
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
                  {this.props.favouriteEvents.map(favEvent => (
                      <FavouriteEvent 
                        key={favEvent.id}
                        event={favEvent}
                      />
                  ))}
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </div>
    );
  }
}
