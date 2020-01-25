import React, { Component } from "react";
import "./App.css";
import axios from "axios";

import Navbar from "./components/Navbar";
import Logo from "./components/Logo";
import EventList from "./components/EventList";
import LoadingSpinner from "./components/LoadingSpinner";
import FavouriteList from "./components/FavouriteList";

class App extends Component {
  state = {
    city: "",
    events: [],
    loading: false,
    showInputWarning: false,
    favouriteEvents: [],
  };

  searchEvent = city => {
    const todayDate = new Date().toISOString().slice(0, 10);

    const apiTokenPredicthq = process.env.REACT_APP_PREDICTHQ_API_KEY;

    const apiUrlPredicthq = `https://api.predicthq.com/v1/events/?q=${city}&active.gte=${todayDate}&sort=start`;

    this.setState({ loading: true }, () => {
      axios({
        method: "get",
        url: apiUrlPredicthq,
        headers: { Authorization: `Bearer ${apiTokenPredicthq}` }
      })
        .then(res => {
          res.data.results.forEach(element => {
            if (element.entities.length === 0) {
              element.entities = [
                {
                  name: "not specified"
                }
              ];
            }
          });
          this.setState({ events: res.data.results, loading: false });
        })
        .catch(err => {
          console.log(err);
          this.setState({ loading: false });
        });
    });
  };

  favouriteEvent = e => {
    this.setState({favouriteEvents: [...this.state.favouriteEvents, e]})
    console.log(this.state);
  }

  render() {
    return (
      <div className="App">
        <FavouriteList favouriteEvents={this.state.favouriteEvents}/>
        <Logo />
        <Navbar searchEvent={this.searchEvent} />
        {this.state.loading ? (
          <LoadingSpinner />
        ) : (
          <EventList events={this.state.events} favouriteEvent={this.favouriteEvent}/>
        )}
      </div>
    );
  }
}

export default App;
