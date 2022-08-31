import React from "react";
const Reservations = ({ property }) => {
    return (
      <div className="Reservation"> 
        <span id="{property-price}">
        price per night
        </span>
        <span>stars</span>
        <br></br>
        <input></input>
        <input></input>
        <br></br>
        <input></input>
        <button></button>Reserve
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
      </div>
    );
  };

export default Reservations;