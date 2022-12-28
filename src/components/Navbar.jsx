import React from "react";
import { Link } from "react-router-dom";
import { UilYoutube } from "@iconscout/react-unicons";
import SearchBar from "./SearchBar";

export default function Navbar() {
  return (
    <div className="flex flex-row justify-between align-center p-4 bg-state-400">
      <Link to="/">
        <UilYoutube size="45" color="red" />
      </Link>
      <SearchBar />
    </div>
  );
}
