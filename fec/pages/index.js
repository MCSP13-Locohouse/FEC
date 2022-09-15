import Head from "next/head";
import styles from "../styles/Home.module.css";
import Description from "../components/Description";
import Reservations from "../components/Reservations";
import { Loader } from "@googlemaps/js-api-loader";
import React, { Component, useEffect, useState } from "react";
import Reviews from "../components/Review";
import axios from "axios";
import Header from "../components/Header";
import Map, { StaticGoogleMap, Marker, Path } from "../components/Map";
import Gallery from "../components/Gallery";

export default function App() {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     host: "",
  //     property: {
  //       prop_id: -1,
  //       title: "",
  //       price: "",
  //       specs: "",
  //       about: "",
  //       prop_space: "",
  //       guest: "",
  //       other: "",
  //       number_street: "",
  //       us_state: "",
  //       zip: "",
  //       host: "",
  //       amenities: { ameniGroups: [] },
  //     },

  //     prop_id: [],
  //     stars: [],
  //     comment: [],

  //     users: [],
  //     reservations: {
  //       startDate: [],
  //       endDate: [],
  //     },
  //     mapLocation: "",
  //   };
  // }

  // componentDidMount() {
  //   axios.get("/api/").then((res) => {
  //     this.setState({
  //       comment: res.data.comments,
  //       stars: res.data.comments[0].stars,
  //       property: res.data.properties[0],
  //       startData: res.data.reservations.startDate,
  //       endDate: res.data.reservations.endDate,
  //       users: res.data.users,
  //       host: res.data.users[0].name_firstlast,
  //     });
  //   });
  // }

  const [comments, setComments] = useState([]);
  const [properties, setProperties] = useState({
    amenities: { ameniGroups: [] },
  });
  const [reservations, setReservations] = useState([]);
  const [users, setUsers] = useState({ name_firstlast: "" });

  useEffect(() => {
    async function getListingData() {
      const res = await axios.get("/api/");
      setComments(await res.data.comments);
      setProperties(await res.data.properties[0]);
      setReservations(await res.data.reservations);
      setUsers(await res.data.users[0]);
      console.log(res.data);
    }
    getListingData();
  }, []);

  // render() {
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
        <Gallery reviews={comments} users={users} />

        <Reservations
          property={properties}
          reservations={reservations}
          reviews={comments}
        />

        <Description property={properties} host={users} />

        <Reviews reviews={comments} users={users} />

        <Map location={properties} />
      </main>
      <footer className={styles.footer}>2022 LocoHouse</footer>
    </div>
  );
  // }
}
