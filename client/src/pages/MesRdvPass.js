import { useState, useEffect } from "react";
import FormRow from "../components/FormRow";
import Wrapper from "../assets/wrappers/RegisterPage";
import { useAppContext } from "../context/appContext";
import { useNavigate } from "react-router-dom";
import UserNavBar from "../components/UserNavBar";
import Footer from "../components/compenent-footer/Footer";
import "../css/RDV.scss";

function MesRdvPass() {
  return (
    <>
      <UserNavBar />
      <Wrapper className="full-page">
        <nav className="RdvNav">
          <a href="/MesRdv">Rendez-vous à venir</a>
          <a href="/MesRdvPass">Rendez-vous passés </a>

          <div class="animation start-home"></div>
        </nav>
        <div class="cards-container">
          <div class="card card-one">
            <header>
              <div class="avatar">
                <img src="https://randomuser.me/api/portraits/men/3.jpg" />
              </div>
            </header>
            <h3>Maître.prenom et nom</h3>
            <div class="desc">
              le Droit constitutionnel, le Droit administratif, les libertés
              publiques
            </div>
            <p>
              Vous eûtes rendez-vous le 1 février 2022 <br />
              14:30-14:45
            </p>
            <button type="submit" className="btn btn-block">
              Envoyer un message
            </button>
            <button type="submit" className="btn btn-block">
              Annuler le rendez-vous
            </button>
          </div>
        </div>
      </Wrapper>
      <Footer />
    </>
  );
}

export default MesRdvPass;