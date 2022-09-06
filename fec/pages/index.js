import Head from "next/head";
import styles from "../styles/Home.module.css";

import Description from "../components/Description";
import Reservations from "../components/Reservations";
import { Loader } from '@googlemaps/js-api-loader';
import Map from "../components/Map";
import Calendar from "../components/Calendar";

import React, { Component, useState } from "react";
import axios from "axios";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      property: {
        prop_id: -1,
        title: "",
        price: "",
        specs: "",
        about: "",
        prop_space: "",
        guest: "",
        other: "",
        number_street: "",
        us_state: "",
        zip: "",
        host: "",
        amenities: { ameniGroups: [] },
      },
    };
  }

  componentDidMount() {

    axios.get("/api/properties").then((response) => {
      console.log(
        "Testing ability to parse response.data.properties[0] ",
        response.data.properties[0]
      );
      this.setState((prevState) => ({
        property: response.data.properties[0],
      }));
    });
  }

  render() {
    return (
      <div className={styles.container}>
        <Head>
          <title>Create Next App</title>
        </Head>

        <Description property={this.state.property} handleProperty={this.handleProperty} />


        <Calendar />

        <Map property={this.state.property} />

        <main className={styles.main}></main>

        <footer className={styles.footer}></footer>
      </div>
    );
  }
}


