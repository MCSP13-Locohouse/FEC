import React, { useState } from "react";
// import "react-date-range/dist/styles.css"; // main style file
// import "react-date-range/dist/theme/default.css"; // theme css file
// import {
//   DateRangePicker,
//   DateRange,
//   Calendar,
//   DefinedRange,
// } from "react-date-range";

function Search() {
  // const [startDate, setStartDate] = useState(new Date());
  // const [endDate, setEndDate] = useState(new Date());

  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  // const selectionRange = {
  //   startDate: startDate,
  //   endDate,
  //   key: "selection",
  // };

  // function handleSelect(ranges) {
  //   setStartDate(ranges.selection.startDate);
  //   setEndDate(ranges.selection.endDate);
  // }
  console.log(startDate);
  console.log(endDate);
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

export default Search;
