import React, { useState, useEffect } from "react";
import styles from "../styles/Home.module.css";
import axios from "axios";

const cleaningFee = 60;
const serviceFee = 41;

function retNights(date1, date2) {
  return date2 - date1;
}

const Reservations = ({ property }) => {
  const [state, setState] = useState({
    chkout: "",
    chkin: "",
  });

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.chkout]: e.target.value,
      [e.target.chkin]: e.target.value,
    });
  };

  const resTotal = property.price + cleaningFee + serviceFee;

  return (
    <div className={styles.reservations_box}>
      <span className={styles.price}>${property.price}</span>
      <span className="stars">stars</span>
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
          type="date"
          name="date"
          id="dateinputin"
          placeholder="check-in date"
          value={state.chkin}
          onChange={handleChange}
        />{" "}
        <input
          required
          className={styles.check_out}
          type="date"
          name="date"
          id="dateinputout"
          placeholder="check-out date"
          value={state.chkout}
          onChange={handleChange}
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
      <span className={styles.leftrespan}>
        price X {/*retNights(state.chkout, state.chkin) */} nights
      </span>
      <span className={styles.rightrespan}>{property.price * 2}</span>
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
      <span className={styles.leftrespan}>
        <b>Total Before Taxes</b>
      </span>
      <span className={styles.rightrespan}>
        <b>{resTotal}</b>
      </span>
    </div>
  );
};
export default Reservations;
