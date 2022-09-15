import Head from "next/head";
import styles from "../styles/Home.module.css";
import Description from "../components/Description";
import Reservations from "../components/Reservations";
import { Loader } from "@googlemaps/js-api-loader";
import React, { Component } from "react";
import Reviews from "../components/Review";
import axios from "axios";
import Header from "../components/Header";
import Map, { StaticGoogleMap, Marker, Path } from "../components/Map";
import Gallery from "../components/Gallery";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      host: "",
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

      prop_id: [],
      stars: [],
      comment: [],

      users: [],
      reservations: {
        startDate: [],
        endDate: [],
      },
      mapLocation: "",
    };
  }

  componentDidMount() {
    axios.get("/api/").then((res) => {
      this.setState({
        comment: res.data.comments,
        stars: res.data.comments[0].stars,
        property: res.data.properties[0],
        startData: res.data.reservations.startDate,
        endDate: res.data.reservations.endDate,
        users: res.data.users,
        host: res.data.users[0].name_firstlast,
      });
    });
  }

  render() {
    return (
      <div className={styles.container}>
        <Head>
          <title>chairbnb</title>
        </Head>

        {/* 
        Formatting:
        Header
        Photos
        Reservations
        Description
        Calendar
        Reviews
        Map
         */}

        <Header />

        <main className={styles.main}>
          <Gallery reviews={this.state.comment} users={this.state.users} />

          <Reservations
            property={this.state.property}
            stars={this.state.stars}
            reservations={this.state.reservations}
            reviews={this.state.comment}
          />

          <Description property={this.state.property} host={this.state.host} />

          <Reviews reviews={this.state.comment} users={this.state.users} />

          <Map location={this.state.property} />
        </main>

        <footer className={styles.footer}>2022 LocoHouse</footer>
      </div>
    );
  }
}
