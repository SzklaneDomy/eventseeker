import React, { Component } from "react";
import { InputGroup, FormControl, Button, Form } from "react-bootstrap";

class Navbar extends Component {
  state = {
    city: ""
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.searchEvent(this.state.city);
  };
  render() {
    return (
      <Form>
        <InputGroup
          size="sm"
          className="mb-3"
          style={{ width: "50%", marginLeft: "25%" }}
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
            placeholder="Put in your city name"
            aria-label="Small"
            aria-describedby="inputGroup-sizing-sm"
          />
        </InputGroup>
      </Form>
    );
  }
}

export default Navbar;
