import React from "react";
import SearchCard from "../components/SearchCard";
import TextHeader from "../components/TextHeader";
import Navbar from "../components/NavBar/Navbar";
import "scheduler-calendar/dist/index.css";

export default function WelcomePage() {
  return (
    <div>
      <Navbar />
      <TextHeader />
      <SearchCard />
      {/* <Requests /> */}
    </div>
  );
}
