import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Description from "../components/Description";
import Reservations from "../components/Reservations";
// import Map from "../components/Map";
import React, { Component } from "react";


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      property: {
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
  }

  render() {
    return (
      <div className={styles.container}>
        <Head>
          <title>Create Next App</title>
        </Head>

        <Description property={this.state.property} />
        <Reservations />

        <main className={styles.main}>
        
        </main>    
      
        <footer className={styles.footer}></footer>
      </div>
    );
  }
}
