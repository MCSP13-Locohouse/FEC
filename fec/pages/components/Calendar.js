import React, { useState } from "react";
// import { Button } from "@material-ui/core";
import Search from "../../components/Search";

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
        {showSearch && <Search />}
      </div>
    </div>
  );
}

export default Calendar;
