import { connect } from "react-redux";
import _ from "lodash";
import Appointment from "../components/appointmentComponent";
import {
  DateDataContainer,
  DateContainer,
  DateApointmentContainer,
} from "../assets/styledComponent/index";
import { useState } from "react";

function DateComponent(props) {


  return (
    <>
      <DateDataContainer>
        <DateContainer>{props.date}</DateContainer>
        <DateApointmentContainer>
          {props.appointments.map((appointment) =>
            appointment.date ===
            props.date + "-" + props.month + "-" + props.year ? (
              <Appointment
                startTime={appointment.startTime}
                endTime={appointment.endTime}
              ></Appointment>
            ) : null
          )}
        </DateApointmentContainer>
      </DateDataContainer>
    </>
  );
}


export default DateComponent;
