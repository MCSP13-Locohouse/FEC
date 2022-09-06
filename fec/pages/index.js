import styles from "../styles/Home.module.css";
import Description from "../components/Description";
import Reservations from "../components/Reservations";

import { Loader } from "@googlemaps/js-api-loader";
import Map from "../components/Map";

import React, { Component } from "react";
import Reviews from "../components/Review";
import axios from "axios";
import Header from "../components/Header";

// import Map, { StaticGoogleMap, Marker, Path } from "../components/Map";
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
        US_state: "",
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
    };
    this.handleDates = this.handleDates.bind(this);
  }

  componentDidMount() {
    axios.get("/api/properties").then((response) => {
      this.setState((prevState) => ({
        property: response.data.properties[0],
      }));
    });

    axios.get("/api/users").then((res) => {
      this.setState({ users: res.data.users });
    });

    axios.get("/api/comments").then((res) => {
      this.setState({ comments: res.data.comments });
      console.log(res.data.comments);
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
        <Header>
          <title>chairbnb</title>
        </Header>

        <Reservations
          property={this.state.property}
          reservations={this.state.reservations}
          handleDates={this.handleDates}
        />

        <Description property={this.state.property} host={this.state.users} />

        <Reviews reviews={this.state.comments} users={this.state.users} />

        <Calendar />

        {/* <Map property={this.props} /> */}

        <footer className={styles.footer}></footer>
      </div>
    );
  }
}

// export async function getServerSideProps() {
//   // Fetch Lat/Long for given address
//   const apiKey = process.env.NEXT_PUBLIC_API_KEY;

//   const res = await fetch(
//     `https://maps.googleapis.com/maps/api/geocode/json?address=1644+Platte+St,+Denver,+CO+80202&key=${apiKey}`,
//     {
//       mode: "cors",
//       method: "get",
//     }
//   );

//   let data = await res.json();
//   console.log(data);
//   data = data.results[0];
//   //Lat/long for given address:
//   let locData = await data.geometry.location;

//   // Pass data to the page via props
//   return { props: { locData } };
// }
