import React from "react";
import styles from "../styles/Home.module.css";


const Reservations = ({ property }) => {
    return (
      <> 
        <span className={styles.price}>
        price per night 
        </span>
        <span className="stars">stars</span>
        <br></br>
        <form className={styles.form}>
        <input className={styles.check_in}
          type="text"
          placeholder="check-in YYYMMDD"
        />{" "}
        <input 
        className= {styles.check_out}
        type="text"
        placeholder="check-out YYYMMDD"
      />{" "}
        <br></br>
        <input />
        <br></br>
        <button className={styles.reserve_button}>Reserve</button>
        <p>You won`t be charged yet</p>
        </form>
        <span className={styles.leftrespan}>price X 2 nights</span>
        <span></span>
        <span className={styles.rightrespan}>price x 2</span>
        <br></br>
        <span className={styles.leftrespan}>Cleaning Fee</span>
        <span></span>
        <span className={styles.rightrespan}>60</span>
        <br></br>
        <span className={styles.leftrespan}>Service Fee</span>
        <span></span>
        <span className={styles.rightrespan}>41</span>
        <br></br>
        <span className={styles.leftrespan}>Total Before Taxes</span>
        <span></span>
        <span className={styles.rightrespan}>price+cleaning+service</span> 
      </>
    );
  };

export default Reservations;