import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Description from "../components/Description";
import React, { Component } from "react";
import Reviews from "../components/Review";
const post = (props) => {
  console.log(props);
  return <p>My post link params</p>;
};
post.getInitialProps = ({ query }) => {
  return { myParams: query };
};

const App = (props) => {
  return (
    <div>
      <div className={styles.container}>
        <Reviews />
      </div>
    </div>
  );
};
export default App;