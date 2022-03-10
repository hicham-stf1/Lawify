import React from "react";
import Wrapper from "../assets/wrappers/RegisterPage";
import "../css/Profil.css";
import NavBar from "../components/NavBar";
import Footer from "../components/compenent-footer/Footer";
import { Link } from "react-router-dom";

function Competence() {
  return (
    <div>
      <NavBar />
      <Wrapper>
        <div class="container1">
          <div class="profil-description">Profil professionnel </div>
          <p class="about">
            l'avocat représente et défend, devant un tribunal, les particuliers
            ou les entreprises engagés dans un procès. Il suit des affaires
            civiles (accidents, divorces...) ou pénales (vols, crimes...). Dans
            le cadre des procédures pénales, il est présent lors des gardes à
            vue.
          </p>
          <br />
          <div class="profil-description">Compétences et réalisations </div>
          <p class="about">
            l'avocat représente et défend, devant un tribunal, les particuliers
            ou les entreprises engagés dans un procès. Il suit des affaires
            civiles (accidents, divorces...) ou pénales (vols, crimes...). Dans
            le cadre des procédures pénales, il est présent lors des gardes à
            vue.
          </p>
          <br />
          <div class="profil-description">Qualification et certification </div>
          <p class="about">
            l'avocat représente et défend, devant un tribunal, les particuliers
            ou les entreprises engagés dans un procès. Il suit des affaires
            civiles (accidents, divorces...) ou pénales (vols, crimes...). Dans
            le cadre des procédures pénales, il est présent lors des gardes à
            vue.
          </p>

          <a>
            <Link to="/Contact">
              {" "}
              <button class="follow-btn">Contact</button>
            </Link>
          </a>

          <div>
            <i class="fab fa-facebook-f"></i>
            <i class="fa fa-phone"></i>
            <i class="fa fa-envelope"></i>
            <i class="fa fa-globe"></i>
          </div>
        </div>
      </Wrapper>
      <Footer />
    </div>
  );
}

export default Competence;
