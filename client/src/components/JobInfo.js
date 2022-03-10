import Wrapper from "../assets/wrappers/JobInfo";
import "react-calendar/dist/Calendar.css";
import React, { useState } from "react";
import Calendar from "react-calendar";
import TimePicker from "react-time-picker";

const JobInfo = ({ icon, text }) => {
  // const [value, onChange] = useState(new Date());
  const [value, onChange] = useState("10:00");
  return (
    <div>
      <Wrapper>
        <span className="icon">{icon}</span>
        <span className="text">{text}</span>
      </Wrapper>
      <TimePicker onChange={onChange} value={value} />
    </div>
  );
};

export default JobInfo;
