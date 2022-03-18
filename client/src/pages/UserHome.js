import React from "react";
import UserNavbar from "../components/NavBar/UserNavBar";

import Profil from "../pages/Profil";

export default function UserHome() {
  return (
    <div>
      <UserNavbar />
      <Profil />
    </div>
  );
}
