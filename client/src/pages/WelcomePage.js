import React from "react";
import SearchCard from "../components/SearchCard";
import TextHeader from "../components/TextHeader";

import Footer from "../components/compenent-footer/Footer";
import Navbar from "../components/NavBar/Navbar";
// import Dashboard from "./Dashboard";
export default function WelcomePage() {
  return (
    <div>
      <Navbar />
      <TextHeader />
      <SearchCard />
    </div>
  );
}
