import React from "react";
import styles from "../styles/Home.module.css";


const Reservations = ({ property }) => {
    return (
      <div className={styles.reservations_box}> 
        <span className={styles.price}>
        price per night 
        </span>
        <span className="stars">stars</span>
        <br></br>
        <form onSubmit={console.log("Please wait while you are transferred to our third-party payment site")}className={styles.form}>
        <input required className={styles.check_in}
          type="text"
          placeholder="check-in YYYMMDD"
        />{" "}
        <input required className= {styles.check_out}
        type="text"
        placeholder="check-out YYYMMDD"
      />{" "}
        <br></br>
        <input />
        <br></br>
        <button type="submit"className={styles.reserve_button}>Reserve</button>
        <p>You won`t be charged yet</p>
        </form>
        <span className={styles.leftrespan}>price X 2 nights</span>
        <span className={styles.rightrespan}>price x 2</span>
        <br></br>
        <span className={styles.leftrespan}>Cleaning Fee</span>
        <span className={styles.rightrespan}>60</span>
        <br></br>
        <span className={styles.leftrespan}>Service Fee</span>
        <span className={styles.rightrespan}>41</span>
        <br></br>
        <span className={styles.leftrespan}>Total Before Taxes</span>
        <span className={styles.rightrespan}>price+cleaning+service</span> 
      </div>
    );
  };

export default Reservations;