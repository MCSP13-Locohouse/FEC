import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Description from "../components/Description";
import Reservations from "../components/Reservations";
// import Map from "../components/Map";
import React, { Component } from "react";
import axios from "axios";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      property: {
        id: -1,
        title: "",
        host: "",
        specs: "",
        about: "",
        space: "",
        guest: "",
        other: "",
        amenities: [],
      },
    };
    this.handleProperty = this.handleProperty.bind(this);
  }

  handleProperty() {
    axios.post("/api/properties").then((response) => {
      console.log("Response.data.properties: ", response.data.properties);
    });
  }

  render() {
    return (
      <div className={styles.container}>
        <Head>
          <title>Create Next App</title>
        </Head>


        <Description property={this.state.property} handleProperty={this.handleProperty} />

        <Map property={this.state.property} />

        <Reservations />

        <main className={styles.main}>
        
        </main>    
      
        <footer className={styles.footer}></footer>
      </div>
    );
  }
}
