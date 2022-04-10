import React, { Component, useEffect, useState } from "react";
import Navbar from "../components/Navbar1";
import ListImage from "../assets/images/img_525475.png";
import { MdVerified, MdWork } from "react-icons/md";
import { Link } from "react-router-dom";
import { ImLocation2 } from "react-icons/im";
import { MdEmail } from "react-icons/md";
import axios from "axios";
import avocatDefaultImg from "../assets/images/avocat-default-img.png";
import userDefaultImg from "../assets/images/user-default-img.png";
import { useAppContext } from "../context/appContext";
import EditInfosForm from "../components/EditInfosForm2";

function Banner(props) {
  const [infosModalState, setInfosModalState] = useState(false);
  const openInfosModal = () => {
    setInfosModalState(!infosModalState);
  };
  const user = JSON.parse(localStorage.getItem("user"));
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const getUserData = async () => {
      try {
        console.log("test");
        const res = await axios("/api/users?userId=" + props.user);
        setUserData(res.data);
        console.log(res.data);
        console.log(` user : ${userData}`);
      } catch (err) {
        console.log(err);
      }
    };
    getUserData();
  }, [props.user]);
  const link = `/messenger/${user._id}/${props.user}`;
  return (
    <div class="container1">
      <div class="cover-photo">
        <img
          src={
            userData?.image || userData?.role === "avocat"
              ? avocatDefaultImg
              : userDefaultImg
          }
          class="profile"
        />
        {userData?.role === "avocat" ? (
          <>
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
          </>
        ) : null}
      </div>

      <div class="profile-name">{userData?.name}</div>

      <div class="box">
        <div class="about">
          <p class="adresse">
            {userData?.adresse !== "" || userData?.role==="avocat" ? <ImLocation2 /> : null}{" "}
            {userData?.adresse}
          </p>
          <p class="email">
            <MdEmail />
            &nbsp;
            {userData?.email}
          </p>
          {userData?.role === "avocat" ? (
            <>
              <ul class="domaines">
                {userData?.domaines?.map((i, domaine) => (
                  <li key={i}>{userData?.domaines[domaine]}</li>
                ))}
              </ul>
              <ul class="services">
                <li>
                  <img style={{ width: "15px" }} src={ListImage} /> Rendez-vous
                  online
                </li>
                <li>
                  <img style={{ width: "15px" }} src={ListImage} /> Rendez-vous
                  au cabinet
                </li>
              </ul>
            </>
          ) : null}
        </div>
        <div class="actions">
          {user._id === props.user ? (
            <button onClick={openInfosModal} className="btn btn-block button">
              Modifier Mes Informations
            </button>
          ) : null}

          {userData?.role === "avocat" && props.user !== user._id ? (
            <>
              <Link to="/fetchtime">
                <button type="submit" className="btn btn-block button">
                  {user._id === props.user
                    ? "Mon Calendrier"
                    : "Voir Calendrier"}
                </button>
              </Link>
              <a href={link}>
                <button type="submit" className="btn btn-block button">
                  Envoyer un message
                </button>
              </a>
            </>
          ) : null}
        </div>
      </div>
      {userData?.role === "avocat" ? <Navbar /> : null}
      <EditInfosForm
        key={userData}
        modalState={infosModalState}
        openModal={openInfosModal}
        userData={userData}
        // onModalSubmit={onModalSubmit}
      />
    </div>
  );
}

export default Banner;
