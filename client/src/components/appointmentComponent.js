import { AppointmentContainer } from "../assets/styledComponent/index";

function Appointment(props) {
  return (
    <AppointmentContainer>
      {props.startTime} - {props.endTime}
      {/* {props.Time1} - {props.Time2}*/}
    </AppointmentContainer>
  );
}

export default Appointment;
