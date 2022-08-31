import styles from "../styles/Home.module.css";
import Description from "../components/Description";
import Reservations from "../components/Reservations";
// import Map from "../components/Map";
import React, { Component } from "react";
import axios from "axios";
import Map, { StaticGoogleMap, Marker, Path } from "../components/Map";
import Calendar from "../components/Calendar";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      property: {
        id: -1,
        title: "",
        host: "",
        specs: "",
        about: "",
        space: "",
        guest: "",
        other: "",
        amenities: [],
      },
    };
    this.handleProperty = this.handleProperty.bind(this);
  }

  handleProperty() {
    axios.post("/api/properties").then((response) => {
      console.log("Response.data.properties: ", response.data.properties);
    });
  }

  render() {
    return (
      <div className={styles.container}>
        <Description property={this.state.property} />

        <Map property={this.state.property} />

        <Reservations />

        <Calendar />
      </div>
    );
  }
}
