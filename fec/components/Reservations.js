import React from "react";
import styles from "../styles/Home.module.css";


const Reservations = ({ property }) => {
    return (
      <> 
        <span id="{property-price}">
        price per night
        </span>
        <span>stars</span>
        <br></br>
        <input></input>
        <input></input>
        <br></br>
        <input></input>
        <br></br>
        <button>Reserve</button>
        <p>You won`t be charged yet</p>
        <span>price X 2 nights</span>
        <span></span>
        <span>price x 2</span>
        <br></br>
        <span>Cleaning Fee</span>
        <span></span>
        <span>60</span>
        <br></br>
        <span>Service Fee</span>
        <span></span>
        <span>41</span>
        <br></br>
        <span>Total Before Taxes</span>
        <span></span>
        <span>price+cleaning+service</span> 
      </>
    );
  };

export default Reservations;