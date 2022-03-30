import React from 'react';
import Banner from '../components/Banner'
import About from '../components/About'
import Navbar from "../components/NavBar/Navbar";
import Footer from '../components/compenent-footer/Footer'

import "../css/Main.css"





function Profil() {
  return (
    <div>
      <Navbar />
      <br />
      <Banner />
      <br />
      <About />
      <br />
    </div>
  );
}

export default Profil;
