import React, { useState, useEffect } from "react";
import styles from "../styles/Home.module.css";
import axios from "axios";
import Calendar from "./Calendar.js";
import Search from "./Search";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file


const cleaningFee = 60;
const serviceFee = 41;

function retNights(date1, date2) {
  let result = Math.floor((((((date2 - date1)/1000)/60)/60)/24));
  // console.log(date2);
  // console.log(date1);
  // console.log(result)
  return result;
}

function resClick(event) {
  event.preventDefault();
  console.log('clickEvent triggered')
  const formData = new FormData(event.target);
  axios.post('/api/reservations', {
    prop_id: "1",
    first_name: "Joe",
    last_name: "Snuffy",
    guest_num: formData.get("guest_num"),
    startdate: reservations.startDate,
    enddate: reservations.endDate
  })
  .then((response) => response.json()).then((response) => console.log(response))
  .catch(function (error) {
    console.log(error);
  });
}

// function paymentSite() {
// alert("Please wait while you are transferred to our third-party payment site")
// }

const Reservations = ({ property, handleDates }) => {
  const [openDate, setOpenDate] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  // console.log(date[0].startDate);
  // console.log(date[0].endDate);
  const handleChange = (e) => {
    e.preventDefault();
    setDate({
      ...date,
      startDate: e.currentTarget.value,
      endDate: e.currentTarget.value,
    });
    console.log(date[0].startDate);
    console.log(e.currentTarget.value);
  };
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
        <span className={styles.price}>${property.price}</span>
        <span className="stars">stars</span>
        <br></br>
        <div className={styles.spacer}></div>
        <form
          onSubmit={resClick}
          className={styles.form}
          // onChange={handleChange}
        >
          <hr size="1" width="90%" color="grey"></hr>
          <Search
            date={date}
            setDate={setDate}
            openDate={openDate}
            setOpenDate={setOpenDate}
            onChange={handleChange}
          />

          <br></br>
          <div className={styles.spacer}></div>
          <label> Number of Guests</label>
          <select name="guest_num">
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
          price X {retNights(date[0].startDate, date[0].endDate)} nights
        </span>
        <span className={styles.rightrespan}>
          {property.price *
            Math.floor(
              (date[0].endDate - date[0].startDate) / 1000 / 60 / 60 / 24
            )}
        </span>
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
      <Calendar date={date} setDate={setDate} />
    </div>
  );
};
export default Reservations;

// const [chkin, setChkin] = useState({
//   chkin: new Date().toISOString().slice(0, 10),
// });

// const [chkout, setChkout] = useState({
//   chkout: new Date().toISOString().slice(0, 10),
// });

{
  /* <input
            required
            className={styles.check_in}
            type="date"
            name="date"
            id="dateinputin"
            placeholder="check-in date"
            value={chkin.chkin}
            // onChange={handleChange}
            editableDateInputs={true}
            onChange={(item) => setChkin([item])}
            moveRangeOnFirstSelection={false}
            // ranges={date}
          />{" "}
          <input
            required
            className={styles.check_out}
            type="date"
            name="date"
            id="dateinputout"
            placeholder="check-out date"
            value={chkout.chkout}
            // onChange={handleChange}
            editableDateInputs={true}
            onChange={(item) => setChkout([item])}
            moveRangeOnFirstSelection={false}
            // ranges={date}
            // className="date"
          />{" "} */
}
