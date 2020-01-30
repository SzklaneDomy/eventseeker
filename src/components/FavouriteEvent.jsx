import React, { Component } from "react";
import { Card } from "react-bootstrap";

export default class FavouriteEvent extends Component {

  handleDelete = () => {
    // console.log(this.props.event.id)
    this.props.deleteEvent(this.props.event.id)
  }

  render() {
    const { title, start, entities, end, location } = this.props.event;
    return (
      <div style={{ maxWidth: "202px", paddingTop: "10px",}}>
        <Card>
          <Card.Body>
            <Card.Text onClick = {() => this.handleDelete(this)}>❌</Card.Text>
            <Card.Text>{title}</Card.Text>
          </Card.Body>
        </Card>
      </div>
    );
  }
}
