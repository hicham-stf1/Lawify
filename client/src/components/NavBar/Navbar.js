import React, { useState, useRef, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { links, social } from "./data";
import logo from "./logo.svg";
import "./Navbar.css";
import { Link } from "react-router-dom";
import Logo from "../Logo";
import { useAppContext } from "../../context/appContext";

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);
  const { user } = useAppContext();
  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };
  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;
    if (showLinks) {
      linksContainerRef.current.style.height = `${linksHeight}px`;
    } else {
      linksContainerRef.current.style.height = "0px";
    }
  }, [showLinks]);
  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/">
            <Logo />
          </Link>
          <button className="nav-toggle" onClick={toggleLinks}>
            <FaBars />
          </button>
        </div>
        <div className="links-container" ref={linksContainerRef}>
          <ul className="links" ref={linksRef}>
                <li>
                  <a href="/areyoualawyer">Vous êtes un avocat ?</a>
                </li>
                <li>
                  <a href="/projects">Français</a>
                </li>
                <li>
                  <a href={user? `/profile` : `/moncompte`}>{user? `Mon Profil` : `Se Connecter`}</a>
                </li>
          </ul>
        </div>
        {/* <ul className="social-icons">
          {social.map((socialIcon) => {
            const { id, url, icon } = socialIcon;
            return (
              <li key={id}>
                <a href={url}>{icon}</a>
              </li>
            );
          })}
        </ul> */}
      </div>
    </nav>
  );
};

export default Navbar;
