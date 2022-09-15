import React, { useState } from "react";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRange } from "react-date-range";
import { format } from "date-fns";

function Search({ date, setDate, openDate, setOpenDate, handleChange }) {
  return (
    <div id={"check_in"}>
      <div id="checkin" name="checkin">
        CHECK-IN
      </div>
      <input
        name="btn1"
        type="button"
        className="visitDates"
        onClick={() => setOpenDate(!openDate)}
        value={`${format(date[0].startDate, "MM/dd/yyyy")}`}
        onChange={handleChange}
      />
      <div id="checkout" name="checkout">
        CHECKOUT
      </div>
      <input
        name="btn2"
        type="button"
        className="visitDates"
        onClick={() => setOpenDate(!openDate)}
        value={`${format(date[0].endDate, "MM/dd/yyyy")}`}
        onChange={handleChange}
      />
      {openDate && (
        <DateRange
          editableDateInputs={true}
          onChange={(item) => setDate([item.selection])}
          moveRangeOnFirstSelection={false}
          ranges={date}
          className="date"
        />
      )}
    </div>
  );
}

export default Search;
