import React, { useState } from "react";
import { Button } from "@material-ui/core";

function Calendar() {
  const [showSearch, setShowSearch] = useState(false);

  return (
    <div className="calendar">
      <div className="search_banner">
        <Button
          className="search_bannerBtn"
          variant="outlined"
          onClick={() => setShowSearch(!showSearch)}
        >
          Search Dates
        </Button>
        {showSearch && <Search />}
      </div>
    </div>
  );
}

export default Calendar;
