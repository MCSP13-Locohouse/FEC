import Head from "next/head";
import styles from "../styles/Home.module.css";
import Description from "../components/Description";
import Reservations from "../components/Reservations";
// import { Loader } from "@googlemaps/js-api-loader";
import React, { Component } from "react";
import Reviews from "../components/Review";
import Calendar from "../components/Calendar";
import axios from "axios";
import Header from "../components/Header";
import Map, { StaticGoogleMap, Marker, Path } from "../components/Map";

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
      comments: [],
      stars: "",
      users: [],
      reservations: {
        startDate: [],
        endDate: [],
      },
      mapLocation: "",
    };
  }

  async componentDidMount() {
    const propState = await axios.get("/api/properties");
    this.setState((prevState) => ({
      property: propState.data.properties[0],
    }));

    const usersState = await axios.get("/api/users");
    this.setState({ users: usersState.data.users, host: usersState.data.users[0].name_firstlast });

    const commentsState = await axios.get("/api/comments");
    this.setState({ comments: commentsState.data.comments });

    const reservsState = await axios.get("/api/reservations");
    this.setState({
      startDate: reservsState.data.startDate,
      endDate: reservsState.data.endDate,
    });

    // const apiKey = process.env.NEXT_PUBLIC_API_KEY;
    // let address = encodeURIComponent(
    //   this.state.property.number_street + ", " + this.state.property.us_state + " " + this.state.property.zip
    // );
    // const mapGet = await axios.get(
    //   `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${apiKey}`
    // );
    // this.setState({ mapLocation: mapGet.results[0]["geometry"]["location"] });
  }

  handleDates(e) {
    console.log("Hi");
    this.setState({
      startDate: e.currentTarget.value,
      endDate: e.currentTarget.value,
    });
  }

  render() {
    return (
      <div className={styles.container}>
        <div>
          <title>chairbnb</title>
        </div>

        <Header />

        <Reservations
          property={this.state.property}
          reservations={this.state.reservations}
          handleDates={this.handleDates}
        />

        <Description property={this.state.property} host={this.state.host} />

        <Reviews reviews={this.state.comments} users={this.state.users} />

        <Calendar />

        {/* <Map location={this.state.mapLocation} /> */}

        <main className={styles.main}></main>

        <footer className={styles.footer}></footer>
      </div>
    );
  }
}
