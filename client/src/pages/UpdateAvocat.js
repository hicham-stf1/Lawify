import React from 'react';
import Banner from '../components/Banner'
import About from '../components/About'
import Navbar from "../components/NavBar/Navbar";
import { useEffect, useRef, useState } from "react";
import "../css/Main.css"
import { useAppContext } from "../context/appContext";





function UpdateAvocat() {
  // const { user } = useAppContext();
  // const [userr, setUserr] = useState(user);
  return (
    <div>
      <Navbar/>
      <br />
      <Banner />
      <br />
      <About />
      <br />
    </div>
  );
}

export default UpdateAvocat;