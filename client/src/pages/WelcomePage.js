import React from "react";
import SearchCard from "../components/SearchCard";
import TextHeader from "../components/TextHeader";
import Navbar from "../components/NavBar/Navbar";
import AddTime from "./AddTime";
import Profiles from "./ProfilesForSearch/Profiles";
import SchedulerCalendar from "scheduler-calendar";
import "scheduler-calendar/dist/index.css";
import ScheduleSelector from "react-schedule-selector";

export default function WelcomePage() {
  return (
    <div>
      <Navbar />
      <TextHeader />
      <SearchCard />
    </div>
  );
}
