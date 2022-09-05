import React from "react";
import Image from "next/image";
import { MagnifyingGlassCircleIcon } from "@heroicons/react/24/solid";

function Header() {
  return (
    <header>
      <h1></h1>

      <div className="logo">
        <img src={"/Airbnb-Logo.png"} />
      </div>

      <div className="middle">
        <input
          type={"text"}
          className="headerSearch"
          placeholder="Start your search"
        />
        <MagnifyingGlassCircleIcon className="magnify" />
      </div>

      <div></div>
    </header>
  );
}

export default Header;
