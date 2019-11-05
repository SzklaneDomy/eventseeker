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
    showInputWarning: false,
  };

  searchEvent = city => {
    if (city.trim().length === 0) {
      this.setState({ showInputWarning: true });
    } else {
      const ApiToken = process.env.REACT_APP_EVENTBRITE_API_KEY;
      let apiUrl = `https://www.eventbriteapi.com/v3/events/search/?token=${ApiToken}&location.address=${city}`;
      this.setState({ loading: true }, () => {
        axios
          .get(apiUrl)
          .then(res => {
            let sortedEvents = [];
            (function() {
              // Change date value to JS date object
              res.data.events.forEach(event => {
                event.start.utc = new Date(event.start.utc);
                console.log(event.start.utc.getTime());
              });

              // Sort Events by Date
              sortedEvents = res.data.events.sort(
                (event1, event2) =>
                  event1.start.utc.getTime() - event2.start.utc.getTime()
              );
            })();
            this.setState({ events: sortedEvents, loading: false });
          })
          .catch(err => console.log(err));
      });
      console.log(this.state.events);
    }
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
