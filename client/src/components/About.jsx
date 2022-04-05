import React, { Component, useState } from "react";
import ListImage from "../assets/images/img_525475.png";
import FakeMap from "../assets/images/Capture.PNG";
import { Link } from "react-router-dom";
import { ImLocation2 } from "react-icons/im";
import { BiWorld } from "react-icons/bi";
import { BsTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import EditPresentationForm from "../components/EditPresentationForm";
import EditCompetencesForm from "../components/EditCompetencesForm";
import EditCoordonneesForm from "../components/EditCoordonneesForm";
import EditInfosForm from "../components/EditInfosForm";

function About() {
  const [presentationModalState, setPresentationModalState] = useState(false);
  const [competencesModalState, setCompetencesModalState] = useState(false);
  const [coordonneesModalState, setCoordonneesModalState] = useState(false);
  const [infosModalState, setInfosModalState] = useState(false);
  const openPresentationModal = () => {
    setPresentationModalState(!presentationModalState);
  };
  const openCompetencesModal = () => {
    setCompetencesModalState(!competencesModalState);
  };
  const openCoordonneesModal = () => {
    setCoordonneesModalState(!coordonneesModalState);
  };
  const openInfosModal = () => {
    setInfosModalState(!infosModalState);
  };
  return (
    <>
      <div>
        <div id="presentation" class="container1">
          <br />
          <div class="section-header">
            <div class="section-title">Présentation</div>
            <button
              onClick={openPresentationModal}
              type="submit"
              className="btn btn-block button editButton"
            >
              Modifier
            </button>
          </div>
          <p class="desc">
            l'avocat représente et défend, devant un tribunal, les particuliers
            ou les entreprises engagés dans un procès. Il suit des affaires
            civiles (accidents, divorces...) ou pénales (vols, crimes...). Dans
            le cadre des procédures pénales, il est présent lors des gardes à
            vue.
          </p>
          <br />
        </div>
        <br />
        <div id="competences" class="container1">
          <br />
          <div class="section-header">
            <div class="section-title">Compétances</div>
            <button
              onClick={openCompetencesModal}
              type="submit"
              className="btn btn-block button editButton"
            >
              Modifier
            </button>
          </div>
          <div class="competances">
            <div class="competance">
              <img style={{ width: "15px" }} src={ListImage} /> Competance 1
            </div>
            <div class="competance">
              <img style={{ width: "15px" }} src={ListImage} /> Competance 2
            </div>
            <div class="competance">
              <img style={{ width: "15px" }} src={ListImage} /> Competance 3
            </div>
            <div class="competance">
              <img style={{ width: "15px" }} src={ListImage} /> Competance 3
            </div>
            <div class="competance">
              <img style={{ width: "15px" }} src={ListImage} /> Competance 3
            </div>
            <div class="competance">
              <img style={{ width: "15px" }} src={ListImage} /> Competance 3
            </div>
            <div class="competance">
              <img style={{ width: "15px" }} src={ListImage} /> Competance 3
            </div>
          </div>
        </div>
        <br />
        <div id="coordonnees" class="container1">
          <br />
          <div class="section-header">
            <div class="section-title">Coordonnées</div>
            <button
              onClick={openCoordonneesModal}
              type="submit"
              className="btn btn-block button editButton"
            >
              Modifier
            </button>
          </div>
          <div class="coordonnees">
            <div class="map">
              <img style={{ width: "200px" }} src={FakeMap}></img>
            </div>
            <div class="coordonnee">
              <p>
                <ImLocation2 /> 250 rue Saint Jacques - 75005 Paris 5eme
                Arrondissement
              </p>
              <p>
                <BiWorld />
                <a href="https://monsite.com"> https://monsite.com</a>
              </p>
              <p>
                <BsTelephoneFill /> +21206060606
              </p>
              <p>
                <MdEmail /> nom.prenom@mymail.com
              </p>
            </div>
          </div>
        </div>
        <br />
        <div id="infos" class="container1">
          <br />
          <div class="section-header">
            <div class="section-title">Informations Supplimentaires</div>
            <button
              onClick={openInfosModal}
              className="btn btn-block button editButton"
            >
              Modifier
            </button>
          </div>
          <ul class="infos">
            <li>
              Langues Parlées :{" "}
              <span style={{ display: "block" }}>
                العربية • Français • English
              </span>
            </li>
            <li>
              Diplomes et formations :
              <span style={{ display: "block" }}>
                <ul class="info">
                  <li>Maîtrise de Droit des Affaires (1989)</li>
                  <li>DEA de Droit de l'Economie (1990)</li>
                </ul>
              </span>
            </li>
            <li>
              Tarifs :{" "}
              <span style={{ display: "block" }}>
                <ul class="info">
                  <li>Rendez-vous au cabinet : 150 DH</li>
                  <li>Rendez-vous en ligne : 100 DH</li>
                </ul>
              </span>
            </li>
          </ul>
        </div>
      </div>
      <EditPresentationForm
        modalState={presentationModalState}
        openModal={openPresentationModal}
        // onModalSubmit={onModalSubmit}
      />
      <EditCompetencesForm
        modalState={competencesModalState}
        openModal={openCompetencesModal}
        // onModalSubmit={onModalSubmit}
      />
      <EditCoordonneesForm
        modalState={coordonneesModalState}
        openModal={openCoordonneesModal}
        // onModalSubmit={onModalSubmit}
      />
      <EditInfosForm
        modalState={infosModalState}
        openModal={openInfosModal}
        // onModalSubmit={onModalSubmit}
      />
    </>
  );
}

export default About;
