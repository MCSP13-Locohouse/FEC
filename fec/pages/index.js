import Head from "next/head";
import styles from "../styles/Home.module.css";
import Description from "../components/Description";
import Reservations from "../components/Reservations";
import { Loader } from '@googlemaps/js-api-loader';
import Map from "../components/Map";
import React, { Component } from "react";
import Reviews from "../components/Review";
import Calendar from "../components/Calendar";
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
        amenities: { ameniGroups: [] },
      },
      comments: [],
      stars: "",
      users: [],
    };
  }

  componentDidMount() {

    axios.get("/api/properties").then((response) => {
      this.setState((prevState) => ({
        property: response.data.properties[0],
      }));
    });
  }

  componentDidMount() {
    axios.get("/api/properties").then((res) => {});

    axios.get("/api/users").then((res) => {
      this.setState({ users: res.data.users });
    });

    axios.get("/api/comments").then((res) => {
      this.setState({ comments: res.data.comments });
    });
  }

  render() {
    return (
      <div className={styles.container}>
        <Head>
          <title>Create Next App</title>
        </Head>

        <Description
          property={this.state.property}
          handleProperty={this.handleProperty}
        />

        <Reservations property={this.state.property}/>

        <Reviews reviews={this.state.comments} users={this.state.users} />

        <Calendar />

        <Map property={this.props} />

        <Map property={this.props} />

        <main className={styles.main}></main>

        <footer className={styles.footer}></footer>
      </div>
    );
  }
}


export async function getServerSideProps() {
  // Fetch Lat/Long for given address
  const apiKey = process.env.NEXT_PUBLIC_API_KEY;

  const res = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=1644+Platte+St,+Denver,+CO+80202&key=${apiKey}`, {
    mode: 'cors',
    method: 'get'
  });
  let data = await res.json()
  data = data.results[0];
  //Lat/long for given address:
  let locData = data.geometry.location;

  // Pass data to the page via props
  return { props: { locData } }
}