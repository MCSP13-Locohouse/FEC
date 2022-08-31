import React, { useState } from "react";

function Calendar() {
  const [showSearch, setShowSearch] = useState(false);

  return (
    <div className="calendar">
      <div className="search_banner">
        <button
          className="search_bannerBtn"
          // variant="outlined"
          onClick={() => setShowSearch(!showSearch)}
        >
          Search Dates
        </button>
        {showSearch && <h1>SHOW DATE PICKER</h1>}
      </div>
    </div>
  );
}

export default Calendar;
