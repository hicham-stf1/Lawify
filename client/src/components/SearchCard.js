import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import main from "../assets/images/Judge.svg";
import Wrapper from "../assets/wrappers/LandingPage";
import Wrapper1 from "../assets/wrappers/RegisterPage";
import FormRowSelect from "../components/FormRowSelect";

const initialState = {
  spécialité: "",
  ville: "",
};

function SearchCard() {
  const [values, setValues] = useState(initialState);

  // global context and useNavigate later

  const handleChange = (e) => {
    console.log(e.target);
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
                    labelText="Spécialité"
                    name="searchStatus"
                    value="Choose One"
                    handleChange={handleChange}
                    list={["all", "hhh", "hhhhhh"]}
                  />

                  {/* <DropDown1 /> */}
                  <FormRowSelect
                    labelText="Ville"
                    name="searchStatus"
                    value="Choose One"
                    handleChange={handleChange}
                    list={["all", "hhh", "hhhhhh"]}
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
