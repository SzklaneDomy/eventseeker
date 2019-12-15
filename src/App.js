import React, { Component } from "react";
import "./App.css";
import axios from "axios";

import Navbar from "./components/Navbar";
import Logo from "./components/Logo";
import EventList from "./components/EventList";
import LoadingSpinner from "./components/LoadingSpinner";

class App extends Component {
  state = {
    city: "",
    events: [],
    loading: false,
    showInputWarning: false
  };

  searchEvent = city => {
    const apiTokenPredicthq = process.env.REACT_APP_PREDICTHQ_API_KEY;

    let apiUrlPredicthq = `https://api.predicthq.com/v1/events/?q=${city}&sort=rank`;

    this.setState({ loading: true }, () => {
      axios({
        method: "get",
        url: apiUrlPredicthq,
        headers: { Authorization: `Bearer ${apiTokenPredicthq}` }
      })
        .then(res => {
          console.log(res.data);
        })
        .catch(err => console.log(err));
    });
    console.log(this.state.events);
  };

  render() {
    return (
      <div className="App">
        <Logo />
        <Navbar searchEvent={this.searchEvent} />
        {/* {this.state.showInputWarning ? <Warning /> : null} */}
        {this.state.loading ? (
          <LoadingSpinner />
        ) : (
          <EventList events={this.state.events} />
        )}
      </div>
    );
  }
}

export default App;
