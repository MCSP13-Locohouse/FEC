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
import postgres from "postgres";
import { el } from "date-fns/locale";


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
    axios.get("/api/properties").then((res) => {
      this.setState((prevState) => ({
        property: res.data.properties[0],
      }));
    });

    axios.get("/api/users").then((res) => {
      this.setState({
        users: res.data.users,
        host: res.data.users[0].name_firstlast,
      });
    });

    axios.get("/api/comments").then((res) => {
      this.setState({
        comment: res.data.comments,
        stars: res.data.comments[0].stars,
      });
    });

    axios.get("/api/reservations").then((res) => {
      this.setState({
        startDate: res.data.startDate,
        endDate: res.data.endDate,
      });
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
          x
          <Description property={this.state.property} host={this.state.host} />

          <Reviews reviews={this.state.comment} users={this.state.users} />

          <Map property={this.state.property} location={this.props} />
        </main>

        <footer className={styles.footer}>2022 LocoHouse</footer>
      </div>
    );
  }
}

export async function getServerSideProps() {
  const { DB_CONNECTION_URL, PORT, NODE_ENV } = process.env;
  let location;

  const sql = postgres(
    process.env.DB_CONNECTION_URL,
    process.env.NODE_ENV === "production"
      ? {
        ssl: { rejectUnauthorized: false },
        max_lifetime: 60 * 30,
      }
      : {}
  );

  // postgres("postgres://user:password@host:port/database");


  //console.log('index.js location: ', location);
  const locQuery = await sql`
  SELECT coord FROM properties WHERE prop_id = 1`;
  location = locQuery[0]['coord'];
  location.lat = parseFloat(location.lat)
  location.lng = parseFloat(location.lng);
  //console.log('index.js location: ', locQuery[0]['coord']);


  // Fetch Lat/Long for given address
  const apiKey = process.env.NEXT_PUBLIC_API_KEY;
  // let address = '';
  // 


  let address = encodeURIComponent(`1600 pennsylvania ave, washington dc`);

  const res = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=1${address}&key=${apiKey}`, {
    mode: 'cors',
    method: 'get'
  });
  let data = await res.json()
  data = data.results[0];
  //Lat/long for given address:
  let locData = data.geometry.location;
  //console.log('index.js: ', process.env.DB_CONNECTION_URL)
  // Pass data to the page via props

  return { props: { location } }
}
