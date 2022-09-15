import Head from "next/head";
import styles from "../styles/Home.module.css";
import Description from "../components/Description";
import Reservations from "../components/Reservations";
import { Loader } from "@googlemaps/js-api-loader";
import React, { Component, useEffect, useState } from "react";
import Reviews from "../components/Review";
import axios from "axios";
import Header from "../components/Header";
import Map from "../components/Map";
import Gallery from "../components/Gallery";

export default function App() {
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

  return (
    <div className={styles.container}>
      <Head>
        <title>chairbnb</title>
      </Head>

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
}
