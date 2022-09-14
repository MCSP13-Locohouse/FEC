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
// import useSWR from "swr";

// const fetcher = (url) => axios.get(url).then((res) => res.data);

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
    // axios.get("/api/properties").then((res) => {
    //   this.setState((prevState) => ({
    //     property: res.data.properties[0],
    //   }));
    // });

    // axios.get("/api/users").then((res) => {
    //   this.setState({
    //     users: res.data.users,
    //     host: res.data.users[0].name_firstlast,
    //   });
    // });

    // axios.get("/api/comments").then((res) => {
    //   this.setState({
    //     comment: res.data.comments,
    //     stars: res.data.comments[0].stars,
    //   });
    // });

    // axios.get("/api/reservations").then((res) => {
    //   this.setState({
    //     startDate: res.data.startDate,
    //     endDate: res.data.endDate,
    //   });
    // });
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

  // const { commentsData, commentsError } = useSWR("api/comments", fetcher);
  // const { propsData, propsError } = useSWR("api/properties", fetcher);
  // const { reservsData, reservsError } = useSWR("api/reservations", fetcher);
  // const { usersData, usersError } = useSWR("api/users", fetcher);

  // if (commentsError) return <p>No comments found</p>;
  // if (!commentsData) return <p>Loading comments...</p>;

  // if (propsError) return <p>No property data found</p>;
  // if (!propsData) return <p>Loading props...</p>;

  // if (reservsError) return <p>No reservations data found</p>;
  // if (reservsData) return <p>Loading reservs...</p>;

  // if (usersError) return <p>No users data found</p>;
  // if (usersData) return <p>Loading users...</p>;

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

          {/* <div>
            <h2>The comments data is:</h2>
            <p>{commentsData.comments}</p>
          </div>

          <div>
            <h2>The properties data is:</h2>
            <p>{propsData.properties}</p>
          </div>

          <div>
            <h2>The reservations data is:</h2>
            <p>{reservsData.reservations}</p>
          </div>

          <div>
            <h2>The users data is:</h2>
            <p>{usersData.users}</p>
          </div> */}

          <Map location={this.state.property} />
        </main>

        <footer className={styles.footer}>2022 LocoHouse</footer>
      </div>
    );
  }
}
