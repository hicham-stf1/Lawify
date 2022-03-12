
import React from 'react';
// import logo from './logo.svg';
import Header from '../components/header'
import Navbar from '../components/Navbar1'
import Banner from '../components/Banner'
import About from '../components/About'
import Contact from '../components/Contact'
import "../css/Main.css"



function Profil() {
  return (
    <div >
      <Header />
      <br/>
      <hr  />
      <br/>
      <Navbar />
      <br />
      <Banner /> 
      <br/>
      <About />
      <br/>
      <h1 id="contactnav"></h1>
      <Contact />


    </div>
  );
}

export default Profil;
