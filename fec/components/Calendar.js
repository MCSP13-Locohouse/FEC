import React, { useState } from "react";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRange } from "react-date-range";
import { HomeIcon } from "@heroicons/react/24/solid";
import styles from "../styles/Home.module.css";
function Calendar({ date, setDate }) {
  console.log(date[0].startDate);
  console.log(date[0].endDate);
  return (
    <div className="search">
      {date[0].startDate === date[0].endDate ? (
        <h2 className={styles.h2}>Select checkout date</h2>
      ) : (
        <h2 className={styles.h2}>Select check-in date</h2>
      )}
      <h5 className={styles.h5}>Minimum stay: 2 nights</h5>
      {
        <DateRange
          onChange={(item) => setDate([item.selection])}
          moveRangeOnFirstSelection={false}
          ranges={date}
          className={styles.calendar}
          months={2}
          showSelectionPreview={true}
          direction={"horizontal"}
          editableDateInputs={true}
          minDate={new Date()}
          value={date}
        />
      }
    </div>
  );
  console.log(value);
}

export default Calendar;
