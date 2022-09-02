import React, { useState } from "react";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRange } from "react-date-range";

function Calendar({ props, date, setDate }) {
  // const [checkDate, setDate] = useState([
  //   {
  //     startDate: new Date(),
  //     endDate: new Date(),
  //     key: "selection",
  //   },
  // ]);

  return (
    <div className="search">
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
          direction={"horizontal"}
          editableDateInputs={true}
          minDate={new Date()}
        />
      }
    </div>
  );
}

export default Calendar;
