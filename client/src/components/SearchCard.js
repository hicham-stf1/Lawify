import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import main from "../assets/images/Judge.svg";
import axios from "axios";
import Wrapper from "../assets/wrappers/LandingPage";
import Wrapper1 from "../assets/wrappers/RegisterPage";
import FormRowSelect from "../components/FormRowSelect";

const initialState = {
  speciality: "",
  city: "",
};

function SearchCard() {
  const [cities, setCities] = useState();
  const [specialities, setSpecialities] = useState();
  const [values, setValues] = useState(initialState);

  useEffect(() => {
    const getCities = async () => {
      try {
        const res = await axios.get("/api/v1/cities");
        setCities(res.data);
        console.log(res);
      } catch (err) {
        console.log(err);
      }
    };
    getCities();
  }, []);

  useEffect(() => {
    const getSpecialities = async () => {
      try {
        const res = await axios.get("/api/v1/specialities");
        setSpecialities(res.data);
        console.log(res);
      } catch (err) {
        console.log(err);
      }
    };
    getSpecialities();
  }, []);

  // global context and useNavigate later

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
    console.log(values);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(e.target);
  };

  return (
    <Wrapper>
      <main>
        <div className="container page">
          <div className="info">
            <Wrapper1 className="full-page">
              <form className="form" onSubmit={onSubmit}>
                <h3>Chercher un Avocat</h3>

                {/* Spécialité field */}
                <div className="form-row">
                  <FormRowSelect
                    labelText="speciality"
                    name="speciality"
                    value={values.speciality}
                    handleChange={handleChange}
                    list={["speciality1", "speciality2", "speciality3"]}
                  />

                  {/* <DropDown1 /> */}
                  <FormRowSelect
                    labelText="city"
                    name="city"
                    value={values.city}
                    handleChange={handleChange}
                    list={["meknes", "rabat", "casa"]}
                  />
                </div>
                <Link to="/searchresult">
                  <button type="submit" className="btn btn-block">
                    Chercher
                  </button>
                </Link>
              </form>
            </Wrapper1>
          </div>
          <img src={main} alt="job hunt" className="img main-img" />
        </div>
      </main>
    </Wrapper>
  );
}

export default SearchCard;
