import React from 'react';
import Banner from '../components/Banner'
import About from '../components/About'
import UserNavbar from "../components/NavBar/UserNavBar";
import Footer from '../components/compenent-footer/Footer'

import "../css/Main.css"





function Profil() {
  return (
    <div>
      <UserNavbar />
      <br />
      <Banner />
      <br />
      <About />
      <br />
    </div>
  );
}

export default Profil;
