import React from "react";
import UserNavbar from "../components/NavBar/UserNavBar";
import Footer from "../components/compenent-footer/Footer";
import Profil from "../pages/Profil";

export default function UserHome() {
  return (
    <div>
      <UserNavbar />
      <Profil />
      {/* <Footer /> */}
    </div>
  );
}
