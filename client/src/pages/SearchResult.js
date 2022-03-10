import React from "react";
import Footer from "../components/compenent-footer/Footer";
import JobsContainer from "../components/JobsContainer";
import NavBar from "../components/NavBar";
import SearchCard from "../components/SearchCard";
export default function SearchResult() {
  return (
    <div>
      <NavBar />
      {/* <SearchCard /> */}
      <JobsContainer />
      <Footer />
    </div>
  );
}
