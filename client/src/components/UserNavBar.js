import React, { Component } from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import Dropdown, { DropdownButton } from "react-bootstrap";
import { AiOutlineMenu } from "react-icons/ai";
import { useAppContext } from "../context/appContext";
export default function UNavBar() {
  // const doc = document;
  // const menuOpen = doc.querySelector(".menu");
  // const menuClose = doc.querySelector(".close");
  // const overlay = doc.querySelector(".overlay");

  // menuOpen.addEventListener("click", () => {
  //   overlay.classList.add("overlay--active");
  // });

  // menuClose.addEventListener("click", () => {
  //   overlay.classList.remove("overlay--active");
  // });
  // global context and useNavigate later
  const { logoutUser } = useAppContext();
  return (
    <div>
      <header>
        <a className="logo" href="/">
          <Logo />
        </a>
        <nav>
          <ul className="nav__links">
            <li>
              <Link to="/MesRdv">
                {" "}
                <a href="#">Mes Rendez-Vous</a>
              </Link>
            </li>
            <li>
              {/* <Link to="/message"> */}
              <a href="/message" onClick={logoutUser}>
                Mes Messages
              </a>
              {/* </Link> */}
            </li>
          </ul>
        </nav>
        <Link to="/userProfil">
          <a
            style={{ textDecoration: "none" }}
            className="cta"
            href="moncompte"
          >
            Profil
          </a>
        </Link>
        <p className="menu cta">
          <AiOutlineMenu size={28} />
        </p>
      </header>
      <div id="mobile__menu" className="overlay">
        <a className="close">&times;</a>
        <div className="overlay__content">
          <Link to="/moncompte">
            <a href="moncompte">mes RDVs</a>
          </Link>
          <Link to="/moncompte">
            <a href="moncompte">Mes messages</a>
          </Link>
          <Link to="/moncompte">
            <a href="moncompte">Mon Profil</a>
          </Link>
        </div>
      </div>
    </div>
  );
}
