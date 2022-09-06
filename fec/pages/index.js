import styles from "../styles/Home.module.css";
import Description from "../components/Description";
import Reservations from "../components/Reservations";

// import { Loader } from "@googlemaps/js-api-loader";
// import Map from "../components/Map";

import React, { Component } from "react";
import Reviews from "../components/Review";
import axios from "axios";
import Header from "../components/Header";

import Map, { StaticGoogleMap, Marker, Path } from "../components/Map";
import Calendar from "../components/Calendar";


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
      comments: [],
      stars: "",
      users: [],
      reservations: {
        startDate: [],
        endDate: [],
      },
      mapLocation: "",
    };
    this.handleDates = this.handleDates.bind(this);
  }

  componentDidMount() {
    axios.get("/api/properties").then((response) => {
      this.setState((prevState) => ({
        property: response.data.properties[0],
      }));
    })
      .then(() => {
        axios.get("/api/users").then((res) => {
          this.setState({ users: res.data.users });
        })
      })
      .then(() => {
        axios.get("/api/users").then((res) => {
          this.setState({ users: res.data.users });
        })
      })
      .then(() => {
        axios.get("/api/comments").then((res) => {
          this.setState({ comments: res.data.comments });
        })
      }).then(() => {
        const apiKey = process.env.NEXT_PUBLIC_API_KEY;
        let address = encodeURIComponent(this.state.property.number_street + ', ' + this.state.property.us_state + " " + this.state.property.zip);

        fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${apiKey}`, {
          mode: 'cors',
          method: 'get'
        }).then((response) => {
          return response.json()
        }).then((locData) => {
          this.setState({ mapLocation: locData.results[0]['geometry']['location'] })
        });


      });

    axios.get("/api/reservations").then((res) => {
      this.setState({
        startDate: res.data.startDate,
        endDate: res.data.endDate,
      });
    });
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

        <Description property={this.state.property} />

        <Reservations
          property={this.state.property}
          reservations={this.state.reservations}
          handleDates={this.handleDates}
        />

        <Reservations property={this.state.property} />

        <Description property={this.state.property} />

        <Calendar />

        <Map location={this.state.mapLocation} />


        <main className={styles.main}></main>

        <footer className={styles.footer}></footer>

      </div>
    );
  }
}