import { useState, useEffect } from "react";
import FormRow from "../components/FormRow";
import Wrapper from "../assets/wrappers/DashboardFormPage";
import NavBar from "../components/NavBar";
import Footer from "../components/compenent-footer/Footer";
import { useNavigate } from "react-router-dom";
import FormRowSelect from "../components/FormRowSelect";
// global context and useNavigate later
import { useAppContext } from "../context/appContext";
import Alert from "../components/Alert";

const initialState = {
  name: "",
  email: "",
  password: "",
  phoneNumber: "",
  speciality: "Rien",
  city: "Rien",
};
// if possible prefer local state
// global state

function LawyerRegister() {
  const [values, setValues] = useState(initialState);

  // global context and useNavigate later
  const {
    isLoading,
    showAlert,
    displayAlert,
    registerAvocat,
    specialityOptions,
    villeOptions,
    city,
    specialite,
  } = useAppContext();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    const { name, email, password, phoneNumber, speciality, city } = values;
    if (!email || !password || !name || !phoneNumber || !city || !speciality) {
      displayAlert();
      return;
    }
    const currentUser = {
      name,
      email,
      password,
      speciality,
      city,
      phoneNumber,
    };
    registerAvocat(currentUser);
    console.log(values);
  };

  return (
    <div>
      <NavBar />
      <Wrapper>
        <form className="form" onSubmit={onSubmit}>
          <h3
            style={{
              // textAlign: "center",
              fontFamily: "sans-serif",
              fontWeight: "bold",
            }}
          >
            Inscription d'Avocat
          </h3>
          <p
            style={{
              padding: "20px 0",
              fontFamily: "inherit",
              // textAlign: "center",
            }}
          >
            Un membre de notre équipe vous contactera pour confirmer votre
            compte et compléter votre abonnement.
          </p>
          {showAlert && <Alert />}
          <div className="form-center">
            {/* Nom */}
            <FormRow
              type="text"
              name="name"
              value={values.name}
              handleChange={handleChange}
            />
            {/* Prénom */}
            {/* <FormRow
              type="text"
              name=""
              // value={position}
              // handleChange={h andleCahandleChange}
            /> */}
            {/* Email */}
            <FormRow
              labelText="Email"
              type="text"
              name="email"
              value={values.email}
              handleChange={handleChange}
            />
            {/* Mot de passe */}
            <FormRow
              type="password"
              labelText="Mot de passe "
              name="password"
              value={values.password}
              handleChange={handleChange}
            />
            {/* Télépone */}
            <FormRow
              type="number"
              labelText="Télé. Personnel "
              name="phoneNumber"
              value={values.phoneNumber}
              handleChange={handleChange}
            />
            {/* Spécialité */}
            <FormRowSelect
              labelText="Spécialité"
              name="speciality"
              value={values.speciality}
              handleChange={handleChange}
              list={[specialite, ...specialityOptions]}
            />
            {console.log(values)}
            {/* Ville */}
            <FormRowSelect
              labelText="Ville"
              name="city"
              value={values.city}
              handleChange={handleChange}
              list={[city, ...villeOptions]}
            />
            <div className="btn-container">
              <button
                type="submit"
                className="btn btn-block submit-btn"
                disabled={isLoading}
              >
                submit
              </button>
              <button
                className="btn btn-block clear-btn"
                //   onClick={(e) => {
                //     e.preventDefault();
                //     clearValues();
                //   }}
              >
                clear
              </button>
            </div>
          </div>
        </form>
      </Wrapper>
      <Footer />
    </div>
  );
}

export default LawyerRegister;
