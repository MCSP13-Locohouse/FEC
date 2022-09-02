import Head from "next/head";
import styles from "../styles/Home.module.css";

import Description from "../components/Description";
import Reservations from "../components/Reservations";
import testMap from "../components/testmap";
import React, { Component } from "react";
import { Loader } from '@googlemaps/js-api-loader';
import Map from "../components/Map";
import Calendar from "../components/Calendar";

import React, { Component } from "react";
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
        US_state: "",
        zip: "",
        host: "",
        amenities: [],
      },
    };
    this.handleProperty = this.handleProperty.bind(this);
  }

  handleProperty() {
    axios.get("/api/properties").then((response) => {
      console.log("Response.data.properties: ", response.data.properties);
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

        <Map property={this.props} />

        <h3>My Google Maps Demo</h3>

        <div id="map"></div>

        <Reservations />

        <Calendar />

        <main className={styles.main}></main>

        <footer className={styles.footer}></footer>
      </div>
    );
  }
}


export async function getServerSideProps() {
  // Fetch data from external API
  const apiKey = process.env.NEXT_PUBLIC_API_KEY;
  console.log('map.js apikey: ', apiKey);
  console.log("getting address");

  const res = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=24%20Sussex%20Drive%20Ottawa%20ON&key=${apiKey}`, {
    mode: 'cors',
    method: 'get'
  });
  let data = await res.json()
  data = data.results[0];
  data = data.geometry.location;
  console.log(data);

  // Pass data to the page via props
  return { props: { data } }
}