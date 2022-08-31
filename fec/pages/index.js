import styles from "../styles/Home.module.css";
import Description from "../components/Description";
import Reservations from "../components/Reservations";
import Map from "../components/Map";
import React, { Component } from "react";
import Reviews from "../components/Review";


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

        <Reviews />
      </div>
    );
  }
}
