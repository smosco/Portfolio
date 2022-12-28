import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

export default function Root() {
  return (
    <div className="bg-black">
      <Navbar />
      <Outlet />
    </div>
  );
}
