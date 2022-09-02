import React, { useState, useEffect } from "react";
import styles from "../styles/Home.module.css";
import axios from "axios";

const cleaningFee = 60;
const serviceFee = 41;


function Reservations(property) {
  const [properties, getProperties] = useState([]);
  const [comments, getComments] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/api/properties", {
      mode: "cors",
    })
      .then((response) => response.json())
      .then((data) => {
      // console.log(data);
      getProperties(data);
      });
  }, []);

  useEffect(() => {
    fetch("http://localhost:8000/api/comments", {
      mode: "cors",
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        getComments(data);
      });
  }, []);

  console.log(properties.properties)

  return (
      <>
    <div className={styles.reservations_box}>
      <span className={styles.price}>{/*properties.properties.price*/}</span>
      <span className="stars">{/*comments[0].stars */}</span>
      <br></br>
      <div className={styles.spacer}></div>
      <form
        onSubmit={console.log(
          "Please wait while you are transferred to our third-party payment site"
        )}
        className={styles.form}
      >
        <hr size="1" width="90%" color="grey"></hr>
        <input
          required
          className={styles.check_in}
          type="text"
          placeholder="check-in YYYMMDD"
        />{" "}
        <input
          required
          className={styles.check_out}
          type="text"
          placeholder="check-out YYYMMDD"
        />{" "}
        <br></br>
        <div className={styles.spacer}></div>
        <label> Number of Guests</label>
        <select>
          <option value="1"> 1</option>
          <option value="2"> 2</option>
          <option value="3"> 3</option>
          <option value="4"> 4</option>
          <option value="5"> 5</option>
          <option value="More than that"> More than that!</option>
        </select>
        <hr size="1" width="90%" color="grey"></hr>
        <br></br>
        <button type="submit" className={styles.reserve_button}>
          Reserve
        </button>
        <p>You won`t be charged yet</p>
      </form>
      <div className={styles.spacer}></div>
      <span className={styles.leftrespan}>price X 2 nights</span>
      <span className={styles.rightrespan}>{/*properties[0].price * 28 */}</span>
      <div className={styles.spacer}></div>
      <br></br>
      <div className={styles.spacer}></div>
      <span className={styles.leftrespan}>Cleaning Fee</span>
      <span className={styles.rightrespan}>{cleaningFee}</span>
      <div className={styles.spacer}></div>
      <br></br>
      <div className={styles.spacer}></div>
      <span className={styles.leftrespan}>Service Fee</span>
      <span className={styles.rightrespan}>{serviceFee}</span>
      <div className={styles.spacer}></div>
      <br></br>
      <hr size="1" width="90%" color="grey"></hr>
      <div className={styles.spacer}></div>
      <span className={styles.leftrespan}><b>Total Before Taxes</b></span>
      <span className={styles.rightrespan}><b>{/* + serviceFee + cleaningFee */}</b></span>
    </div>
    </>
  );
  
}
export default Reservations;
