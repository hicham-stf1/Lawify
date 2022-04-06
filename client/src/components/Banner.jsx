import React, { Component, useState } from "react";
import Navbar from "../components/Navbar1";
import ListImage from "../assets/images/img_525475.png";
import { MdVerified, MdWork } from "react-icons/md";
import { Link } from "react-router-dom";
import ProfileDefault from "../assets/images/profile-default.png";
import { useAppContext } from "../context/appContext";
import EditInfosForm from "../components/EditInfosForm2";

function Banner(props) {
  const [infosModalState, setInfosModalState] = useState(false);
  const openInfosModal = () => {
    setInfosModalState(!infosModalState);
  };
  return (
    <div class="container1">
      <div class="cover-photo">
        <img src={ProfileDefault} class="profile" />
        <div class="verified">
          <MdVerified />
          <p style={{ display: "inline" }}>
            &nbsp;Cet avocat nous a fait parvenir sa carte professionnelle
          </p>
        </div>
        <div class="experience">
          <MdWork />
          <p style={{ display: "inline" }}>&nbsp;20 annees d'experience</p>
        </div>
      </div>

      <div class="profile-name">{props.user.name}</div>

      <div class="box">
        <div class="about">
          <p class="adresse">250 rue Saint Jacques-Paris</p>
          <ul class="domaines">
            <li>Domaine 1</li>
            <li>Domaine 2</li>
            <li>Domaine 3</li>
          </ul>
          <ul class="services">
            <li>
              <img style={{ width: "15px" }} src={ListImage} /> Rendez-vous
              online
            </li>
            <li>
              <img style={{ width: "15px" }} src={ListImage} /> Rendez-vous au
              cabinet
            </li>
          </ul>
        </div>
        <div class="actions">
          <button onClick={openInfosModal} className="btn btn-block button">
            Modifier Mes Informations
          </button>
          <Link to="/fetchtime">
            <button type="submit" className="btn btn-block button">
              Mon Calendrier
            </button>
          </Link>
        </div>
      </div>
      <Navbar />
      <EditInfosForm
        modalState={infosModalState}
        openModal={openInfosModal}
        // onModalSubmit={onModalSubmit}
      />
    </div>
  );
}

export default Banner;
