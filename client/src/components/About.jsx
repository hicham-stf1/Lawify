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

function About(props) {
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
        {props.user.presentation ? (
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
            <p class="desc">{props.user.presentation}</p>
            <br />
          </div>
        ) : (
          <div id="presentation">
            <div style={{ height: "100px" }} class="container1 section-header">
              <button
                onClick={openPresentationModal}
                type="submit"
                className="btn btn-block button editButton"
                style={{
                  float: "none",
                  marginTop: "20px",
                  width: "fit-content",
                }}
              >
                Ajouter une presentation
              </button>
            </div>
          </div>
        )}

        <br />
        <br />

        {props.user.competences ? (
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
              {props.user.competences.map((i, competence) => (
                <div key={i} class="competance">
                  <img style={{ width: "15px" }} src={ListImage} />{" "}
                  {props.user.competences[competence]}
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div id="competences">
            <div style={{ height: "100px" }} class="container1 section-header">
              <button
                onClick={openCoordonneesModal}
                type="submit"
                className="btn btn-block button editButton"
                style={{
                  float: "none",
                  marginTop: "20px",
                  width: "fit-content",
                }}
              >
                Ajouter vos competences
              </button>
            </div>
          </div>
        )}

        <br />
        <br />

        {props.user.adresse == null &&
        props.user.tele == null &&
        props.user.website == null ? (
          <div id="coordonnees" class="container1">
            <div style={{ height: "100px" }} class="section-header">
              <button
                onClick={openCoordonneesModal}
                type="submit"
                className="btn btn-block button editButton"
                style={{
                  float: "none",
                  marginTop: "20px",
                  width: "fit-content",
                }}
              >
                Ajouter vos coordonnees
              </button>
            </div>
            <div class="coordonnees">
              <div class="map">
                <img style={{ width: "200px" }} src={FakeMap}></img>
              </div>
            </div>
          </div>
        ) : (
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
                  <ImLocation2 /> {props.user.adresse}
                </p>
                <p>
                  <BiWorld />
                  <a href="https://monsite.com"> {props.user.website}</a>
                </p>
                <p>
                  <BsTelephoneFill /> {props.user.tele}
                </p>
                <p>
                  <MdEmail /> {props.user.email}
                </p>
              </div>
            </div>
          </div>
        )}

        <br />
        <br />
        {props.user.langues == null &&
        props.user.formations == null &&
        props.user.tarifs == null ? (
          <div id="infos">
            <div style={{ height: "100px" }} class="container1 section-header">
              <button
                onClick={openInfosModal}
                type="submit"
                className="btn btn-block button editButton"
                style={{
                  float: "none",
                  marginTop: "20px",
                  width: "fit-content",
                }}
              >
                Ajouter vos Informations
              </button>
            </div>
          </div>
        ) : (
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
        )}
      </div>
      <EditPresentationForm
        user={props.user}
        modalState={presentationModalState}
        openModal={openPresentationModal}
        // onModalSubmit={onPresentationModalSubmit}
      />
      <EditCompetencesForm
        user={props.user}
        modalState={competencesModalState}
        openModal={openCompetencesModal}
        // onModalSubmit={onCompetencesModalSubmit}
      />
      <EditCoordonneesForm
        user={props.user}
        modalState={coordonneesModalState}
        openModal={openCoordonneesModal}
        // onModalSubmit={onCoordonneesModalSubmit}
      />
      <EditInfosForm
        user={props.user}
        modalState={infosModalState}
        openModal={openInfosModal}
        // onModalSubmit={onInfosModalSubmit}
      />
    </>
  );
}

export default About;
