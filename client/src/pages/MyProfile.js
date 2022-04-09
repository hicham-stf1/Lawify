import React from "react";
import Banner from "../components/Banner";
import About from "../components/About";
import Navbar from "../components/NavBar/Navbar";
import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import "../css/Main.css";
import { useAppContext } from "../context/appContext";

function MyProfile() {
  const { user } = useAppContext();
  const [userr, setUserr] = useState(user);

  return (
    <div>
      <Navbar />
      <br />
      <Banner user={userr._id} />
      <br />
      {userr.role === "user" ? null : <About user={userr._id} />}

      <br />
    </div>
  );
}

export default MyProfile;
