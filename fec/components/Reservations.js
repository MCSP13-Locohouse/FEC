import React, { useState, useEffect } from "react";
import styles from "../styles/Home.module.css";
import axios from "axios";
import Calendar from "./Calendar.js";
import Search from "./Search";
import { format } from "date-fns";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRange } from "react-date-range";

const cleaningFee = 60;
const serviceFee = 41;
const guest_numbers = 0;
function retNights(date1, date2) {
  let result = Math.floor((date2 - date1) / 1000 / 60 / 60 / 24);
  return result;
}

const Reservations = ({ property, reviews }) => {
  const [openDate, setOpenDate] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  let averageRating = 0;

  const reviewAverage = () => {
    for (let i = 0; i < reviews.length; i++) {
      const starNumbers = parseInt(reviews[i].stars);
      averageRating += starNumbers;
    }
    averageRating = averageRating / reviews.length;
    return averageRating;
  };

  reviewAverage();

  function resClick(event, date) {
    event.preventDefault();
    let formData = new FormData(document.getElementById("form"));
    alert(
      "Reservation entered. You will now be transferred to our third party payment site"
    );

    axios
      .post("/api/reservations", {
        prop_id: "1",
        first_name: "Joe",
        last_name: "Snuffy",
        guest_num: formData.get("guest_num"),
        startdate: formData.get("checkin"),
        enddate: formData.get("checkout"),
      })
      .then((response) => console.log(response))
      .catch(function (error) {
        console.log(error);
      });
  }

  const resTotal =
    parseInt(
      property.price *
        Math.floor((date[0].endDate - date[0].startDate) / 1000 / 60 / 60 / 24)
    ) +
    parseInt(cleaningFee) +
    parseInt(serviceFee);

  return (
    <div className="container">
      <div className={styles.reservations_box}>
        <span className={styles.price}>${property.price} per night</span>
        <span className="stars">{averageRating} Stars!</span>
        <br></br>
        <div className={styles.spacer}></div>

        <form id="form" onSubmit={resClick} className={styles.form}>
          <hr size="1" width="90%" color="grey"></hr>

          <div id={"check_in"}>
            <div id="checkin">CHECK-IN</div>
            <input
              name="checkin"
              // type="button"

              className="visitDates"
              onClick={() => {
                setOpenDate(!openDate);
              }}
              value={`${format(date[0].startDate, "MM/dd/yyyy")}`}
            />
            <div id="checkout">CHECKOUT</div>
            <input
              name="checkout"
              // type="button"
              className="visitDates"
              onClick={() => {
                setOpenDate(!openDate);
              }}
              value={`${format(date[0].endDate, "MM/dd/yyyy")}`}
            />
            {openDate && (
              <DateRange
                editableDateInputs={true}
                onChange={(item) => setDate([item.selection])}
                // onchange={handleChange}
                moveRangeOnFirstSelection={false}
                ranges={date}
                className="date"
              />
            )}
          </div>
          <br></br>
          <div className={styles.spacer}></div>
          <label> Number of Guests</label>
          <select name="guest_num">
            <option name="options" value="1">
              {" "}
              1
            </option>
            <option name="options" value="2">
              {" "}
              2
            </option>
            <option name="options" value="3">
              {" "}
              3
            </option>
            <option name="options" value="4">
              {" "}
              4
            </option>
            <option name="options" value="5">
              {" "}
              5
            </option>
            <option name="options" value="More than that">
              {" "}
              More than that!
            </option>
          </select>
          <hr size="1" width="90%" color="grey"></hr>
          <br></br>
          <button type="submit" className={styles.reserve_button}>
            <b>Reserve</b>
          </button>
          <p>You won`t be charged yet</p>
        </form>
        <div className={styles.spacer}></div>
        <span className={styles.leftrespan}>
          <u>price X {retNights(date[0].startDate, date[0].endDate)} nights</u>
        </span>
        <span className={styles.rightrespan}>
          $
          {property.price *
            Math.floor(
              (date[0].endDate - date[0].startDate) / 1000 / 60 / 60 / 24
            )}
        </span>
        <div className={styles.spacer}></div>
        <br></br>
        <div className={styles.spacer}></div>
        <span className={styles.leftrespan}>
          <u>Cleaning Fee</u>
        </span>
        <span className={styles.rightrespan}>${cleaningFee}</span>
        <div className={styles.spacer}></div>
        <br></br>
        <div className={styles.spacer}></div>
        <span className={styles.leftrespan}>
          <u>Service Fee</u>
        </span>
        <span className={styles.rightrespan}>${serviceFee}</span>
        <div className={styles.spacer}></div>
        <br></br>
        <hr size="1" width="90%" color="grey"></hr>
        <div className={styles.spacer}></div>
        <span className={styles.leftrespan}>
          <b>Total Before Taxes</b>
        </span>
        <span className={styles.rightrespan}>
          <b>${resTotal}</b>
        </span>
      </div>
      <Calendar date={date} setDate={setDate} />
    </div>
  );
};
export default Reservations;
