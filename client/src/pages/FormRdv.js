import { useState, useEffect } from "react";
import FormRow from "../components/FormRow";
import Wrapper from "../assets/wrappers/RegisterPage";

import { useAppContext } from "../context/appContext";
import { useNavigate } from "react-router-dom";
import UserNavBar from "../components/UserNavBar";
import Footer from "../components/compenent-footer/Footer";


// global context and useNavigate later

const initialState = {
  nom: "",
  prenom: "",
  email: "",
  téléphone: "",
  isMember: true,
};
// if possible prefer local state
// global state

function  FormRdv() {
  const [values, setValues] = useState(initialState);

  // global context and useNavigate later
  const { isLoading, showAlert, displayAlert, loginUser, user } =
    useAppContext();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
   // const { email, password } = values;
    //if (!email || !password) {
     // displayAlert();
     // return;
    }
   // const currentUser = { email, password };
   // loginUser(currentUser);
    //console.log(values);
 // };

  //useEffect(() => {
  //  if (user) {
      // setTimeout(() => {
     // navigate("/userhome");
      // }, 3000);
   // }
  //}, [user, navigate]);
  return (
      <>
      <UserNavBar />
      
      
        <div className="bubble">
            <div className="bubble-text">
                <h5><i class="fa fa-bell" aria-hidden="true">  Maître.prénom et nom</i></h5>
                <hr/>
                <hr/>
                <p>mardi 22 février-15:30</p>
            </div>
        </div>
      
     
    <Wrapper className="full-page">
      <form className="form" onSubmit={onSubmit}>
        <h3>Prendre votre rendez-vous</h3>
        
        {/* name field */}
        <div className="form-row">
          {/* email input */}
          <FormRow
            type="text"
            name="nom"
            value={values.nom}
            handleChange={handleChange}
          />
          {/* password input */}
          <FormRow
            type="text"
            name="prenom"
            value={values.prenom}
            handleChange={handleChange}
          />
           <FormRow
            type="email"
            name="email"
            value={values.email}
            handleChange={handleChange}
          />
           <FormRow
            type="text"
            name="téléphone"
            value={values.téléphone}
            handleChange={handleChange}
          />
        </div>
        <button  type="submit" className="btn btn-block"  >
          Confirmer
        </button>
       
      </form>
    </Wrapper>
    <Footer/>
    </>
   
  );
}

export default FormRdv;
