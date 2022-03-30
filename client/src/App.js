import "./App.css";

import { WelcomePage, MonCompte, AreYouALawyer, Error } from "./pages";
import Messenger from "./pages/messenger/Messenger.jsx";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

//This need a refactor later
import Register from "./pages/UserRegister";
import UserRegister from "./pages/UserRegister";
import Chat from "./pages/Chat";

import SearchResult from "./pages/SearchResult";

import UserHome from "./pages/UserHome";

import FormRdv from "./pages/FormRdv";
import ConfirmerRdv from "./pages/ConfirmerRdv";
import MesRdv from "./pages/MesRdv";
import MesRdvPass from "./pages/MesRdvPass";
import Profil from "./pages/Profil";

import LawyerRegister from "./pages/LawyerRegister";
import AvocatHome from "./pages/AvocatHome";
import UserProfile from "./pages/UserProfile";
import Footer from "./components/compenent-footer/Footer";
import FetchTime from "./pages/FetchTime";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/profile" element={<Profil />} />
        <Route path="/update-profile" element={<UserProfile />} />
        <Route path="/appointements" element={<MesRdv />} />
        <Route path="/book-appointment" element={<FormRdv />} />
        <Route path="/passed-appointements" element={<MesRdvPass />} />
        <Route path="/appointment-confirmation" element={<ConfirmerRdv />} />
        <Route path="/registeruser" element={<UserRegister />} />
        <Route path="/registeravocat" element={<LawyerRegister />} />
        <Route path="/searchresult" element={<SearchResult />} />
        <Route path="/messenger" element={<Messenger />} />
        <Route path="/fetchtime" element={<FetchTime />} />
        
        <Route path="/moncompte" element={<MonCompte />} />
        <Route path="/avocathome" element={<AvocatHome />} />
        <Route path="/userhome" element={<UserHome />} />
        <Route path="/areyoualawyer" element={<AreYouALawyer />} />

        <Route path="*" element={<Error />} />
      </Routes>{" "}
      <Footer />
    </BrowserRouter>
  );
}

export default App;
