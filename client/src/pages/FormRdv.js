import { useState, useEffect } from "react";
import FormRow from "../components/FormRow";
import Wrapper from "../assets/wrappers/RegisterPage";

import { useAppContext } from "../context/appContext";
import { useNavigate } from "react-router-dom";
import UserNavbar from "../components/NavBar/UserNavBar";
import Footer from "../components/compenent-footer/Footer";
import { useParams } from "react-router-dom";
import axios from "axios";

// global context and useNavigate later

const initialState = {
  nom: "",
  prenom: "",
  email: "",
  telephone: "",
  isMember: true,
};
// if possible prefer local state
// global state

function FormRdv() {
  const [values, setValues] = useState(initialState);
  const [userData, setUserData] = useState(null);
  const selectedAvocat = useParams().selectedAvocat;
  const date = useParams().date;
  const startTime = useParams().startTime;
  const endTime = useParams().endTime;

  // global context and useNavigate later
  const { isLoading, showAlert, displayAlert, loginUser, user } =
    useAppContext();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    const { nom, prenom, email, telephone } = values;
    if (!email || !telephone || !nom || !prenom) {
      displayAlert();
      return;
    }
  };

  useEffect(() => {
    const getUserData = async () => {
      try {
        const res = await axios("/api/users?userId=" + selectedAvocat);
        setUserData(res.data);
        console.log(res.data);
        console.log(` user : ${userData}`);
      } catch (err) {
        console.log(err);
      }
    };
    getUserData();
  }, [selectedAvocat]);

  return (
    <>
      <UserNavbar />

      <Wrapper className="full-page">
        <form className="form" onSubmit={onSubmit}>
          <h3>Prendre votre rendez-vous</h3>
          <div className="rdv-infos">
            {/* <div>Avocat : {userData.name}</div> */}
            <div>Date : {date}</div>
            <div>De : {startTime}</div>
            <div>À : {endTime}</div>
          </div>

          {/* name field */}
          <div className="form-row">
            {/* email input */}
            <FormRow
              type="text"
              name="nom"
              labelText="nom"
              value={values.nom}
              handleChange={handleChange}
            />
            <FormRow
              type="text"
              name="prenom"
              labelText="prenom"
              value={values.prenom}
              handleChange={handleChange}
            />
            <FormRow
              type="email"
              name="email"
              labelText="email"
              value={values.email}
              handleChange={handleChange}
            />
            <FormRow
              type="text"
              name="téléphone"
              labelText="téléphone"
              value={values.telephone}
              handleChange={handleChange}
            />
          </div>
          <button type="submit" className="btn btn-block">
            Confirmer
          </button>
        </form>
      </Wrapper>
    </>
  );
}

export default FormRdv;
