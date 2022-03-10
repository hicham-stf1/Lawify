import moment from "moment";
import { FaLocationArrow, FaBriefcase, FaCalendarAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
// import { useAppContext } from "../context/appContext";
import Wrapper from "../assets/wrappers/Job";
import JobInfo from "./JobInfo";

// let date = moment("createdAt");
// date = date.format("MMM Do, YYYY");
const Job = () => {
  return (
    <Wrapper>
      <header>
        <div className="main-icon"></div>
        <div className="info">
          <h5>Nom Complet</h5>
          <p style={{ marginBottom: "8px" }}>Spécialité</p>
          {/* Rate Here */}
        </div>
      </header>
      <div className="content">
        <div className="content-center">
          {/* implemenet calendar here */}
          {/* <JobInfo icon={<FaLocationArrow />} text="jobLocation" /> */}
        </div>
        <footer>
          <div className="actions">
            <Link
              to="/Confirmation"
              className="btn edit-btn"
              // onClick={() => setEditJob(_id)}
            >
              Voir le Profil
            </Link>
          </div>
        </footer>
      </div>
    </Wrapper>
  );
};
export default Job;
