import React, { Component } from "react";
import {
  Card,
  Badge,
  Accordion,
  Button,
  Tooltip,
  OverlayTrigger,
} from "react-bootstrap";

import FavouriteEvent from "./FavouriteEvent";
import "../css/FavouriteList.css";

export default class FavouriteList extends Component {
  state = {
    hideNav: false,
  };

  wrapperRef = React.createRef();
  arrowRef = React.createRef();

  slideFavList = () => {
    const wrapper = this.wrapperRef.current;
    const favarrow = this.arrowRef.current;
    wrapper.classList.toggle("is-acc-open");
    favarrow.classList.toggle("is-acc-open");
  };
  render() {
    return (
      <div ref={this.wrapperRef} className="wrapper">
        <div
          ref={this.arrowRef}
          className="fav-arrow"
          onClick={() => this.slideFavList()}
        >
          <img src="https://img.icons8.com/material-sharp/48/000000/chevron-left.png" />
        </div>
        <div className="fav-accordion" eventKey="0">
          <Accordion>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="0">
                Click to see ❤️ events!
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="0" className="fav-accordion-body">
                <Card.Body>
                  {this.props.favouriteEvents.map((favEvent) => (
                    <FavouriteEvent
                      key={favEvent.id}
                      event={favEvent}
                      deleteEvent={this.props.deleteEvent}
                    />
                  ))}
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        </div>
      </div>
    );
  }
}
