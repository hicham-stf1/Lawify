import React from "react";
import Wrapper from "../assets/wrappers/RegisterPage";
import "../css/Profil.css";
import NavBar from "../components/NavBar";
import Footer from "../components/compenent-footer/Footer";
import UserNavBar from "../components/UserNavBar";

function Contact() {
  return (
    <div>
      <UserNavBar />
      <Wrapper>
        <div class="container1">
          <div class="profil-description"> Numéro de téléphone</div>
          <br />
          <i class="fa fa-phone"> 0678456778</i>
          <div class="profil-description">Adresse Email</div>
          <br />
          <i class="fa fa-envelope"> Avovat@gmail.com</i>
          <div class="profil-description">Location</div>
          <br />
          <i class="fa fa-map-marker"> 250 rue Saint Jacques -Paris</i>
          <br />

          <a href="/MesRdv">
            <button class="follow-btn">HOME</button>
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

export default Contact;
