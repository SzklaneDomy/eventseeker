import React, { Component } from "react";
import Event from "./Event";
class EventList extends Component {
  render() {
    return this.props.events.map(event => (
      <Event
        key={event.id}
        event={event}
        favouriteEvent={this.props.favouriteEvent}
      />
    ));
  }
}

export default EventList;
