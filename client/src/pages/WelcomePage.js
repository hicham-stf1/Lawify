import React from "react";
import SearchCard from "../components/SearchCard";
import TextHeader from "../components/TextHeader";
import Navbar from "../components/NavBar/Navbar";
import "scheduler-calendar/dist/index.css";
import Appel from "../components/compenent-footer/appel";

export default function WelcomePage() {
  return (
    <div>
      <Navbar />
      <TextHeader />
      <SearchCard />
      <Appel />
      {/* <Requests /> */}
    </div>
  );
}
