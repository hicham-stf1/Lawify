import "./App.css";
import { WelcomePage, MonCompte, AreYouALawyer, Error } from "./pages";
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
import Calendar from "./pages/Calendar.js";
import AvailabilitySlots from "./pages/AvailabilitySlots";
// import Requests from "./pages/AdminPanel/Requests";
import RequestDetails from "./pages/AdminPanel/RequestDetails";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/requestDetails" element={<RequestDetails />} />
        <Route path="/" element={<WelcomePage />} />
        <Route path="/Profil" element={<Profil />} />
        <Route path="/updateUser" element={<UserProfile />} />
        <Route path="/MesRdv" element={<MesRdv />} />
        <Route path="/RDV" element={<FormRdv />} />
        <Route path="/MesRdvPass" element={<MesRdvPass />} />
        <Route path="/Confirmation" element={<ConfirmerRdv />} />
        <Route path="/message" element={<Chat />} />
        <Route path="/moncompte" element={<MonCompte />} />
        <Route path="/userhome" element={<UserHome />} />
        <Route path="/avocathome" element={<AvocatHome />} />
        <Route path="/areyoualawyer" element={<AreYouALawyer />} />
        <Route path="/registeruser" element={<UserRegister />} />
        <Route path="/registeravocat" element={<LawyerRegister />} />
        <Route path="/searchresult" element={<SearchResult />} />
        <Route path="/fetchtime" element={<FetchTime />} />
        <Route path="/year/:year/month/:month" element={<Calendar />} />
        <Route path="/calender" element={<Calendar />} />
        <Route path="/availibilityslots" element={<AvailabilitySlots />} />
        <Route path="*" element={<Error />} />
      </Routes>{" "}
      {/* <Footer /> */}
    </BrowserRouter>
  );
}

export default App;
