import React from "react";
import SearchCard from "../components/SearchCard";
import TextHeader from "../components/TextHeader";
import Navbar from "../components/NavBar/Navbar";
import AddTime from "./AddTime";
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
