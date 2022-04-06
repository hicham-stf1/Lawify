import React, { useState, useRef, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import "./Navbar.css";
import { FiLogOut } from "react-icons/fi";
import { Link } from "react-router-dom";
import Logo from "../Logo";
import { useAppContext } from "../../context/appContext";

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const { user } = useAppContext();
  const [userr, setUserr] = useState(user);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);
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

  const logoutUser = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
  };
  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <Link style={{ width: "fit-content", float: "left" }} to="/">
            <Logo />
          </Link>
          <button className="nav-toggle" onClick={toggleLinks}>
            <FaBars />
          </button>
        </div>
        <div
          style={{ margin: "auto" }}
          className="links-container"
          ref={linksContainerRef}
        >
          <ul className="links" ref={linksRef}>
            <li>
              <a style={{ width: "fit-content" }} href="/messenger">
                Messenger
              </a>
            </li>

            {userr && userr.role === "avocat" ? (
              <li>
                <a style={{ width: "fit-content" }} href="/calender">
                  Mon Calendrier
                </a>
              </li>
            ) : (
              <></>
            )}

            <li>
              <a style={{ width: "fit-content" }} href="/projects">
                Mes Rendez-vous
              </a>
            </li>
            <li>
              <a
                style={{ width: "fit-content" }}
                href={user ? `/profile` : `/moncompte`}
              >
                {user ? `Mon Profil` : `Se Connecter`}
              </a>
            </li>
            {user ? (
              <li>
                <a className="logouticon" href="/" onClick={logoutUser}>
                  <FiLogOut title="LogOut" style={{ fontSize: "1.5em" }} />
                </a>
              </li>
            ) : (
              <></>
            )}
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
