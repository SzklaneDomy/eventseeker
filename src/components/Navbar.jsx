import React, { Component } from "react";
import { InputGroup, FormControl, Button, Form, Alert } from "react-bootstrap";

class Navbar extends Component {
  state = {
    city: "",
    isAlertOpen: false
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
    this.toggle();
  };

  onSubmit = e => {
    if (this.state.city.trim().length === 0) {
      e.preventDefault();
      this.setState({ isAlertOpen: true });
    } else {
      e.preventDefault();
      this.props.searchEvent(this.state.city);
    }
  };

  toggle = () => {
    this.setState({ isAlertOpen: false });
  };
  render() {
    return (
      <Form>
        <InputGroup
          size="sm"
          className="mb-3"
          style={{ margin: "0 auto", width: "50%", minWidth: "220px" }}
        >
          <InputGroup.Prepend>
            <Button variant="primary" type="submit" onClick={this.onSubmit}>
              Search
            </Button>
          </InputGroup.Prepend>
          <FormControl
            value={this.state.value}
            onChange={this.onChange}
            name="city"
            placeholder="What events are you looking for ? Food, Concerts?"
            aria-label="Small"
            aria-describedby="inputGroup-sizing-sm"
          />
        </InputGroup>
        <Alert
          variant="danger"
          style={{
            width: "50%",
            height: "10vh",
            marginLeft: "25%",
            textAlign: "center"
          }}
          show={this.state.isAlertOpen}
          dismissible
          onClick={this.toggle}
        >
          <Alert.Heading>Input can't be empty!</Alert.Heading>
        </Alert>
      </Form>
    );
  }
}

export default Navbar;
