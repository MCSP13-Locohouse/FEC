import Head from "next/head";

import styles from "../styles/Home.module.css";

import Description from "../components/Description";
import Reservations from "../components/Reservations";
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
        amenities: [],
      },
      comments: [],
      stars: "",
      users: [],
    };
    this.handleProperty = this.handleProperty.bind(this);
  }

  handleProperty() {
    axios.get("/api/properties").then((response) => {
      console.log("Response.data.properties: ", response.data.properties);
      this.setState((prevState) => ({
        property: response.data.properties[0],
      }));
    });
  }
  componentDidMount() {
    axios.get("/api/properties").then((res) => {
      // console.log(res.data.properties);
    });

    axios.get("/api/users").then((res) => {
      console.log(res.data.users)
      this.setState({users: res.data.users})
    });

    axios.get("/api/comments").then((res) => {
      this.setState({ comments: res.data.comments });
    });
  }

  //mike needs bind and component did mount? also variations of these?
  render() {
    return (
      <div className={styles.container}>
        <Head>
          <title>Create Next App</title>
        </Head>

        <Description property={this.state.property} handleProperty={this.handleProperty} />


        <Map property={this.state.property} />

        <Reservations />


        <Reviews reviews={this.state.comments} users={this.state.users}/>

        <Calendar />

        <main className={styles.main}></main>

        <footer className={styles.footer}></footer>

      </div>
    );
  }
}
