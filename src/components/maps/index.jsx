import React, { Component } from "react";
import GoogleMaps from "simple-react-google-maps";
import "./styles.css";

export default class Maps extends Component {
  render() {
    return (
      <div className="container">
        <GoogleMaps
          apiKey={"AIzaSyAFX4AlWLxErTDq4pVxy4A2Ja95-NtZmD4"}
          style={{ height: "100%", width: "100%" }}
          zoom={12}
          center={{
            lat:  -26.782751415506367,
             lng: -65.25889847988531
          }}
          markers={[
            {  lat:  -26.752751415506367, lng: -65.24729047988531},
            { lat: -26.825172278199826, lng:-65.27113876692741 },
          ]}
          className="container-map"
        />
      </div>
    );
  }
}