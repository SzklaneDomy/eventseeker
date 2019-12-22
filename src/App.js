import React, { Component } from "react";
import "./App.css";
import axios from "axios";

import Navbar from "./components/Navbar";
import Logo from "./components/Logo";
import EventList from "./components/EventList";
import LoadingSpinner from "./components/LoadingSpinner";

class App extends Component {
  constructor(props) {
    super(props);

    this.searchEvent = this.searchEvent.bind(this);

    this.state = {
      city: "",
      events: [],
      loading: false,
      showInputWarning: false
    };
  }

  searchEvent(city) {
    const todayDate = new Date().toISOString().slice(0 , 10)
    
    const apiTokenPredicthq = process.env.REACT_APP_PREDICTHQ_API_KEY;

    const apiUrlPredicthq = `https://api.predicthq.com/v1/events/?q=${city}&active.gte=${todayDate}&sort=start`;

    this.setState({ loading: true }, () => {
      axios({
        method: "get",
        url: apiUrlPredicthq,
        headers: { Authorization: `Bearer ${apiTokenPredicthq}` }
      })
        .then(res => {
          console.log(res.data.results);
          this.setState({events: res.data.results,loading: false });
        })
        .catch(err => {
          console.log(err);
          this.setState({ loading: false });
        });
    });
  }

  render() {
    return (
      <div className="App">
        <Logo />
        <Navbar searchEvent={this.searchEvent} />
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
