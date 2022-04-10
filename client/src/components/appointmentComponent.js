import { AppointmentContainer } from "../assets/styledComponent/index";
import { Link } from "react-router-dom";

function Appointment(props) {
  const link = `/book-appointment/${props.selectedAvocat}/${props.appointmentId}/${props.date}/${props.startTime}/${props.endTime}`;
  return (
    <Link style={{ textDecoration: "none" }} to={link}>
      <AppointmentContainer>
        {props.startTime} - {props.endTime}
      </AppointmentContainer>
    </Link>
  );
}

export default Appointment;
