import React, { Component } from "react";
import ReactMapGL, { Marker } from "react-map-gl";

class MapComponent extends Component {
  state = {
    viewport: {
      width: 300,
      height: 300,
      latitude: 37.7577,
      longitude: -122.4376,
      zoom: 8
    }
  };

  render() {
    const { location, id } = this.props.mapData;
    return (
      <ReactMapGL
        {...this.state.viewport}
        onViewportChange={viewport =>
          this.setState({
            viewport: {
              latitude: location[1],
              longitude: location[0],
              width: 300,
              height: 300,
              zoom: 13
            }
          })
        }
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_API_KEY}
      >
        <Marker key={id} latitude={location[1]} longitude={location[0]}>
          <div>
            <img
              src="https://img.icons8.com/office/30/000000/marker.png"
              alt="marker"
            />
          </div>
        </Marker>
      </ReactMapGL>
    );
  }
}

export default MapComponent;
