import React from "react";
import Wrapper from "../assets/wrappers/RegisterPage";
import "../css/Profil.css";
import NavBar from "../components/NavBar";
import Footer from "../components/compenent-footer/Footer";
import UserNavBar from "../components/UserNavBar";

function Profil() {
  return (
    <div>
      <UserNavBar />
      <Wrapper>
        <div class="container1">
          <div class="cover-photo">
            <img
              src="https://images.unsplash.com/photo-1565464027194-7957a2295fb7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80"
              class="profile"
            />
          </div>
          <div class="profile-name">Maître Prenom NOM</div>
          <p class="about">250 rue Saint Jacques-Paris</p>
          <p class="about">NB D'ANNEES D'EXPERIENCE</p>
          <p class="about">
            Rendez-vous au cabinet
            <br />
            Rendez-vous online
          </p>
          <a href="/Competence">
            <button class="follow-btn">plus d'information</button>
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

export default Profil;
