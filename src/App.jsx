import { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home";
import LogIn from "./Components/LogIn";
import Navbar from "./Components/Navbar";
import SignUp from "./Components/SignUp";
import Footer from "./Components/Footer";
import WomenWatchTab from "./Components/WomenWatchTab";
import NewsLetter from "./Components/NewsLetter";
import KidsWatchTab from "./Components/KidsWatchTab";
import MenWatchTab from "./Components/MenWatchTab";
import LimitedEditionTab from "./Components/LimitedEditionTab";
import ForgotPassword from "./Components/ForgotPassword";
import { ContextProvider } from "./context/ContextProvider";
import Women from "./Components/Women";
import ResetPassword from "./Components/ResetPassword";
import AdminHome from "./admin/pages/AdminHome";


function App() {
  return (
    <ContextProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/LogIn" element={<LogIn />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/women" element={<Women />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/password-reset/:token" element={<ResetPassword />} />
        <Route path="/WomenWatchTab" element={<WomenWatchTab />} />
        <Route path="/KidsWatchTab" element={<KidsWatchTab />} />
        <Route path="/MenWatchTab" element={<MenWatchTab />} />
        <Route path="/LimitedEdition" element={<LimitedEditionTab />} />
        <Route path="/admin/*" element={<AdminHome />} />
      </Routes>
      {/* <NewsLetter />
    <Footer /> */}
    </ContextProvider>
  );
}

export default App;
