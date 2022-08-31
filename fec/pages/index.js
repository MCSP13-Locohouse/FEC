import Head from "next/head";
import styles from "../styles/Home.module.css";
import Description from "../components/Description";
import Reservations from "../components/Reservations";
import Map, { StaticGoogleMap, Marker, Path } from "../components/Map";
import React, { Component } from "react";
import Calendar from "../components/Calendar";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      property: {
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
