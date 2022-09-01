import styles from "../styles/Home.module.css";
import { format } from "date-fns";
import React, { useState } from "react";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import {
  DateRangePicker,
  DateRange,
  Calendar,
  DefinedRange,
} from "react-date-range";

const Reservations = ({ property }) => {
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  return (
    <div>
      <div className={styles.reservations_box}>
        <span className={styles.price}>price per night</span>
        <span className="stars">stars</span>
        <br></br>
        <form
          onSubmit={console.log(
            "Please wait while you are transferred to our third-party payment site"
          )}
          className={styles.form}
        >
          <span id={styles.check_in}>
            CHECK-IN
            <input
              type="text"
              placeholder="Input"
              className="visitDates"
              value={`${format(date[0].startDate, "MM/dd/yyyy")}`}
            />
          </span>

          <span id={styles.check_out}>
            CHECKOUT
            <input
              type="text"
              placeholder="Input"
              className="visitDates"
              value={`${format(date[0].endDate, "MM/dd/yyyy")}`}
            />
          </span>

          <br></br>
          <label> Number of Guests</label>
          <select>
            <option value="1"> 1</option>
            <option value="2"> 2</option>
            <option value="3"> 3</option>
            <option value="4"> 4</option>
            <option value="5"> 5</option>
            <option value="more than that"> More than that!</option>
          </select>
          <br></br>
          <button type="submit" className={styles.reserve_button}>
            Reserve
          </button>
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
      <h2>Select checkout date</h2>
      <h5>Minimum stay: 2 nights</h5>
      {
        <DateRange
          onChange={(item) => setDate([item.selection])}
          moveRangeOnFirstSelection={false}
          ranges={date}
          className="calendar"
          months={2}
          showSelectionPreview={true}
          s
          direction={"horizontal"}
          editableDateInputs={true}
        />
      }
    </div>
  );
};

export default Reservations;
